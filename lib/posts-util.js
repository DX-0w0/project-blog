import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content')

export function getPostsFiles() {
  return fs.readdirSync(contentDir)
}

//accept with filename.ext or slug
export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, '') //removes the extension

  const filePath = path.join(contentDir, `${postSlug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  const postData = {
    slug: postSlug,
    ...data,
    content,
  }

  return postData
}

export function getAllPosts() {
  const files = getPostsFiles()
  const allPosts = files.map((file) => getPostData(file))
  console.log('files', allPosts)
  const sortedPosts = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1))
  return sortedPosts
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts()
  const featuredPosts = allPosts.filter((post) => post.isFeatured)
  return featuredPosts
}
