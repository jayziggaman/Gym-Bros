import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { appContext } from '../App'

const BlogArticleView = () => {
  const { articles } = useContext(appContext)
  const { articleId } = useParams()
  const [art, setArt] = useState({})

  useEffect(() => {
    setArt(articles.find( article => article.id == articleId ))
  }, [] )

  return (
    <main className='blog-article-main'>
      <article>
        <h3 className="user-email">
          {art?.author}
        </h3>
        <p className='blog-article-body'>
          {art?.body}
        </p>
      </article>
    </main>
  )
}

export default BlogArticleView