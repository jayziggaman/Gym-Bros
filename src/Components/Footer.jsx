import React, { useContext, useRef } from 'react'
import { FaWhatsapp, FaEnvelope, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'
import { appContext } from '../App'

const Footer = () => {
  const footerRef = useRef()
  const { showNav } = useContext(appContext)
  
  return (
    <footer ref={footerRef}>
      <div className="footer-icon-div">
        <div className="footer-whatsapp-icon-div">
          <FaWhatsapp />
        </div>
        <p>WhatsApp</p>
      </div>

      <div className="footer-icon-div">
        <div className="footer-email-icon-div">
          <a href="mailto:michaelchisom700@gmail.com" className='email-link'>
            <FaEnvelope />
          </a>
        </div>
        <p>Email</p>
      </div>

      <div className="footer-icon-div">
        <div className="footer-twitter-icon-div">
          <FaTwitter />
        </div>
        <p>Twitter</p>
      </div>

      <div className="footer-icon-div">
        <div className="footer-instagram-icon-div">
          <FaInstagram />
        </div>
        <p>Instagram</p>
      </div>

      <div className="footer-icon-div">
        <div className="footer-facebook-icon-div">
          <FaFacebook />
        </div>
        <p>Facebook</p>
      </div>
    </footer>
  )
}

export default Footer