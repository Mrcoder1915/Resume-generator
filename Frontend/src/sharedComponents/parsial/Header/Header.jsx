import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const user = true
  return (
    <div className='fixed top-0 left-0 w-[100%] h-[80px] py-2.5 px-5 flex-aligncenter bg-secondary' >
        <header className='flex-between w-[100%]'>
            <div className="log">Logo</div>
            <ul className='flex gap-10'>
               {user? (<> <li><Link to = "/">Home</Link></li>
                <li><Link to = "/CreatedResume">Generate</Link></li>
                <li>My resume</li>
                </>): <>
                  <li><Link to = "/">Home</Link></li>
                </>}
                <li><Link to = "/SignUp">Sign Up</Link></li>
            </ul>
        </header>
    </div>
  )
}

export default Header
