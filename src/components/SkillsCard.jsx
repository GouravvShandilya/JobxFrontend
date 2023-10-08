import React, { useState } from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import axios from '../../utils/axios';
import UpdateSkills from './UpdateSkills';


function SkillsCard({details,fetchUserData}) {
    console.log(details)

    const [formData,setFormData]=useState({
        id:details.id,
        Skill:details.Skill,
        level:details.level
    })
    console.log(formData)
    const handleDelete = async () => {
        axios.post("/resume/delete-skills", formData)
            .then((res) => {
                console.log(res)
                fetchUserData()
            })
            .catch((err) => console.log(err))
    }

  return (
    <div className='  flex'>
        <div   className='flex'>
            <div>

            <h1>{details?.Skill}</h1>
            <h1>{details?.level}</h1>
            </div>
            <div className='flex gap-4'>
            <UpdateSkills formData={formData} setFormData={setFormData} fetchUserData={fetchUserData}/>
            <RiDeleteBin5Line onClick={handleDelete} fetchUserData={fetchUserData} />

            </div>

            </div>    
    
    </div>
  )
}

export default SkillsCard