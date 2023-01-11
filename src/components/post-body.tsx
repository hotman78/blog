import markdownStyles from './markdown-styles.module.css'
import type Author from '../interfaces/author'
import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
  content: string
}

const PostBody = ({ title, coverImage, date, author, content }: Props) => {
  return (
    <div className="flex flex-wrap">
      <div className="max-w-4xl mx-auto bg-accent-1 p-20">
        <div className="mb-6 text-sm">
          <DateFormatter dateString={date} />
        </div>
        <PostTitle>{title}</PostTitle>
        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <div className="max-w-xl mx-auto w-20">
        <div className="hidden md:block md:mb-12">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage} />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="block md:hidden mb-6">
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostBody
