import PostType from "../interfaces/post";
import PostTOC from "./post-toc";
type Props = { post: PostType };

const PostSidebar = ({ post }: Props) => {
  return (
    <>
      {post.tableOfContent.length > 0 && (
        <PostTOC tableOfContent={post.tableOfContent} />
      )}
    </>
  );
};

export default PostSidebar;
