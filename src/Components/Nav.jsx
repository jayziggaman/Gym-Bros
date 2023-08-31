import { signOut } from 'firebase/auth'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { appContext } from '../App'
import { auth } from '../firebase/config'

const Nav = () => {
  const { showNav, setShowNav, setShowLogInForm, logOut } = useContext(appContext)

  useEffect(() => {
    const verifyBtn = document.querySelector('.log-out-btn')
    function ftn () {
      signOut(auth)
    }
    verifyBtn?.addEventListener('click', ftn)
    return () => verifyBtn?.removeEventListener('click', ftn)
  }, [] )

  
  return (
    <nav id='nav' className={ showNav ? "move" : null }>
      <ul>
        <li role={'button'} onClick={ () => setShowNav(false) } >
          <Link to='/'>Home</Link>
        </li>
        <li role={'button'} onClick={ () => setShowNav(false) } >
          <Link to='/services'>Services</Link>
        </li>
        <li role={'button'} onClick={ () => setShowNav(false) } >
          <Link to='/blog'>Blog</Link>
        </li>
        <li role={'button'} onClick={ () => setShowNav(false) } >
          <Link to='/register'>Register</Link>
        </li>
        <li role={'button'} onClick={ () => setShowNav(false) } >
          <Link to='/overview'>Extra</Link>
        </li>
        <li>
          {auth.currentUser === null ? <button className='log-in-btn' onClick={() => setShowLogInForm(true)}>Sign In</button>
            : <button className='log-out-btn'  onClick={() => logOut() }>Sign Out</button>
          }
          
        </li>
      </ul>
    </nav>
  )
}

export default Nav