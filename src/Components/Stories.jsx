import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { appContext } from '../App'
import BlogForm from './BlogForm'



const Stories = ({article, setArticle}) => {
  const { articles, setArticles, userEmail } = useContext(appContext)
  return (
    <>
      <div className="stories">
        {articles.map(item => {
          const { id, body, date, author } = item
          return (
            <Link key={id} to={`/blog/${id}`} className="story">
              <div className="blog-username-options">
                <h3>{author}</h3>
                <p>
                  <b>{date}</b>
                </p>
              </div>
              <div className="story-body">
                <p>
                  {body.slice(0, 100)}...
                </p>
              </div>
            </Link>
          )
        })}
      </div> 

      <BlogForm setArticle={setArticle} article={article} setArticles={setArticles} articles={articles} userEmail={userEmail} />
    </>
  )
}

export default Stories