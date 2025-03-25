import React from 'react'

import { useParams } from 'react-router-dom'
import { layouts } from '../../templateLayout'
import UserForm from './UserForm'

const GenerateResume = () => {
  const {id} = useParams();
  const selecteLayout = layouts.find((layout) => layout.id == parseInt(id))
  console.log(selecteLayout)
  return (
    <div className='w-full min-h-[100vh] h-auto bg-primary flex-center' >
       <div className='absolute top-0 mt-20 w-[100%] h-auto bg-primary p-2.5 flex-around'>
          <UserForm />
        <div className='w-[600px] min-h-[83vh] h-auto'>
          <div className=" h-w grid bg-white grid-cols-2 grid-rows-[1fr_3fr_1fr] gap-2.5" style={{
            gridTemplateAreas: selecteLayout.template
            }}>
              <div className="header"></div>
              <div className="experience"></div>
              <div className="education"></div>
              <div className="footer"></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default GenerateResume
