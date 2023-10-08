import React, { useEffect, useState } from 'react'
import Nav from "../components/Nav"
import { Link, useParams } from 'react-router-dom'
import axios from '../../utils/axios'
function ViewResumePage() {
    const { studentid } = useParams()
    console.log(studentid)
    const [studentResume, setStudentResume] = useState()
    console.log(studentResume)
    useEffect(() => {
        axios.get(`/employe/view-resume/${studentid}`)
            .then((res) => {
                console.log(res)
                setStudentResume(res.data.foundstudent)
            })
            .catch((err) => console.log(err))
    }, [])
    return (
        <div>
            <Nav />
            <div className='w-[100%] h-[90vh] p-4'>
                <div className='w-6/12 min-h-[600px] border mx-auto p-4'>
                    <div className=' border-b p-2'>
                        <h1 className=' text-2xl font-semibold'>{studentResume?.firstName} {studentResume?.lastName}</h1>
                        <h1>{studentResume?.email}</h1>
                        <h1>{studentResume?.contact}</h1>
                        <h1>{studentResume?.city}</h1>


                    </div>


                    <div className=' border-b p-2'>
                        <h1 className=' font-bold'>Education</h1>
                        {studentResume?.resume.education.length > 0 ?
                            (
                                <div className='  space-y-4'>
                                    {studentResume?.resume.education.map((edu) => {
                                        return (
                                            edu.level === "Graduation" ?
                                                (
                                                    <div>
                                                        <h1>College-{edu.college}</h1>
                                                        <h1>Degree-{edu.degree}</h1>
                                                        <h1>Batch-{edu.startYear}-{edu.endYear}</h1>
                                                        <h1>Stream-{edu.stream}</h1>
                                                    </div>
                                                )
                                                :
                                                (
                                                    <div>
                                                    <h1>Degree-{edu.School}</h1>
                                                    <h1>Board-{edu.Board}</h1>
                                                    <h1>Stream{edu.Stream}</h1>
                                                    <h1>Year of completion-{edu.YearOfCompletion}</h1>
                                                    <h1>Status-{edu.status}</h1>

                                                </div>   
                                                )
                                
                            )



                                    })

                                    }

                                </div>
                            )
                            :
                            (
                                <p>No Data...</p>
                            )

                        }



                    </div>

                    <div className=' border-b p-2'>
                        <h1 className=' font-bold'>Jobs</h1>
                        {studentResume?.resume.jobs.length > 0 ?
                            (
                                <div>
                                    {studentResume?.resume.jobs.map((job) => {
                                        return (

                                            <div>
                                                <h1>Profile-{job?.Profile}</h1>
                                                <h1>Org-{job?.Organization}</h1>
                                                <h1>Designation{job?.Designation}</h1>
                                                <h1>Location-{job?.Location}</h1>
                                                <h1>Description-{job?.Description}</h1>
                                                <h1>Tenure-{job?.StartDate}-{job.EndDate}</h1>


                                            </div>
                                        )



                                    })

                                    }

                                </div>
                            )
                            :
                            (
                                <p>No Data...</p>
                            )

                        }



                    </div>
                    <div className=' border-b p-2'>
                        <h1 className=' font-bold'>Interships</h1>
                        {studentResume?.resume.interships.length > 0 ?
                            (
                                <div>
                                    {studentResume?.resume.interships.map((internship) => {
                                        return (

                                            <div>
                                                <h1>Profile-{internship?.Profile}</h1>
                                                <h1>Org-{internship?.Organization}</h1>
                                                <h1>Designation-{internship?.Designation}</h1>
                                                <h1>Location-{internship?.Location}</h1>
                                                <h1>Description-{internship?.Description}</h1>
                                                <h1>Tenure-{internship?.StartDate}-{internship.EndDate}</h1>


                                            </div>
                                        )



                                    })

                                    }

                                </div>
                            )
                            :
                            (
                                <p>No Data...</p>
                            )

                        }



                    </div>


                    <div className=' border-b p-2'>
                        <h1 className=' font-bold'>Role of responsibility

                        </h1>
                        {studentResume?.resume.responsibilities.length > 0 ?
                            (
                                <div>
                                    {studentResume?.resume?.responsibilities.map((responsibilities) => {
                                        return (

                                            <div>
                                                <h1>Description: {responsibilities?.Description}</h1>

                                            </div>
                                        )



                                    })

                                    }

                                </div>
                            )
                            :
                            (
                                <p>No Data...</p>
                            )

                        }



                    </div>


                    <div className=' border-b p-2'>
                        <h1 className='   font-bold'>Projects

                        </h1>
                        {studentResume?.resume.projects.length > 0 ?
                            (
                                <div>
                                    {studentResume?.resume?.projects.map((projects) => {
                                        return (

                                            <div>
                                                <h1>Title: {projects?.Title}</h1>
                                                <h1>Description: {projects?.Description}</h1>
                                                <h1>Tenure: {projects?.StartMonth}-{projects?.EndMonth}</h1>
                                                <h1>Project link: <span><Link to={projects?.ProjectLink} className=' text-blue-700'>{projects?.ProjectLink}</Link></span></h1>

                                            </div>
                                        )



                                    })

                                    }

                                </div>
                            )
                            :
                            (
                                <p>No Data...</p>
                            )

                        }



                    </div>


                    <div className=' border-b p-2'>
                        <h1 className=' font-bold'>Skills

                        </h1>
                        {studentResume?.resume.skills.length > 0 ?
                            (
                                <div>
                                    {studentResume?.resume?.skills.map((skill) => {
                                        return (

                                            <div className='flex  gap-4'>
                                                <h1>Title: {skill?.Skill}</h1>
                                                <h1>Level: {skill?.level}</h1>
                                            </div>
                                        )



                                    })

                                    }

                                </div>
                            )
                            :
                            (
                                <p>No Data...</p>
                            )

                        }



                    </div>

                </div>
            </div>
        </div>
    )
}

export default ViewResumePage