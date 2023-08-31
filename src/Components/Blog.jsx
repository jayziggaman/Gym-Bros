import React, { useContext, useEffect, useState } from 'react'
import { auth, queryy } from '../firebase/config'
import { onSnapshot } from 'firebase/firestore'
import Stories from './Stories'
import { appContext } from '../App'


const Blog = () => {
  const { articles, setArticles, userEmail } = useContext(appContext)
  const [article, setArticle] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    userEmail.current = auth.currentUser?.email
    const unsubscribe = onSnapshot( queryy, snap => {
      let messages = []
      snap.docs.forEach(doc => {
        messages.push({ ...doc.data(), id: doc.id })
      })
      setArticles(messages)
      setIsLoading(false)
    })
    return () => unsubscribe()
  }, [] )

  return (
    <>
      <main className='blog-main'>
        {
          !isLoading ? <Stories setArticle={setArticle} article={article} />  
            : <div className='blog-texts'> <h3> Loading... </h3> </div>
        }
        {
          !isLoading && articles.length === 0 ? <h3 className='blog-texts'> Be the first to share your gym experince with others. </h3> : ''
        }
      </main>
    </>
  )
}

export default Blog