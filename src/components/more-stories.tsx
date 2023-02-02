import PostPreview from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      {/* <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        記事一覧
      </h2> */}
      <div className="grid grid-cols-3 md:gap-x-16 lg:gap-x-32 gap-y-5 md:gap-y-8 mb-32">
        {posts.map(post => (
          <PostPreview key={post.date} post={post} />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
