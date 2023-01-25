import markdownStyles from './markdown-styles.module.css'
import type Author from '../interfaces/author'
import PostTitle from './post-title'
import DateFormatter from './date-formatter'
type Props = {
  date: string
  title: string
  content: string
}

const PostBody = ({ date, title, content }: Props) => {
  return (
    <div className="block max-w-4xl">
      <div className="flex flex-col sticky top-6">
        <div className="p-4 shadow-md rounded-xl mb-6 bg-accent-1 ">
          <DateFormatter dateString={date} />
          <PostTitle>{title}</PostTitle>
          <div
            className={markdownStyles['markdown']}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  )
}

export default PostBody
