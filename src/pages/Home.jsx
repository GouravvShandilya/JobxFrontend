import React from 'react'
import Nav from '../components/Nav' 
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate=useNavigate()
  return (
    <div className=' w-[100vw] h-[100vh]'>
        <Nav/>
        <div className=' w-[100%] h-[90vh]  flex overflow-hidden'>
        <div className=' left w-[50%] h-[100%]  flex items-center justify-start px-4'>
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
  style={{ fontSize:'3.5em', display: 'inline-block' }}
  className=' text-blue-800 font-bold mb-10'
  repeat={Infinity}
/>
<div>

<button onClick={()=>navigate("/student/internships")} className='px-[22px]  py-[12px] bg-blue-400 rounded-md text-white'>View Interships</button>
</div>
</div>


        </div>
        <div className=' left w-[50%] h-[100%]  relative'>
         
            <img className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'  src="https://cdn.thecodehelp.in/ggudduf7qmr7yvjwtcs1_cd7567153f.svg" alt="" />
          <img className=' absolute top-[20%] left-[40%] translate-x-[-50%] translate-y-[-50%] animate-bounce 	' src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2Fenxuyvqanj9uvsbzwypn_3c515e9191.png&w=1920&q=100" alt="" />
          <img className=' absolute top-[70%] left-[40%] translate-x-[-50%] translate-y-[-50%] animate-bounce' src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2Fgwpz1kmonhq9a5mtftjo_341e23ef9d.png&w=1920&q=100" alt="" />
          <img className=' absolute top-[70%] left-[10%] translate-x-[-50%] translate-y-[-50%]  animate-bounce' src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2Filemyrzwca73s36nuylo_af9797f807.png&w=1920&q=100" alt="" />

        </div>
        </div>
        </div>
  )
}

export default Home