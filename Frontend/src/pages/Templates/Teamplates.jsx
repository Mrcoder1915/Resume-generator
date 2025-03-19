import React from 'react'
import { Link } from 'react-router-dom'


const Teamplates = (props) => {
  const {id,  template} = props.data
  return (
    <div className='templates'>
      
          <Link to = {`/GenerateResume/${id}`}>
            <div className="templates-content" style={{
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
