import React from 'react'
import "../../styles/GenerateResume.css"
import { useParams } from 'react-router-dom'
import { layouts } from '../../templateLayout'

const GenerateResume = () => {
  const {id} = useParams();
  const selecteLayout = layouts.find((layout) => layout.id == parseInt(id))
  console.log(selecteLayout)
  return (
    <div className='generate-resume'>
       <div className='generating-container'>
          <div className="userInput">
                <div className="navigate-buttons">
                  <button>home</button>
                  <div className="next-back-btn">
                    <button>back</button>
                    <button>next</button>
                  </div>      
                </div>
             <div className="input-container">

                <div className="title-container">
                   <h2>Personal Information</h2>
                   <h2>Ai</h2>
                </div>

                <div className="user-personal-input">
                  <div className="input-field">
                    <div className='input-container'>
                      <label htmlFor="">First name</label>
                      <input type="text" placeholder='Firstname'/>
                    </div>
                    <div className='input-container'>
                      <label htmlFor="">Last name</label>
                      <input type="text" placeholder='Lastname' />
                    </div>
                      
                  </div>
                  <div className="input-field">
                      <input type="email" placeholder='Email Address'/>
                  </div>
                  <div className="input-field">
                      <input type="text" placeholder='Address' />
                  </div>
                </div>
             </div>

          </div>

        <div className='display-container'>
          <div className="templates-content" style={{
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
