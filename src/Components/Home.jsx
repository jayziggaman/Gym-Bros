import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="home-main">
      <div className="home-overlay">
        <section className="home-section">
          <div className='home-writeup-div'>
            <p className='home-writeup-header'>
              <span> - </span> with Ozor Chisom
            </p>
            <h3 className='home-writeup-body'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam eligendi earum nemo, voluptate ipsam cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sint iste assumenda debitis blanditiis pariatur impedit mollitia quae quam?
            </h3>
            <button>
              <Link to='/register' >Get Started</Link>
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home




