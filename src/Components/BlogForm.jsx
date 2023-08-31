import { addDoc, serverTimestamp } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { appContext } from '../App'
import { articlesRef } from '../firebase/config'


const BlogForm = ({ article, setArticle, userEmail }) => {
  const { showBlogForm, setShowBlogForm, setErrorMsg, globalError } = useContext(appContext)
  const [showWarning, setShowWarning] = useState(false)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const year = new Date().getFullYear()
  const month = months[new Date().getMonth()]
  const day = new Date().getDate()


  const blogForm = document.querySelector('.blog-form')
  const handleSubmit = (e) => {
    e.preventDefault()

    if ( article !== '' ) {
      addDoc(articlesRef, {
        author: userEmail.current,
        body: article,
        date: `${day}/${month}/${year}`,
        createdAt: serverTimestamp()
      })
        .then(() => blogForm.reset())
        .catch((err) => {
          setErrorMsg(err.message)
          console.log(globalError)
          globalError.classList.add('show')
          setTimeout(() => {
            globalError.classList.remove('show')
          }, 3000 )
        })
      setArticle('')
      setTimeout( () => setShowBlogForm(false), 500 )
    } else {
      setShowWarning(true)
      setTimeout( () => setShowWarning(false), 5000 )
    }
  }

  return (
    <>
      <form action='submit' className={showBlogForm ? 'blog-form show-blog-form' : 'blog-form'} onSubmit={e => handleSubmit(e)}>
        <div className="cancel-form">
          <div>
            <FaTimes role={'button'} onClick={ () => setShowBlogForm(false) } />
          </div>
          <p className={showWarning ? 'show-warning' : null}>
            You can not add an empty story to the blog, cancel instead.
          </p>
        </div>
        <div className="form-content-div">
          <textarea name="blogItem" id="" cols="30" rows="10" value={article} onChange={ (e) => setArticle( e.target.value ) } >
          </textarea>
          <div>
            <button>
              Add
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default BlogForm