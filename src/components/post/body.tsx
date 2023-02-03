import PostTitle from "./title";
import DateFormatter from "../date-formatter";
import type PostType from "../../interfaces/post";
import Card from "../card"

type Props = { post: PostType };
const PostBody = ({ post }: Props) => {
  return (
    <Card css="block max-w-3xl">
      <DateFormatter dateString={post.date} />
      <PostTitle>{post.title}</PostTitle>
      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Card>
  );
};

export default PostBody;
