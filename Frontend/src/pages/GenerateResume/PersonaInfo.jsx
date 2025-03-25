import React from 'react'

const PersonaInfo = () => {
  return (
    <div className="w-[40%]">
        <div className="navigate-buttons w-[100%] h-[10%] flex-between">
            <button className='btn-primary'>home</button>
            <div className="next-back-btn w-auto">
                <button className='btn-primary'>back</button>
                <button className='btn-primary ml-2.5'>next</button>
            </div>      
        </div>
    <div className="w-fulll bg-white flex-col gap-5 p-2.5 rounded-[10px]">
        <div className="flex-between">
            <h2 className=''>Personal Information</h2>
            <h2>Ai</h2>
        </div>

        <div className="flex-column gap-6">
            <div className="inputs-con">
                <div className="label-input">
                    <label>First name</label>
                    <input type="text" placeholder='Firstname'/>
                </div>
                <div className="label-input">
                    <label>Last name</label>
                    <input type="text" placeholder='Lastname' />
                </div>
            </div>
            <div className="inputs-con">
                <input type="email" placeholder='Email Address'/>
            </div>
            <div className="inputs-con">
                <input type="text" placeholder='Address' />
            </div>
            <div className="inputs-con">
                <input type="text" placeholder='Phone no:'/>
                <input type="text" placeholder='Phone no:'/>
            </div>
            <div className="w-full flex-end">
                <button className='btn-primary'>Save</button>
            </div>
        </div>
    </div>

</div>
  )
}

export default PersonaInfo
