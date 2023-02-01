import markdownStyles from "./markdown-styles.module.css";
import DateFormatter from "./date-formatter";
import Link from "next/link";
import markdownToHtml from "../lib/markdownToHtml";

type Props = {
  title: string;
  // coverImage: string
  date: string;
  excerpt: string;
  // author: Author
  slug: string;
};

const PostPreview = ({
  title,
  // coverImage,
  date,
  excerpt,
  // author,
  slug
}: Props) => {
  const excerpt_html = markdownToHtml(excerpt ?? "");
  return (
    <div>
      <div className="mb-5">
        {/* <CoverImage slug={slug} title={title} src={coverImage} /> */}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      {/* <div
        className={`text-lg leading-relaxed mb-4 znc ${markdownStyles["markdown"]}`}
        dangerouslySetInnerHTML={{ __html: excerpt_html }}
      /> */}
    </div>
  );
};

export default PostPreview;
