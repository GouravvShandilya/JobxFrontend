import { Input, Textarea } from '@nextui-org/react'
import axios from '../../utils/axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { json } from 'react-router-dom'

function OrgDets() {
        const orgpic=JSON.parse(sessionStorage.getItem("organizationlogo"))
        console.log(orgpic)
    const [formData, setFormData] = useState({
        firstName: JSON.parse(sessionStorage.getItem("firstName")),
        lastName: JSON.parse(sessionStorage.getItem("lastName")),
        organizationdescripion:"",
        city:"",
        industry:"",
        noofemployes:"0-50",

    })
    const [organizationlogo,setorganizationlogo]=useState()
    console.log(organizationlogo)
    console.log(formData)
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))

    }
    const handleChangeProfile=(e)=>{
        setorganizationlogo(e.target.files[0])
    }
    const handleProfileSubmit=()=>{
        const formData=new FormData()
        formData.append("organizationlogo",organizationlogo)
        axios.post("/employe/organizationlogo",formData)
        .then((res)=>{
            console.log(res)
            sessionStorage.setItem("organizationlogo",JSON.stringify(res.data.employe.organizationlogo))
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("/employe/update", formData)
            .then((res) => {
                console.log(res)
                toast.success(res.data.msg)
            })
            .catch((err) => {
                console.log(err)
                toast.error(err.response.data.msg)
            })
    }
    return (
        <div className=' mt-10'>
            
                <div className='md:w-10/12 mx-auto p-10 bg-white border'>
                    <Input type="text"  variant="underlined" label="Name" onChange={handleChange} name="firstName" disabled value={`${formData.firstName} ${formData.lastName}`} />
                    <div className=' flex md:flex-row flex-col items-center gap-10'>
                    <Input type='file' onChange={handleChangeProfile} className='mt-4' width={50} variant='underlined' name='organizationlogo'/>
                    <button onClick={handleProfileSubmit} className=' bg-[#008BDC]   text-white p-2 w-full  whitespace-nowrap'>set profilepic</button>

                    </div>
                    <Textarea className=' mt-6'  label="About yourself and what you do" onChange={handleChange} name="organizationdescripion"/>
                    <Input type="text"  variant="underlined" label="City" onChange={handleChange} name="city"  />
                   <div>
                    
                   <Input type="text"  variant="underlined" label="Industry" onChange={handleChange} name="industry"  />

                   </div>
                   <Input type="text"  variant="underlined" label="No. of employees" onChange={handleChange} name="noofemployes"  />

                   <div className='w-full mt-6  flex items-center justify-center'>

<button onClick={handleSubmit} className='w-9/12 bg-[#008BDC] mx-auto p-2 text-white'>Update</button>
</div>
                        
                </div>
            
        </div>
    )
}

export default OrgDets