import type Author from './author'
import TableOfContent from './tableOfContent'

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  tableOfContent: TableOfContent[]
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export default PostType
