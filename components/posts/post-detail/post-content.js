import PostHeader from './post-header'
import styles from './post-content.module.css'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

export default function PostContent(props) {
  const { post } = props
  const imagePath = `/images/posts/${post.image}`

  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   )
    // },

    p(paragraph) {
      const { node } = paragraph
      // console.log('node', node)

      if (node.children[0].tagName === 'img') {
        const image = node.children[0].properties

        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${image.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        )
      }

      return <p>{paragraph.children}</p>
    },
  }

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}
