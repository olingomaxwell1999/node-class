import React, {useState} from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const API_URL = 'https://locakhost:8000/login'

function Signinpage() {
    const navigate = useNavigate()

    const [user,setUser] = useState({
        email: '',
        password:''
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        
        setUser(prev => {
            return({
                ...prev,
                [name]: value,
            })
        })
    }

    const handleClick = (event) => {
        event.preventDefault()

        console.log(user)

        axios.post(API_URL, user)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))

        navigate('/')
    }

  return (
    <div className='main'>
            <div className="login-body">
      <div className="login-body__form">
        <h1>Sign In</h1>
        <div className="login-body__input mb-16">
          <input type="text" onChange={handleChange} placeholder="Email or phone number" />
        </div>
        <div className="login-body__input">
          <input type="password" placeholder="Password" />
        </div>
        <button className="login-body__submit-btn" onClick={handleClick}>Sign In</button>
        <div className="login-body__options">
          <span>Remember me</span>
          <span className="login-body__need-help">Need help?</span>
        </div>
        <div className="login-body__footer">
          <div className="login-body__fb">
            <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" alt="fb" />
            <span>Login with Facebook</span>
          </div>
          <div className="login-body__new-to-nl">
            <span>New to Netflix ?</span>
            <span onClick={() => navigate('/signup')} className="login-body__sign-up"  >Sign up now.</span>
          </div>
          <div className="login-body__google_captcha">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <span className="login-body__learn-more">Learn more.</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signinpage