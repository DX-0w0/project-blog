import Head from 'next/head'
import AllPosts from '../../components/posts/all-post'
import { getAllPosts } from '../../lib/posts-util'

export default function AllPostsPage(props) {
  const { posts } = props
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='A list of all posts in this project'
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts,
    },
  }
}
