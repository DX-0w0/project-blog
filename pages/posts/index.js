import AllPosts from '../../components/posts/all-post'
import { getAllPosts } from '../../lib/posts-util'

export default function AllPostsPage(props) {
  const { posts } = props
  return <AllPosts posts={posts} />
}

export function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts,
    },
  }
}
