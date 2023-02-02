import markdownStyles from "./markdown-styles.module.css";
import DateFormatter from "./date-formatter";
import Link from "next/link";
import markdownToHtml from "../lib/markdownToHtml";
import PostType from "../interfaces/post";
import Card from "./card";

type Props = {
  post: PostType;
};

const PostPreview = ({ post }: Props) => {
  return (
    <Card>
      <h3 className="text-2xl mb-3 leading-snug">
        <Link
          as={`/posts/${post.slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {post.title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={post.date} />
      </div>
    </Card>
  );
};

export default PostPreview;
