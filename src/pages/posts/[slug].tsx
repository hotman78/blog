import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import tableOfContent from "../../lib/tableOfContent";
import type PostType from "../../interfaces/post";
import PostSidebar from "../../components/post-sidebar";

type Props = {
  post: PostType;
  // morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  post.ogImage ??= { url: "/assets/blog/preview/cover.jpg" };
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32 znc">
              <Head>
                <title>{post.title}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <div className="flex flex-wrap">
                <PostHeader />
                <PostBody
                  date={post.date}
                  title={post.title}
                  content={post.content}
                />
                <PostSidebar
                  coverImage={post.coverImage}
                  author={
                    post.author ?? {
                      name: "hotman78",
                      picture: "/assets/blog/authors/hotman78.jpg"
                    }
                  }
                  tableOfContent={post.tableOfContent}
                />
              </div>
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage"
  ]);
  const content = await markdownToHtml(post.content || "");
  const toc = tableOfContent(content);
  return {
    props: {
      post: {
        ...post,
        content,
        tableOfContent: toc
      }
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
}
