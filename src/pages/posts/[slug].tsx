import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from 'zenn-markdown-html'
import type PostType from '../../interfaces/post'
import type TableOfContent from '../../interfaces/tableOfContent'
import PostSidebar from '../../components/post-sidebar'
import { JSDOM } from 'jsdom'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <div className="flex flex-wrap">
                <div>
                  <PostHeader/>
                  <PostBody
                    date={post.date}
                    title={post.title}
                    content={post.content}
                  />
                </div>
                <PostSidebar
                  coverImage={post.coverImage}
                  author={post.author}
                  tableOfContent={post.tableOfContent}
                />
              </div>
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')
  const domHtml = new JSDOM(content).window.document
  // 目次の取得
  const elements = domHtml.querySelectorAll<HTMLElement>("h2")
  const tableOfContent: TableOfContent[] = []
  elements.forEach((element) => {
    const level = element.tagName
    const title = element.innerHTML.split("</a> ")[1]
    const href = "#" + element.id
    const record = { level: level, title: title, href: href }
    tableOfContent.push(record)
    console.log(record);
  });
  return {
    props: {
      post: {
        ...post,
        content,
        tableOfContent: tableOfContent,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
