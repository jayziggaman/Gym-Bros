import React, { useContext, useEffect } from 'react'
import { FaDumbbell, FaBars, FaTimes } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { appContext } from '../App'
import { auth } from '../firebase/config'


const Header = () => {
  const { showNav, setShowNav, setShowLogInForm, logOut } = useContext(appContext)
  const location = useLocation()

  useEffect(() => {
    const links = document.querySelectorAll('.header-link')
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const pick = e.currentTarget
        links.forEach(item => {
          item.classList.remove('active')
        })
        pick.classList.add('active')
      } )
    } )
  }, [])
  
  useEffect(() => {
    const homeLink = document.getElementById('home-link')
    const servicesLink = document.getElementById('services-link')
    const registerLink = document.getElementById('register-link')
    const blogLink = document.getElementById('blog-link')
    const extraLink = document.getElementById('overview-link')

    if (location.pathname === '/') {
      servicesLink.classList.remove('active')
      registerLink.classList.remove('active')
      blogLink.classList.remove('active')
      extraLink.classList.remove('active')
      homeLink.classList.add('active')

    } else if (location.pathname === '/services') {
      homeLink.classList.remove('active')
      registerLink.classList.remove('active')
      servicesLink.classList.add('active')
      blogLink.classList.remove('active')
      extraLink.classList.remove('active')
      
    } else if (location.pathname === '/blog') {
      homeLink.classList.remove('active')
      registerLink.classList.remove('active')
      servicesLink.classList.remove('active')
      extraLink.classList.remove('active')
      blogLink.classList.add('active')
      
    } else if (location.pathname === '/register') {
      servicesLink.classList.remove('active')
      homeLink.classList.remove('active')
      registerLink.classList.add('active')
      blogLink.classList.remove('active')
      extraLink.classList.remove('active')

    } else if (location.pathname === '/overview') {
      servicesLink.classList.remove('active')
      homeLink.classList.remove('active')
      registerLink.classList.remove('active')
      blogLink.classList.remove('active')
      extraLink.classList.add('active')
    }
  })

  return (
    <header id='header'>
      <h1>
        Gym Bros <span> <FaDumbbell /> </span>
      </h1>
      <div className='header-nav-div'>
        <ul>
          <li>
            <Link id='home-link' to="/" className='header-link'>Home</Link>
          </li>
          <li>
            <Link id='services-link' to="/services" className='header-link'>Services</Link>
          </li>
          <li>
            <Link id='blog-link' to="/blog" className='header-link'>Blog</Link>
          </li>
          <li>
            <Link id='register-link' to="/register" className='header-link'>Register</Link>
          </li>
          <li>
            <Link id='overview-link' to="/overview" className='header-link'>Extra</Link>
          </li>
          <li>
          {auth.currentUser === null ? <button className='log-in-btn' onClick={() => setShowLogInForm(true)}>Sign In</button>
            : <button className='log-out-btn' onClick={() => logOut() }>Sign Out</button>
          }
          </li>
        </ul>
      </div>
      <div className='nav-toggle-div'>
        {
          !showNav ? <FaBars role={'button'} onClick={() => { setShowNav(true) }} />
            : <FaTimes role={'button'} onClick={() => { setShowNav(false) }} />
        }
      </div>
    </header>
  )
}

export default Header