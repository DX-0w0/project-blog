import PostHeader from './post-header'
import styles from './post-content.module.css'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)

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

    code(code) {
      const { className, children } = code

      return (
        <SyntaxHighlighter
          language={className}
          children={children}
          style={atomDark}
        />
      )
    },
  }

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}
