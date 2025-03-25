import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/seconai.png'

const Home = () => {
  return (
    <div className='homepage w-[100%] h-[100vh]  bg-primary flex-center'>
       <div className="SiteInfo w-[30%] h-[100%] flex-center flex-col text-[5em]">
          <h4 className='text-primary select-none'>Rusume</h4>
          <h4 className='text-primary'> Generator</h4>
          <p className='text-2xl text-primary'>Powered by Ai</p>
          <div className='flex-center w-[300px]'>
              <Link className='btn-secondary flex items-center justify-center text-2xl
              ' to = "/CreatedResume">Get Started</Link>
          </div>
          
       </div>
    </div>
  )
}

export default Home
