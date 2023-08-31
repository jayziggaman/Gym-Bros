import React, { useEffect, useRef, useState } from 'react'

const Register = () => {
  const [inputI, setInputI] = useState('')
  const [inputII, setInputII] = useState('')
  const [textArea, setTextArea] = useState('')

  useEffect(() => {
    const form = document.getElementById('register-form')
    const confirmSubmit = document.querySelector('.confirm-submit')
    const rejectSubmit = document.querySelector('.reject-submit')

    const handleSubmit = (e) => {
      e.preventDefault()
  
      if (inputI === '' || inputII === '' || textArea === '') {
        confirmSubmit.classList.remove('show-msg')
        rejectSubmit.classList.add('show-msg')
        setTimeout(() => {
          rejectSubmit.classList.remove('show-msg')
        }, 5000);

      } else {
        rejectSubmit.classList.remove('show-msg')
        confirmSubmit.classList.add('show-msg')
        setTimeout(() => {
          confirmSubmit.classList.remove('show-msg')
        }, 5000);
      }
    }
    form.addEventListener('submit', handleSubmit)
    return () => form.removeEventListener('submit', handleSubmit)
  }, [inputI, inputII, textArea])
  

  return (
    <main className='register-main'>
      <div className="register-overlay">
        <div>
          <span className="confirm-submit">
            Congratulations ! Your application has been sent and is under review.
          </span>

          <span className="reject-submit">
            You can not leave any field empty.
          </span>
        </div>

        <form id='register-form' className="register-form" autoComplete='off' >
          <input value={inputI} onChange={ e => setInputI(e.target.value) } type="text" placeholder='Name' className='text-input' />
          <input value={inputII} onChange={ e => setInputII(e.target.value) } type="text" placeholder='Address' className='text-input' />
          
          <div className="radio-input-div">
            <div>
              <input name='product-type' className='radio-input' type="radio" />
              <label htmlFor="product-type">Lose Weight</label>
            </div>
            <div>
              <input name='product-type' className='radio-input' type="radio" />
              <label htmlFor="product-type">Gain Muscles</label>
            </div>
            <div>
              <input name='product-type' className='radio-input' type="radio" />
              <label htmlFor="product-type">Eat Healthy</label>
            </div>
          </div>

          <div className="radio-input-div">
            <div>
              <input name='payment-type' className='radio-input' type="radio" />
              <label htmlFor="payment-type">Weekly Plan</label>
            </div>
            <div>
              <input name='payment-type' className='radio-input' type="radio" />
              <label htmlFor="payment-type">Monthly Plan</label>
            </div>
            <div>
              <input name='payment-type' className='radio-input' type="radio" />
              <label htmlFor="payment-type">Yearly Plan</label>
            </div>
          </div>

          <textarea value={textArea} onChange={ e => setTextArea(e.target.value) } placeholder='Tell us a little about yourself' name="about-user" id="register-textarea" cols="30" rows="10"></textarea>

          <div className="submit-btn-div">
            <button>
              Submit
            </button>
          </div>
          
          
        </form>
      </div>
    </main>
  )
}

export default Register