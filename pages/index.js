import FeaturedPosts from '../components/home-page/featured-posts'
import Hero from '../components/home-page/hero'
import { getFeaturedPosts } from '../lib/posts-util'

export default function HomePage(props) {
  const { posts } = props

  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

export function getStaticProps() {
  const featuredPost = getFeaturedPosts()

  return {
    props: {
      posts: featuredPost,
    },
  }
}
