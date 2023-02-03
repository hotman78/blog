import TableOfContent from "../../interfaces/tableOfContent";
import Card from "../card";

type Props = {
  tableOfContent: TableOfContent[];
};

const PostTOC = ({ tableOfContent }: Props) => {
  return (
    <Card css="hidden lg:block lg:w-72 lg:ml-3">
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
    </Card>
  );
};

export default PostTOC;
