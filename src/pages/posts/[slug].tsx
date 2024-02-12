import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post/body";
import PostHeader from "../../components/post/header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post/title";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import tableOfContent from "../../lib/tableOfContent";
import type PostType from "../../interfaces/post";
import PostSidebar from "../../components/post/sidebar";
import { useMemo } from "react";
import Comments from "../../components/comment";
import { BLOG_TITLE, BLOG_URL } from "../../lib/constants";

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
  const ogImage = useMemo(() => {
    return `/api/og?title=${post.title}`;
  }, [post.title]);
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{`${post.title} | ${BLOG_TITLE}`}</title>
                <meta property="og:image" content={`${BLOG_URL}${ogImage}`} />
              </Head>
              <div>
                <PostHeader />
                <PostBody post={post} />
                {/* <PostSidebar post={post} /> */}
                <Comments />
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
  const content = String(await markdownToHtml(post.content || ""));
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
