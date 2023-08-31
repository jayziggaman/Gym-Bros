import React from 'react'
import { Link } from 'react-router-dom'
import { FaSadFace } from 'react-icons/fa'

const NoMatch = () => {
  return (
    <div className='no-match'>
      <h2>
        Oops 
      </h2>
      <p>Page Not Found</p>
      <Link to='/' >Back to Home</Link>
    </div>
  )
}

export default NoMatch