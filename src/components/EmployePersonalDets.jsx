import { Input } from '@nextui-org/react'
import axios from '../../utils/axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

function EmployePersonalDets() {
    const [formData,setFormData]=useState({
        firstName: JSON.parse(sessionStorage.getItem("firstName")),
        lastName: JSON.parse(sessionStorage.getItem("lastName")),
        email:"",
        contact:""

    })

    const handleChange = (e) => {
        const{name,value}=e.target
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
        
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("/employe/update",formData)
        .then((res)=>{
            console.log(res)
            sessionStorage.setItem("firstName",JSON.stringify(res.data.employe.firstName))
            sessionStorage.setItem("lastName",JSON.stringify(res.data.employe.lastName))

            toast.success(res.data.msg)
        })
        .catch((err)=>{
            console.log(err)
            toast.error(err.response.data.msg)
        })
    }
    return (
        <div className=' mt-10'>
            <form onSubmit={handleSubmit}>
            <div className='md:w-10/12 mx-auto p-10 bg-white border'>

                <div className='w-[full] h-[100px]  flex gap-8'>
                    <Input type="text" variant="underlined" label="First Name" onChange={handleChange} name="firstName" value={formData.firstName} />
                    <Input type="text" variant="underlined" label="Last Name" onChange={handleChange} name="lastName" value={formData.lastName} />


                </div>
                <Input type="email" variant="underlined" label="Email"  onChange={handleChange} name="email" />

                <div className='mt-4'>

                    <Input type="text" variant="underlined" label="Phone no." onChange={handleChange} name="contact" />
                </div>

                <div className='w-full mt-6  flex items-center justify-center'>

                    <button className='w-9/12 bg-[#008BDC] mx-auto p-2 text-white'>Update</button>
                </div>




            </div>
            </form>
        </div>
    )
}

export default EmployePersonalDets