import React from 'react'

const BlogPostPage = ({ params }) => {
    // ---> params: is a special prop that is passed to the page component by Next.js. It contains the route parameter for the page.
  return (
    <main>
        <h1>Blog Post</h1>
        <p>{params.slug}</p>
    </main>
  )
}

export default BlogPostPage
