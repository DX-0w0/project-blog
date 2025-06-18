import { DUMMY } from '../../../pages'
import PostHeader from './post-header'
import styles from './post-content.module.css'
import ReactMarkdown from 'react-markdown'

const dataDummy = { ...DUMMY[0], content: '# Markdown information' }

export default function PostContent() {
  const imagePath = `/images/posts/${dataDummy.image}`

  return (
    <article className={styles.content}>
      <PostHeader title={dataDummy.title} image={imagePath} />
      <ReactMarkdown>{dataDummy.content}</ReactMarkdown>
    </article>
  )
}
