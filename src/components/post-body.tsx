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
      <div className="max-w-4xl mx-auto bg-accent-1 p-20 rounded-xl">
        <DateFormatter dateString={date} />
      <PostTitle>{title}</PostTitle>
        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
  )
}

export default PostBody
