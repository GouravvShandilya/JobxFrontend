import React from 'react'
import banner from '../../public/bannerone.png'

function BannerPart() {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className='w-[100%] h-[88vh] flex flex-col md:flex-row '>
        <div className='md:w-[50%] md:h-[100%] w-[100%] h-[50%] flex justify-center items-center  p-4 '>
            <h1 className=' text-3xl font-bold'>Discover Your Path to <span className=' text-yellow-400'>Success</span>  with Find<span className='text-yellow-400'>X</span> - Where Talent Meets Opportunity!</h1>
        </div>
        <div className={`md:w-[50%] md:h-[100%] w-[100%] h-[50%]`}>

         <img src={banner} alt="asda" 
          style={bannerStyle}
         />
        </div>
    </div>
  )
}

export default BannerPart