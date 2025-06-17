import { DUMMY } from '../../../pages'
import PostHeader from './post-header'
import styles from './post-content.module.css'

const dataDummy = { ...DUMMY[0], content: '# Markdown information' }

export default function PostContent() {
  const imagePath = `/images/posts/${dataDummy.image}`

  return (
    <article className={styles.content}>
      <PostHeader title={dataDummy.title} image={imagePath} />
      {dataDummy.content}
    </article>
  )
}
