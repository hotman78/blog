import PostPreview from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Articles
          </h2>
          {/* <p className="mt-1 text-gray-600 dark:text-gray-400">See how game-changing companies are making the most of every engagement with Preline.</p> */}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map(post => (
            <PostPreview key={post.date} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreStories;
