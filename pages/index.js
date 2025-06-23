import FeaturedPosts from '../components/home-page/featured-posts'
import Hero from '../components/home-page/hero'
import { getFeaturedPosts } from '../lib/posts-util'
import Head from 'next/head'

export default function HomePage(props) {
  const { posts } = props

  return (
    <>
      <Head>
        <title>Blog Home Page</title>
        <meta name='description' content='Project Blog' />
      </Head>
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
