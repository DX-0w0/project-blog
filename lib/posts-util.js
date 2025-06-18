import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content')

function getPostData(filename) {
  const filePath = path.join(contentDir, filename)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  const postSlug = filename.replace(/\.md$/, '') //removes the extension
  const postData = {
    slug: postSlug,
    ...data,
    content,
  }

  return postData
}

export function getAllPosts() {
  const files = fs.readdirSync(contentDir)
  const allPosts = files.map((file) => getPostData(file))
  const sortedPosts = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1))
  return sortedPosts
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts()
  const featuredPosts = allPosts.filter((post) => post.isFeatured)
}
