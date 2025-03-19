import React from 'react'
import '../../../styles/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const user = true
  return (
    <div className='headerContainer' >
        <header >
            <div className="log">Logo</div>
            <ul>
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
