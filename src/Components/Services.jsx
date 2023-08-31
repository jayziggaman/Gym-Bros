import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <main className="services-main">
      <section className="services-intro">
        <div className="services-intro-overlay">
          <h1>
            Select exactly what works for you. Whether it's losing weight or adding muscles, or even picking the perfect diet, we've got you covered.
          </h1>
        </div>
      </section>

      <section className="lose-weight">
        <h1>
          Lose the extra skin with us !
        </h1>
        <div className='lose-weight-content'>
          <div className='lose-weight-overlay-div'>
            <img src="https://media.istockphoto.com/id/1321118791/photo/full-length-profile-shot-of-a-corpulent-mature-man-running-on-a-treadmill.jpg?s=612x612&w=0&k=20&c=Sdh6ZRFiiZISs3-mMD-I-ktVDSaCqiCKltWqkCKcRSA=" alt="" />
            <div className="lose-weight-overlay"></div>
          </div>

          <div className="lose-weight-tips">
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing.
                Lorem, ipsum dolor.
              </li>

              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing.
                Lorem ipsum dolor sit amet.
              </li>

              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum.
              </li>

              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit.
              </li>

              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              </li>
            </ul>
          </div>

          <div className="lose-weight-pricing">
            <div className="pricing-div">
              <h4 className="timeframe">
                Weekly Membership
              </h4>
              <p className='price'> $15.99 </p>
            </div>

            <div className="pricing-div">
              <h4 className="timeframe">
                Monthly Membership
              </h4>
              <p className='price'> $49.99 </p>
            </div>

            <div className="pricing-div">
              <h4 className="timeframe">
                Yearly Membership
              </h4>
              <p className='price'> $549.99 </p>
            </div>
          </div>
        </div>
        <div className='get-started-btn'>
          <button>
            <Link to='/register' >Get Started</Link>
          </button>
        </div>
      </section>

      <section className="gain-muscles">
        <h1>
          Wanna add muscles ?
        </h1>
        <div className="gain-muscles-content">
          <div className="gain-muscles-tips">
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                  Lorem, ipsum dolor.
                </li>

                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                  Lorem ipsum dolor sit amet.
                </li>

                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum.
                </li>

                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit.
                </li>

                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                </li>
              </ul>
          </div>

          <div className='gain-muscles-overlay-div'>
              <img src="https://media.istockphoto.com/id/843435340/photo/body-building-workout.jpg?s=612x612&w=0&k=20&c=fJAsGtwuA5sbqvZhHwSvzF1JHrOAl73Z2VWA8qAKoKs=" alt="" />
              <div className="gain-muscles-overlay"></div>
          </div>

          <div className="gain-muscles-pricing">
            <div className="pricing-div">
              <h4 className="timeframe">
                Weekly Membership
              </h4>
              <p className='price'> $25.99 </p>
            </div>

            <div className="pricing-div">
              <h4 className="timeframe">
                Monthly Membership
              </h4>
              <p className='price'> $94.99 </p>
            </div>

            <div className="pricing-div">
              <h4 className="timeframe">
                Yearly Membership
              </h4>
              <p className='price'> $1099.99 </p>
            </div>
          </div>
        </div>
        <div className='get-started-btn'>
          <button>
            <Link to='/register' >Get Started</Link>
          </button>
        </div>
      </section>

      <section className="eat-healthy">
        <h1>
          Eat healthy with our diet prepared by professionals
        </h1>

        <div className='diets'>
          <article className='carbohydrate food-class'>
            <h3>Carbohydrate</h3>
            <img src="https://images.pexels.com/photos/4372144/pexels-photo-4372144.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut.
            </p>
          </article>
          

          <article className='protein food-class'>
            <h3>Protein</h3>
            <img src="https://images.pexels.com/photos/6294154/pexels-photo-6294154.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae.
            </p>
          </article>

          <article className='mineral-salts food-class'>
            <h3>Mineral Salts</h3>
            <img src="https://images.pexels.com/photos/2122951/pexels-photo-2122951.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus recusandae autem harum vel iure vitae reiciendis sint id magni assumenda repellat reprehenderit.
            </p>
          </article>

          <article className='fats-and-oil food-class'>
            <h3>Fats & Oils</h3>
            <img src="https://images.pexels.com/photos/10281067/pexels-photo-10281067.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae.
              Lorem ipsum dolor ji.
            </p>
          </article>

          <article className='vitamins food-class'>
            <h3>Vitamins</h3>
            <img src="https://images.pexels.com/photos/5971864/pexels-photo-5971864.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae.
              Lorem ipsum dolor sit.
            </p>
          </article>

          <article className='water food-class'>
            <h3>Water</h3>
            <img src="https://images.pexels.com/photos/989959/pexels-photo-989959.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae.
              Lorem ipsum dolor oi.
            </p>
          </article>

          <article className='dietry-fibre food-class'>
            <h3>Dietry Fibre</h3>
            <img src="https://images.pexels.com/photos/14454428/pexels-photo-14454428.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default Services