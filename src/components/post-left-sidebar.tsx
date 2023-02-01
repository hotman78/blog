import PostType from "../interfaces/post";
import PostTOC from "./post-toc";
type Props = { post:PostType }

const PostLeftSidebar = ({ post } : Props) => {
  return (
    <>
      {post.tableOfContent.length > 0 && <PostTOC tableOfContent={post.tableOfContent} />}
    </>
  );
};

export default PostLeftSidebar;
