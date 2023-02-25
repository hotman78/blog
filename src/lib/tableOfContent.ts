import { JSDOM } from "jsdom";
import TableOfContent from "../interfaces/tableOfContent";

export default function getTableOfContent(content: string) {
  const domHtml = new JSDOM(content).window.document;
  // 目次の取得
  const elements = domHtml.querySelectorAll<HTMLElement>("h1, h2");
  const tableOfContent: TableOfContent[] = [];
  elements.forEach(element => {
    const level = element.tagName;
    const title = "a";//element.innerHTML.split("</a> ")[1];
    const href = "#" + element.id;
    const record = { level: level, title: title, href: href };
    tableOfContent.push(record);
    console.log(record);
  });
  return tableOfContent;
}
