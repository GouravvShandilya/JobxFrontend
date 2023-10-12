import React from 'react'
import Nav from '../components/Nav'
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import LatestInternships from '../components/LatestInternships';
import BannerPart from '../components/BannerPart';
import LatestJobs from '../components/LatestJobs';
function Home() {
  const navigate = useNavigate()
  return (
    <div className=' w-[100vw] h-[100vh]'>
      <Nav />
      <div className=' w-[100%] h-[90vh]  flex  md:flex-row flex-col overflow-hidden     '>
        <div className=' left md:w-[50%]   md:h-[100%] h-[50%] w-[100%]  flex items-center justify-start px-4'>
          <div className=' ml-10'>

            <TypeAnimation
              sequence={[
                'Internships and Jobs',
                1000, // Wait 1s before the next text
                'Skills and Opportunities',
                1000,
                'Career Growth Hub',
                1000,
                'Learning and Networking',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
              className=' text-blue-800 font-bold mb-10 text-3xl  md:text-[3vw]'
              repeat={Infinity}
            />
            <div>

              <button onClick={() => navigate("/student/internships")} className='px-[22px]  py-[12px] bg-blue-400 rounded-md text-white'>View Interships</button>
            </div>
          </div>


        </div>
        <div className=' left md:w-[50%] md:h-[100%] h-[50%] w-[100%] relative'>

          <img className=' absolute md:w-[550px] w-[370px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src="https://cdn.thecodehelp.in/ggudduf7qmr7yvjwtcs1_cd7567153f.svg" alt="" />
          <img className=' absolute md:w-[130px] w-[78px] top-[20%] left-[40%] translate-x-[-50%] translate-y-[-50%] animate-bounce 	' src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2Fenxuyvqanj9uvsbzwypn_3c515e9191.png&w=1920&q=100" alt="" />
          <img className=' absolute md:w-[130px] w-[78px] top-[70%] left-[40%] translate-x-[-50%] translate-y-[-50%] animate-bounce' src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2Fgwpz1kmonhq9a5mtftjo_341e23ef9d.png&w=1920&q=100" alt="" />
          <img className=' absolute md:w-[130px] w-[78px] top-[70%] left-[10%] translate-x-[-50%] translate-y-[-50%]  animate-bounce' src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2Filemyrzwca73s36nuylo_af9797f807.png&w=1920&q=100" alt="" />

        </div>
      </div>
      <div>
        <LatestInternships/>
      </div>
      <div>
        <BannerPart/>
      </div>
      <div className='mt-4'>
            <LatestJobs/>
      </div>
    </div>
  )
}

export default Home