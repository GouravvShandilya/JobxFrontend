import React, { useEffect, useState } from 'react'
import Nav from "../components/Nav"
import { useParams } from 'react-router-dom'
import axios from '../../utils/axios'
import { toast } from 'react-toastify'
function InternshipDets() {
  const { internshipid } = useParams()
  console.log(internshipid)
  const [internshipDets, setInternshipDets] = useState(null)
  const [skills,setSkills]=useState([])
  console.log(internshipDets)
  const role=JSON.parse(sessionStorage.getItem("role"))

  useEffect(() => {
    axios.get(`/user/student/internship/${internshipid}`).then((res) => {
      console.log(res)
      setInternshipDets(res.data.internship)
      const resSkills=res.data.internship.skills.split(" ")
        setSkills(resSkills)
    }).catch(err => console.log(err))
  }, [internshipid])

  console.log(skills)

  const handleSubmit=()=>{
      axios.post(`/user/student/apply/internship/${internshipid}`)
      .then((response)=>{
        console.log(response)
        toast.success(response.data.msg)
      })
      .catch((err)=>{
        console.log(err)
        toast.error(err.response.data.msg)
      })
  }


  return (
    <div>
      <Nav />
      <div className=' w-6/12   mx-auto p-4 mt-4 border'>
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
          <div>

          <h1 className=' font-semibold mt-4'>About {internshipDets?.createdBy?.organizationname}</h1>
          <h1 className='opacity-80'>{internshipDets?.createdBy?.organizationdescripion}</h1>
          </div>
          <div className=' mt-10'>
            <h1 className=' font-semibold'>About the internship</h1>
            <p className=' mb-3'>Responsibilities:</p>
            <h1 className='opacity-80'>{internshipDets?.responsibility}</h1>
          </div>
          <div>
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

    </div>
  )
}

export default InternshipDets