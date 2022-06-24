import React,{useState} from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const API_URL = 'https://locakhost:8000/createUser'

function Signup() {
    const navigate = useNavigate()

    //initializing the initial state 
    const [user,setUser] = useState({
        name: '',
        email: '',
        password:''
    })

    //reseting the inputs to default
    const handleChange = (event) => {
        const {name, value} = event.target
        
        setUser(prev => {
            return({
                ...prev,
                [name]: value,
            })
        })
    }

    //submiting data
    
    const handleClick = (event) => {
        event.preventDefault()

        console.log(user)

        //sending data to the db
        axios.post(API_URL, user)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))

        navigate('/')
    }

    // useEffect(() => {
    //     console.log(user)
    // }, [user])

  return (
    <div className='main'>
    <div className="login-body">
      <div className="login-body__form">
        <h1>Sign Up</h1>
        <div className="login-body__input mb-16">
          <input name='name' onChange={handleChange} value={user.name} type="text" placeholder="Full Name" />
        </div>
        <div className="login-body__input mb-16">
          <input name='email' onChange={handleChange} value={user.email} type="text" placeholder="Email or phone number" />
        </div>
        <div className="login-body__input">
          <input name='password' onChange={handleChange} value={user.password} type="password" placeholder="Password" />
        </div>
        <button onClick={handleClick} className="login-body__submit-btn">Sign Up</button>
        <div className="login-body__options">
          <span>Remember me</span>
          <span className="login-body__need-help">Need help?</span>
        </div>
        <div className="login-body__footer">
          <div className="login-body__fb">
            <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" alt="fb" />
            <span>Signup with Facebook</span>
          </div>
          <div className="login-body__new-to-nl">
            <span>Already Have An Account ?</span>
            <span onClick={() => navigate('/signin')} className="login-body__sign-up">Log In now.</span>
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

export default Signup