import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/home.css'
import img from '../../assets/seconai.png'

const Home = () => {
  return (
    <div className='homepage w-[100%] h-[100vh]  bg-primary flex-center'>
       <div className="SiteInfo">
          <h4 className='text-primary select-none'>Rusume</h4>
          <h4 className='text-primary'> Generator</h4>
          <p>Powered by Ai</p>
          <button><div></div><Link to = "/CreatedResume"><span>Get Started</span></Link></button>
       </div>
    </div>
  )
}

export default Home
