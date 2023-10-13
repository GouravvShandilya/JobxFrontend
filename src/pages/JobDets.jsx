import React, { useEffect, useState } from 'react'
import Nav from "../components/Nav"
import { useParams } from 'react-router-dom'
import axios from '../../utils/axios'
import { toast } from 'react-toastify'

function JobDets() {
  const { jobid } = useParams()
  console.log(jobid)
  const [jobDets, setjobDets] = useState(null)
  const [skills,setSkills]=useState([])
  console.log(jobDets)


  useEffect(() => {
    axios.get(`/user/student/job/${jobid}`).then((res) => {
      console.log(res)
      setjobDets(res.data.job)
      const resSkills=res.data.job.skills.split(" ")
        setSkills(resSkills)
    }).catch(err => console.log(err))
  }, [jobid])

  console.log(skills)

  const handleSubmit=()=>{
      axios.post(`/user/student/apply/job/${jobid}`)
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
      <div className=' md:w-6/12  w-11/12  mx-auto p-4 mt-4 border'>
        <div className='heading w-full min-h-[200px]  border-b'>
          <div className=' flex items-center justify-between'>
          <div>

          <h1 className='text-lg font-semibold'>{jobDets?.profile}</h1>
          <h1 className=' opacity-70'>{jobDets?.createdBy?.organizationname}</h1>
          </div>
          <div className=' w-[45px] h-[45px] rounded-[100px] bg-red-400 overflow-hidden'>
           <img src={jobDets?.createdBy?.organizationlogo.url} className=' w-[100%] h-[100%] object-cover' alt="" />
          </div>
          </div>
          <div className='mt-4'>
            <h1>{jobDets?.city}</h1>
          </div>
          <div className='flex gap-4 mt-4'>

            <div>
              <h1 className=' text-sm opacity-90 font-semibold'>Openings</h1>
              <h1 className=' text-sm opacity-75'>{jobDets?.openings}</h1>
            </div>

           

            <div>
              <h1 className=' text-sm opacity-90 font-semibold'>Job Type</h1>
              <h1 className=' text-sm opacity-75'>{jobDets?.jobType}</h1>
            </div>
            <div>
              <h1 className=' text-sm opacity-90 font-semibold'>Salary Range</h1>
              <h1 className=' text-sm opacity-75'>{jobDets?.salaryFrom} to {jobDets?.salaryTo} CTC</h1>
            </div>    

          </div>
        </div>
        <div className=' space-y-2 mt-4 break-words'>
          <div>

          <h1 className=' font-semibold mt-4'>About {jobDets?.createdBy?.organizationname}</h1>
          <h1 className='opacity-80'>{jobDets?.createdBy?.organizationdescripion}</h1>
          </div>
          <div className=' mt-10'>
            <h1 className=' font-semibold'>About the job</h1>
            <p className=' mb-3'>Responsibilities</p>
            <h1 className='opacity-80'>{jobDets?.responsibility}</h1>
          </div>
          <div>
            <h1 className=' font-semibold'>Preferred Qualifications:</h1>

            <p className='opacity-80'>{jobDets?.assesments}</p>
          </div>

            <h1 className=' font-semibold'>Skills:</h1>
          <div className=' flex gap-6 items-center flex-wrap'>
              {skills.map((skill)=>{
                return <div className=' px-6 py-1  bg-[#ebe8e8] rounded-lg flex justify-center items-center '>
                  {skill}
                </div>
              })

              }
          </div>


        </div>
        <div className='w-full mt-6  flex items-center justify-center'>

<button onClick={handleSubmit} className='w-4/12 bg-[#008BDC] mx-auto p-2 text-white'>Apply</button>
</div>
      </div>

    </div>
  )
}

export default JobDets