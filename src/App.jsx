import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {  Route, Routes, useLocation } from 'react-router-dom'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from './firebase/config'
import { FaAngleUp, FaPen } from 'react-icons/fa'
import Header from './Components/Header'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Register from './Components/Register'
import Services from './Components/Services'
import Footer from './Components/Footer'
import Blog from './Components/Blog'
import BlogArticleView from './Components/BlogArticleView'
import Overview from './Components/Overview'
import NoMatch from './Components/NoMatch'
import LogIn from './Components/LogIn'

export const appContext = React.createContext()


const App = () => {
  const [showNav, setShowNav] = useState(false)
  const [articles, setArticles] = useState([])
  const [showBlogForm, setShowBlogForm] = useState(false)
  const [showLogInForm, setShowLogInForm] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [globalError, setGlobalError] = useState()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const userEmail = useRef('')
  const location = useLocation()

  useEffect(() => {
    setGlobalError(document.querySelector('.global-error'))
    const toTop = document.querySelector('.to-top-btn')
    function ftn () {
      if (window.pageYOffset > 100) {
        toTop.classList.add('show-btn')
      } else {
        toTop.classList.remove('show-btn')
      }
    }
    window.addEventListener('scroll', ftn)
    return () => window.removeEventListener('scroll', ftn)
  }, [])
  
  useLayoutEffect(() => {
    const newIcon = document.querySelector('.new-blog-icon')
    if (location.pathname === '/blog' || showBlogForm === true ) {
      newIcon.classList.add('show-btn')
    } else {
      newIcon.classList.remove('show-btn')
    } 
  })

  // set-ExecutionPolicy RemoteSigned -Scope CurrentUser 
  // Get-ExecutionPolicy
  // Get-ExecutionPolicy -list
  
  const logIn = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((Credential) => {
        userEmail.current = Credential.user.email 
        setShowLogInForm(false)

        setLoggedIn(true)
        const authState = document.querySelector('.auth-state')
        authState.classList.add('logged-in')
        setTimeout(() => {
          authState.classList.remove('logged-in')
        }, 2000 )
      })
      .catch(err => {
        setError(err.message)
        const formError = document.querySelector('.form-error')
        formError.classList.add('show')
        setTimeout(() => {
          formError.classList.remove('show')
        }, 3000 )
    } )
  }

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setLoggedIn(false)
        const authState = document.querySelector('.auth-state')
        authState.classList.add('logged-out')
        setTimeout(() => {
          authState.classList.remove('logged-out')
        }, 2000 )
      })
      .catch(err => {
        setError(err.message)
        const formError = document.querySelector('.form-error')
        formError.classList.add('show')
        setTimeout(() => {
          formError.classList.remove('show')
        }, 3000 )
    } )
    
  }


  return (
    <appContext.Provider value={{ showNav, setShowNav, showBlogForm, setShowBlogForm, articles, setArticles, showLogInForm, setShowLogInForm, setErrorMsg, globalError, userEmail, logIn, email, setEmail, password, setPassword, error, logOut }}>
      <div className='App'>
        <Header />
        <div className="after-header" role={'button'} onClick={ () => setShowNav(false) }>
          <Nav />
          <div className="global">
            <h4 className='global-error'>{errorMsg}</h4>
            <h4 className='auth-state'>
              { loggedIn ? 'Logged in Successfully' : 'Logged out Successfully' }
            </h4>
          </div>
          <LogIn />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/services' element={<Services />} />
            <Route exact path='/blog' element={<Blog />} />
            <Route exact path='/blog/:articleId' element={<BlogArticleView />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/overview' element={<Overview />} />
            <Route exact path='*' element={<NoMatch />} />
          </Routes>
          
          <button className='new-blog-icon' onClick={ () => auth.currentUser === null || undefined ? setShowLogInForm(true) : setShowBlogForm(true) }>
            <FaPen />
          </button>

          <a role={'button'} href="#nav"  className='to-top-btn'>
            <FaAngleUp />
          </a>
          <Footer />
        </div>
      </div>

        
      
    </appContext.Provider>
   
  )
}

export default App