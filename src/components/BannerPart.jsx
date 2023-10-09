import React from 'react'
import banner from '../../public/bannerone.png'

function BannerPart() {
  return (
    <div className='w-[100%] h-[80vh] flex '>
        <div className='w-[50%] h-[100%] flex justify-center items-center  p-4 '>
            <h1 className=' text-3xl font-bold'>Discover Your Path to <span className=' text-yellow-400'>Success</span>  with Find<span className='text-yellow-400'>X</span> - Where Talent Meets Opportunity!</h1>
        </div>
        <div className='w-[50%] h-[100%]'>

         <img src={banner} alt="asda" className=' w-[100%] h-[100%] object-cover' />
        </div>
    </div>
  )
}

export default BannerPart