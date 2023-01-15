import markdownStyles from './markdown-styles.module.css'
import type Author from '../interfaces/author'
import TableOfContent from '../interfaces/tableOfContent'
import PostTOC from './post-toc'
import Avatar from './avatar'
import CoverImage from './cover-image'

type Props = {
  coverImage: string
  author: Author
  tableOfContent: TableOfContent[]
}

const PostSidebar = ({ coverImage, author, tableOfContent }: Props) => {
  if ( author === undefined ) {
    author.name = 'hotman78'
    author.picture = '/assets/blog/authors/hotman78.jpg'
  }
  return (
    <>
      {/* <div className="center max-w-2xl max-h-2xl mx-auto bg-accent-1 p-10 h-fit rounded-xl">
        <Avatar name={author.name} picture={author.picture} />
        <div className="hidden md:block md:mb-12">
        </div>
      </div> */}
      <PostTOC tableOfContent={tableOfContent}/>
    </>
  )
}

export default PostSidebar
