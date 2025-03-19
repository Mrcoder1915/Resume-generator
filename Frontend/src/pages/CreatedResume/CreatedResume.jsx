import React from 'react'
import '../../styles/create-resume.css'
import Teamplates from '../Templates/Teamplates'
import {layouts} from "../../templateLayout"

const CreatedResume = () => {
  return (
    <div className='create-resume'>
        <div className='template-container'>
        {layouts.map((layout) => (
            <Teamplates data = {layout} key={layout.id}/>
          ))}
        </div>
    </div>
  )
}

export default CreatedResume
