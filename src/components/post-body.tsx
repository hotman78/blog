import markdownStyles from "./markdown-styles.module.css";
import PostTitle from "./post-title";
import DateFormatter from "./date-formatter";
import type PostType from "../interfaces/post";
import Card from "./card"

type Props = { post: PostType };
const PostBody = ({ post }: Props) => {
  return (
    <Card>
      <DateFormatter dateString={post.date} />
          <PostTitle>{post.title}</PostTitle>
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
    </Card>
  );
};

export default PostBody;
