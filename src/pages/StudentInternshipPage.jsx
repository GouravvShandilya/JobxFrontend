import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import axios from '../../utils/axios'
import { Button, Input } from '@nextui-org/react'
// import InternshipPageNav from '../components/InternshipPageNav'
import InternshipStudentCard from '../components/InternshipStudentCard'
function StudentInternshipPage() {
    const [internships, setInternships] = useState()
    const [profileQuery,setProfileQuery] =useState(null)
    const [locationQuery,setLocationQuery] =useState(null)
    console.log(profileQuery)
    console.log(locationQuery)
    console.log(internships)


    const fecthAllInternship=()=>{
        axios.get("/user/student/internships")
        .then((response) => {
            console.log(response)
            setInternships(response.data.internship)
        })
        .catch((err) => {
            console.log(err)
        })
    }


    useEffect(() => {
       fecthAllInternship()

    }, [])

    const handleProfileSearch=(e)=>{
        axios.get(`/user/student/internships/search?profileQuery=${profileQuery}`)
        .then((response) => {
            console.log(response)
            setInternships(response.data.internship)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    const handleLocationSearch=()=>{
        axios.get(`/user/student/internships/search/bylocation?locationQuery=${locationQuery}`)
        .then((response) => {
            console.log(response)
            setInternships(response.data.internship)
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


                    <div className='w-[100%] flex items-start flex-wrap mt-4  gap-4'>

                        {internships?.reverse().map((intern, index) => {
                            return <InternshipStudentCard key={index} dets={intern} />
                        })

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentInternshipPage