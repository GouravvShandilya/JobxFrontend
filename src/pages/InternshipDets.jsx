import React, { useEffect, useState } from 'react'
import Nav from "../components/Nav"
import { useParams } from 'react-router-dom'
import axios from '../../utils/axios'
import { toast } from 'react-toastify'
import AnimatedLoader from '../components/AnimatedLoader'
import LoadingPage from './LoadingPage'
function InternshipDets() {
  const { internshipid } = useParams()
  console.log(internshipid)
  const [internshipDets, setInternshipDets] = useState(null)
   const [loading,setLoading]=useState(false)
  const [skills,setSkills]=useState([])
  console.log(internshipDets)
  const role=JSON.parse(sessionStorage.getItem("role"))

  useEffect(() => {
    setLoading(true)

    axios.get(`/user/student/internship/${internshipid}`).then((res) => {

      console.log(res)
    setLoading(false)

      setInternshipDets(res.data.internship)
      const resSkills=res.data.internship.skills.split(" ")
        setSkills(resSkills)
    }).catch(err => {
    setLoading(false)
      
      console.log(err)
    })
  }, [internshipid])

  console.log(skills)

  const handleSubmit=()=>{
    setLoading(true)
      axios.post(`/user/student/apply/internship/${internshipid}`)
      .then((response)=>{
        console.log(response)
    setLoading(false)

        toast.success(response.data.msg)
      })
      .catch((err)=>{
        setLoading(false)
        console.log(err)

        toast.error(err.response.data.msg)
      })
  }


  return (
    <div className=' overflow-x-hidden'>
      <Nav />
      {loading ? 
      (
        <div role="status" className='w-[100vw] h-[100vh] flex items-center justify-center'>
    <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
      )
      :
      (
        <div className=' md:w-6/12 w-11/12   mx-auto p-4 mt-4 border'>
        <div className='heading w-full min-h-[200px]  border-b'>
          <div className=' flex items-center justify-between'>
          <div>

          <h1 className='text-lg font-semibold'>{internshipDets?.profile}</h1>
          <h1 className=' opacity-70'>{internshipDets?.createdBy?.organizationname}</h1>
          </div>
          <div className=' w-[45px] h-[45px] rounded-[100px] bg-red-400 overflow-hidden'>
           <img src={internshipDets?.createdBy?.organizationlogo.url} className=' w-[100%] h-[100%] object-cover' alt="" />
          </div>
          </div>
          <div className='mt-4'>
            <h1>{internshipDets?.city}</h1>
          </div>
          <div className='flex gap-4 mt-4'>

            <div>
              <h1 className=' text-sm opacity-90 font-semibold'>Start Date</h1>
              <h1 className=' text-sm opacity-75'>{internshipDets?.from}</h1>
            </div>

            <div>
              <h1 className=' text-sm opacity-90 font-semibold'>End Date</h1>
              <h1 className=' text-sm opacity-75'>{internshipDets?.to}</h1>
            </div>

            <div>
              <h1 className=' text-sm opacity-90 font-semibold'>Duration</h1>
              <h1 className=' text-sm opacity-75'>{internshipDets?.duration} Months</h1>
            </div>
            <div>
              <h1 className=' text-sm opacity-90 font-semibold'>Stipend</h1>
              <h1 className=' text-sm opacity-75'>$ {internshipDets?.stipend?.amount}</h1>
            </div>

          </div>
        </div>
        <div className=' space-y-2 mt-4'>
          <div className=' whitespace-pre-wrap  max-w-[100%] break-words'>

          <h1 className=' font-semibold mt-4'>About {internshipDets?.createdBy?.organizationname}</h1>
          <h1 className='opacity-80'>{internshipDets?.createdBy?.organizationdescripion}</h1>
          </div>
          <div className=' mt-10 break-words'>
            <h1 className=' font-semibold'>About the internship</h1>
            <p className=' mb-3'>Responsibilities:</p>
            <h1 className='opacity-80'>{internshipDets?.responsibility}</h1>
          </div>
          <div className='break-words'>
            <h1 className=' font-semibold'>Preferred Qualifications:</h1>

            <p className='opacity-80'>{internshipDets?.assesments}</p>
          </div>

            <h1 className=' font-semibold'>Skills:</h1>
          <div className=' flex gap-6 items-center'>
              {skills.map((skill)=>{
                return <div className=' px-6 py-1  bg-[#d6d5d5] rounded-lg flex justify-center items-center '>
                  {skill}
                </div>
              })

              }
          </div>


        </div>
        {role==="Employe" ?

        (
          <div className='w-full mt-6  flex items-center justify-center'>

          <button  className='w-4/12 bg-[#008BDC] mx-auto p-2 text-white'>Edit</button>
          </div>
        )
        :

        (
          <div className='w-full mt-6  flex items-center justify-center'>

          <button onClick={handleSubmit} className='w-4/12 bg-[#008BDC] mx-auto p-2 text-white'>Apply</button>
          </div>
        )
        }
  
      </div>
      )

      }
   

    </div>
  )
}

export default InternshipDets