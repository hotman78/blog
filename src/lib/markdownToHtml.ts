import { remark } from 'remark'
import html from 'remark-html'
import zenn from 'zenn-markdown-html'
import {visit} from 'unist-util-visit'

export default async function markdownToHtml(markdown: string) {
  // const result = await remark()
  //   .use(myRemarkPluginToIncreaseHeadings)
  //   .use(html)
  //   .process(markdown)
  return zenn(markdown)
}

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
function myRemarkPluginToIncreaseHeadings() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === 'heading') {
        node.depth++
      }
    })
  }
}