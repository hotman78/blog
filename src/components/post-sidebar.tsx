import markdownStyles from './markdown-styles.module.css'
import type Author from '../interfaces/author'
import TableOfContent from '../interfaces/tableOfContent'
import Avatar from './avatar'
import CoverImage from './cover-image'

type Props = {
  coverImage: string
  author: Author
  tableOfContent: TableOfContent[]
}

const PostSidebar = ({ coverImage, author, tableOfContent }: Props) => {
  return (
    <div className="center max-w-2xl max-h-2xl mx-auto bg-accent-1 p-10 h-fit rounded-xl">
      {/* <div className="flex center hidden md:block md:mb-12"> */}
        <Avatar name={author.name} picture={author.picture} />
        <div className="hidden md:block md:mb-12">
        </div>
      {/* </div> */}
      <div className="hidden md:block w-72 ml-3">
            <div className="flex flex-col sticky top-6">
              <div className="p-4 shadow-md rounded-xl mb-6 bg-white ">
                <p className="text-xl text-bold mb-4">目次</p>
                <ul >
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
    </div>
  )
}

export default PostSidebar
