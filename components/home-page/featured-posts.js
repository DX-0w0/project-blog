import PostsGrid from '../posts/posts-grid'
import styles from './featured-posts.module.css'

export default function FeaturedPosts(props) {
  const { posts } = props

  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  )
}
