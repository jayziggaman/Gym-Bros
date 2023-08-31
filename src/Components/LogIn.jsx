import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { appContext } from '../App'

const LogIn = () => {
  const {
    logIn, showLogInForm, email, setEmail, password, setPassword, setShowLogInForm, error } = useContext(appContext)
  

  return (
    <form id='log-in-form' className={showLogInForm ? 'show-log-in-form log-in-form' : 'log-in-form'} onSubmit={logIn}
      >
        <p className='form-error'> {error} </p>
        <span className='blog-cancel-form' onClick={() => setShowLogInForm(false)}>     <FaTimes />
        </span>

        <input
          className='log-in-email'
          type="email"
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        /> 
        
        <input
          className='log-in-password'
          type="password"
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        
        <button type='submit'>Log In</button>
      </form>
  )
}

export default LogIn