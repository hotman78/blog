import markdownStyles from "./markdown-styles.module.css";
import PostTitle from "./post-title";
import DateFormatter from "./date-formatter";
import type PostType from "../interfaces/post";
type Props = { post:PostType }
const PostBody = ({ post }: Props) => {
  return (
    <div className="block max-w-4xl">
      <div className="flex flex-col sticky top-6">
        <div className="p-4 shadow-md rounded-xl lg:mb-6 bg-accent-1 ">
          <DateFormatter dateString={post.date} />
          <PostTitle>{post.title}</PostTitle>
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default PostBody;
