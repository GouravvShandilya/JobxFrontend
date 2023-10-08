import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import axios from '../../utils/axios'
import { Button, Input } from '@nextui-org/react'
import JobStudentCard from '../components/JobStudentCard'
function StudentJobPage() {
    const [jobs,setJobs]=useState()
    const [profileQuery,setProfileQuery] =useState(null)
    const [locationQuery,setLocationQuery] =useState(null)
    console.log(jobs)
    useEffect(()=>{
        axios.get("/user/student/jobs")
        .then((response)=>{
            console.log(response)
            setJobs(response.data.job)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const handleProfileSearch=(e)=>{
        axios.get(`/user/student/jobs/search?profileQuery=${profileQuery}`)
        .then((response) => {
            console.log(response)
            setJobs(response.data.job)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    const handleLocationSearch=()=>{
        axios.get(`/user/student/jobs/search/bylocation?locationQuery=${locationQuery}`)
        .then((response) => {
            console.log(response)
            setJobs(response.data.job)
        })
        .catch((err) => {
            console.log(err)
        })
    }



  return (
    <div className=' overflow-x-hidden'>
    <Nav />
    <div className=' p-4'>

        <div>


            <div className='p-4 ml-10 space-y-4 items-center gap-4'>

                <div className='flex space-x-2'>
                    <Input type='search' label="Filter by Profile" placeholder='Filter by Profile' onChange={(e)=>setProfileQuery(e.target.value)} className='max-w-[400px] max-h-[40px]' />
                    <Button onClick={handleProfileSearch} variant='bordered' color='primary'>Search</Button>
                </div>
                <div className='flex space-x-2'>

                    <Input type='search' label="Filter by Location" placeholder='Filter by Location'  onChange={(e)=>setLocationQuery(e.target.value)} className='max-w-[400px] max-h-[40px]' />
                    <Button onClick={handleLocationSearch} variant='bordered' color='primary'>Search</Button>

                </div>


            </div>


            <div className=' w-[100%] flex items-start flex-wrap mt-4  gap-4 '>
                {jobs?.length<1 
                ?
                (<p>No data</p>)
                :
                (
                    jobs?.reverse().map((job, index) => {
                        return <JobStudentCard key={index} dets={job}/>
                    })
                )

                }
               
            </div>
        </div>
    </div>
</div>
  )
}

export default StudentJobPage