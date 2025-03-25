import React from 'react'
import Input from '../../components/usableComponments/input'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


const SignUp = () => {
  return (
    <div className="signUpContainer">
        <div className=' w-full h-[100vh] flex-center bg-primary select-none'>
            <div className="Wrapper text-white w-[450px] h-[450px] p-2.5 grid grid-rows-[20%_1fr_1fr] grid-cols-[1fr] rounded-2xl border-1 border-solid border-black">
                <div className="signheader pt-5 text-center">
                    <h1>Sign Up</h1>
                </div>
                <div className="contentInput flex-column gap-2.5">
                    <div className='relative h-w border-b-1 border-solid border-[#B2A5FF]'>
                        <Input Type = "text" />
                        <i className='absolute right-0 top-[50%]'><FaUser className='signIcon'/></i>
                    </div>
                    <div className='relative h-w border-b-1 border-solid border-[#B2A5FF]'>
                        <Input Type = "text" />
                        <i className='absolute right-0 top-[50%]'><MdEmail className='signIcon'/></i>
                    </div>
                    <div className='relative h-w border-b-1 border-solid border-[#B2A5FF]'>
                        <Input Type = "text" />
                        <i className='absolute right-0 top-[50%]'><RiLockPasswordFill className='signIcon'/></i>
                    </div>
                </div>
                <div className="signfooter pt-5">
                   <div className="remember-forgot w-full h-5 flex-between items-center">
                        <div className="checkbox">
                            <input id='remember' type="checkbox"/><label htmlFor='remember'>remember me</label>
                        </div>
                        <div className="forgotpword">
                            <a href="#">Forgot Password</a>
                        </div>
                   </div>
                   <div className="flex-center">
                        <button className="btn-secondary">Sign Up</button>
                   </div>  
                   <span className='span-line'>OR</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp
