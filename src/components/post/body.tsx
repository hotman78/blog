import PostTitle from "./title";
import DateFormatter from "../date-formatter";
import type PostType from "../../interfaces/post";
import Article from "./article"
import Comments from "../comment";
import 'katex/dist/katex.min.css'

type Props = { post: PostType };
const PostBody = ({ post }: Props) => {
  return (
    <div className="markdown-body"><Article post={post}/></div>
    // <Card css="block max-w-3xl">
    //   <DateFormatter dateString={post.date} />
    //   <PostTitle>{post.title}</PostTitle>
    //   <div
    //     dangerouslySetInnerHTML={{ __html: post.content }}
    //   />
    //   <Comments/>
    // </Card>
  );
};

export default PostBody;
