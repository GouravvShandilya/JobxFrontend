import { Input } from '@nextui-org/react'
import axios from '../../utils/axios'
import React, { useState } from 'react'
import {  toast } from 'react-toastify';

function ForgetPasswordForEmployee() {
    const [form,setForm]=useState({
        email:''
    })
    console.log(form)
    const handleChange=(e)=>{
        const{name,value}=e.target
        setForm((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("/employe/send-mail",form)
        .then((response)=>{
            console.log(response)
            toast.success(response.data.msg)
        })
        .catch(err=>{console.log(err)
            toast.error(err.response.data.msg)
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Input
                type='email'
                placeholder='Enter your email'
                label="email"
                name='email'
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default ForgetPasswordForEmployee