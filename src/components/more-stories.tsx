import PostPreview from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-4xl md:text-4xl font-bold tracking-tighter leading-tight">
        Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-2 lg:gap-x-4 gap-y-2 md:gap-y-4 mb-32">
        {posts.map(post => (
          <PostPreview key={post.date} post={post} />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
