import markdownStyles from "./markdown-styles.module.css";
import DateFormatter from "./date-formatter";
import Link from "next/link";
import markdownToHtml from "../lib/markdownToHtml";
import PostType from "../interfaces/post";
import Card from "./card";
import { useMemo } from "react";

type Props = {
  post: PostType;
};

const PostPreview = ({ post }: Props) => {
  const ogImage = useMemo(() => {
    return `/api/og?title=${post.title}`;
  }, [post.title]);
  return (
    // <!-- Card -->
    <Link
      as={`/posts/${post.slug}`}
      href="/posts/[slug]"
      className="group block"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          className="w-full object-cover rounded-xl"
          src={ogImage}
          alt="Image Description"
        />
      </div>
      <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
        {post.title}
      </h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {post.date}
      </p>
    </Link>
  );
  {
    /* <Card css="max-w-2xl">
      <div classNameName="text-lg mb-4">
        <DateFormatter dateString={post.date} />
      </div>
      <h3 classNameName="text-2xl font-medium mb-3 leading-snug">
        <Link
          as={`/posts/${post.slug}`}
          href="/posts/[slug]"
          classNameName="hover:underline"
        >
          {post.title}
        </Link>
      </h3>
    </Card> */
  }
};

export default PostPreview;
