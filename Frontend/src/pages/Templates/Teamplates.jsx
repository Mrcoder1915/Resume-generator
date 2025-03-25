import React from 'react'
import { Link } from 'react-router-dom'


const Teamplates = (props) => {
  const {id,  template} = props.data
  return (
    <div className='w-[400px] h-full p-2.5 bg-white'>
      
          <Link to = {`/GenerateResume/${id}`}>
            <div className=" h-w grid bg-white grid-cols-2 grid-rows-[1fr_3fr_1fr] gap-2.5" style={{
              gridTemplateAreas: template
              }}>
            <div className="header">sassas</div>
            <div className="experience"></div>
            <div className="education">hello</div>
            <div className="footer"></div>
            </div>
          </Link>
        
    </div>
  )
}

export default Teamplates
