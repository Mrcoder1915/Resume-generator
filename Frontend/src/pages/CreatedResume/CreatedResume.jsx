import React from 'react'
import Teamplates from '../Templates/Teamplates'
import {layouts} from "../../templateLayout"

const CreatedResume = () => {
  return (
    <div className='w-full h-[100vh] flex-center bg-primary px-2.5'>
        <div className='template-container w-full h-[70%] bg-primary px-2.5 py-3.5 flex-center gap-2.5'>
        {layouts.map((layout) => (
            <Teamplates data = {layout} key={layout.id}/>
          ))}
        </div>
    </div>
  )
}

export default CreatedResume
