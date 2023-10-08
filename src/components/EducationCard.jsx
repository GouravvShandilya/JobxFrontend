import React, { useState } from 'react'
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import SeniorEducationModal from './SeniorEducationModal';
import axios from '../../utils/axios';
import UpdateGraduation from './UpdateGraduation';

function EducationCard({ details, fetchUserData }) {
    console.log(details)
    const [formData, setFormData] = useState({
        id: details.id,
        status: details.status,
        Board: details.Board,
        YearOfCompletion: details.YearOfCompletion,
        Performance: details.Performance,
        School: details.School,
        Stream: details.Stream
    })
    const [formData2, setFormData2] = useState({
        id: details.id,

        college: details.college,
        startYear: details.startYear,
        endYear: details.endYear,
        degree: details.degree,
        stream: details.stream,
        performance: details.performance
    })

    const handleDelete = async () => {
        axios.post("/resume/delete-edu", formData)
            .then((res) => {
                console.log(res)
                fetchUserData()
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className=' w-[full]   flex justify-between p-4'>
            <div>


                {details.School &&
                    <div>
                        <h1 className=' font-semibold'>{details.status}</h1>
                        {details.Board &&
                        <h1>Borad-{details?.Board}</h1>

                        }
                        {/* <h1>{details?.Board}</h1> */}
                        <h1>{details?.YearOfCompletion}</h1>
                        <h1>{details?.Performance}</h1>
                        <h1>{details?.Stream}</h1>
                        <h1>{details?.School}</h1>
                    </div>
                }


                {details.college &&
                    <div>
                        <h1 className=' font-bold text-xl'>{details?.stream}</h1>
                        <h1 className=' text-sm opacity-75'>{details?.college}</h1>
                        <h1 className=' text-sm opacity-75'>{details?.startYear}-{details?.endYear}</h1>
                        <h1 className=' text-sm opacity-75'>{details?.degree}</h1>

                        <h1><span className=' font-semibold '>CGPA:</span> <span className=' opacity-75'>{details?.performance}/10</span></h1>
                    </div>
                }



            </div>
            <div className=' flex gap-4'>
                {details.level === "SeniorSec" &&
                    <div className=' flex gap-3'>
                        <SeniorEducationModal formData={formData} setFormData={setFormData} fetchUserData={fetchUserData} />
                        <RiDeleteBin5Line onClick={handleDelete} />
                    </div>
                }


                {details.level === "Graduation" &&
                    <div className='flex gap-3'>

                        <UpdateGraduation formData2={formData2} setFormData2={setFormData2} fetchUserData={fetchUserData} />
                        <RiDeleteBin5Line onClick={handleDelete} fetchUserData={fetchUserData} />
                    </div>

                }
            </div>


        </div>
    )
}

export default EducationCard