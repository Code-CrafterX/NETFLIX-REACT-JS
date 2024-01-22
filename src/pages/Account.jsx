import React from 'react'
import SavedShows from '../components/SavedShows';


const Account = () => {
  return (
    <>
      <div className='w-full text-white '>
      <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b8dd5151-d491-4e91-b1fb-a19df70df5fc/7acd48e1-92f0-4aa7-bcc6-684b3ee50946/IN-en-20240102-trifectadaily-perspective_alpha_website_large.jpg"
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px] '>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
        </div>
        </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account
