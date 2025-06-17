import FeaturedPosts from '../components/home-page/featured-posts'
import Hero from '../components/home-page/hero'

export const DUMMY = [
  {
    title: 'getting-started',
    image: 'ice.jpg',
    excerpt: 'blah blah next',
    date: '2025-01-25',
    slug: 'how-to-ice',
  },
  {
    title: 'getting-started-2',
    image: 'ice.jpg',
    excerpt: 'blah blah next 2',
    date: '2025-01-26',
    slug: 'how-to-ice-2',
  },
  {
    title: 'getting-started-3',
    image: 'ice.jpg',
    excerpt: 'blah blah next 3',
    date: '2025-01-27',
    slug: 'how-to-ice-3',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY} />
    </>
  )
}
