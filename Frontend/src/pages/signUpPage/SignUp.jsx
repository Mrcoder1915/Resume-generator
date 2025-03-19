import React from 'react'
import '../../styles/SignUp-SignIn.css'
import Input from '../../components/usableComponments/input'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


const SignUp = () => {
  return (
    <div className="signUpContainer">
        <div className='signUp'>
            <div className="Wrapper">
                <div className="header">
                    <h1>Sign Up</h1>
                </div>
                <div className="contentInput">
                    <div>
                        <Input Type = "text" />
                        <i><FaUser className='signIcon'/></i>
                    </div>
                    <div>
                        <Input Type = "text" />
                        <i><MdEmail className='signIcon'/></i>
                    </div>
                    <div>
                        <Input Type = "text" />
                        <i><RiLockPasswordFill className='signIcon'/></i>
                    </div>
                </div>
                <div className="footer">
                   <div className="remember-forgot">
                        <div className="checkbox">
                            <input id='remember' type="checkbox"/><label htmlFor='remember'>remember me</label>
                        </div>
                        <div className="forgotpword">
                            <a href="#">Forgot Password</a>
                        </div>
                   </div>
                   <div className="signupbtn">
                        <button className="signUpButton">Sign Up</button>
                   </div>  
                   <span>OR</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp
