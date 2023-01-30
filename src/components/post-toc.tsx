import TableOfContent from "../interfaces/tableOfContent";

type Props = {
  tableOfContent: TableOfContent[];
};

const PostTOC = ({ tableOfContent }: Props) => {
  return (
    <div className="hidden lg:block lg:w-72 lg:ml-3">
      <div className="flex flex-col sticky top-6">
        <div className="p-4 shadow-md rounded-xl mb-6 bg-accent-1 ">
          <p className="text-xl text-bold mb-4">目次</p>
          <ul>
            {tableOfContent.map((anchor: TableOfContent) => {
              if (anchor.level === "H1") {
                return (
                  <li key={anchor.href}>
                    <a href={anchor.href}>{anchor.title}</a>
                  </li>
                );
              } else {
                return (
                  <li key={anchor.href}>
                    <a href={anchor.href}>{anchor.title}</a>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostTOC;
