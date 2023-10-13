import { Input } from '@nextui-org/react'
import React, { useState } from 'react'
import Loginbtn from '../assets/ui/Loginbtn'
import axios from '../../utils/axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Nav from "../components/Nav"
import LoadingPage from './LoadingPage'


function StudentRegister() {
    const navigate=useNavigate()
    const [loading,setLoading]=useState(false)
    const [formData,setFormData]=useState({
        email:"",
        password:"",
        firstName:"",
        lastName:"",
        contact:"",
        city:"",
    })
    console.log(formData)
    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
    const handleSubmit=async(e)=>{
        try {
            e.preventDefault()
            setLoading(true)
            const response=await axios.post(`/user/student/signup`,formData)
            console.log(response)
            setLoading(false)
            
            sessionStorage.setItem("user",JSON.stringify(response.data))
            if(response){
                setTimeout(() => {
                    toast.success("Now you can login!")
                }, 1);
            }
            navigate("/")
            // console.log(sessionStorage.getItem("user"))
        } catch (error) {
            setLoading(false)
            toast.error(error.response.data.msg)
           
            
        }
      
    }
    return (
        <div className=' bg-cover bg-[url(https://internshala.com/static/images/registration/student_new/background.png)]'>
            <Nav/>
        <div className=' h-[100vh] w-full mt-10  flex justify-center items-center'>
            <div className=' mt-10 '>

                <div>
                    <h1 className='text-2xl md:text-[2.4vw] text-center font-bold'>Sign-up and apply for free</h1>
                    <h3 className='text-xl text-center mt-2 mb-3'>1,50,000+ companies hiring on Find<span className='text-yellow-400'>X</span></h3>
                </div>
                <div className='w-[600px]  ml-[180px]  p-4'>

                    <form onSubmit={handleSubmit} className=' space-y-6 bg-[#fff] shadow-xl rounded-md p-8 w-[400px]'>
                        <Input type="email" variant="underlined" label="Email" onChange={handleChange} name="email"   />
                        <Input type="password" variant="underlined" label="Password" onChange={handleChange} name="password" />
                        <div className='w-[full] h-[100px]  flex gap-8'>
                            <Input type="text" variant="underlined" label="First Name" onChange={handleChange} name="firstName" />
                            <Input type="text" variant="underlined" label="Last Name" onChange={handleChange} name="lastName" />


                        </div>
                        <div className='w-[full] h-[100px]  flex gap-8'>
                            <Input type="text" variant="underlined" label="Phone no." onChange={handleChange} name="contact" />
                            <Input type="text" variant="underlined" label="Ciy" onChange={handleChange} name="city" />


                        </div>

                        <p>By signing up, you agree to our Terms and Conditions.</p>
                        <div className='w-full  flex items-center justify-center'>
                            {loading?
                            (
                            <LoadingPage/>

                            )
                            :
                            (
                            <button className='w-9/12 bg-[#008BDC] mx-auto p-2 text-white'>Sign up</button>

                            )

                            }
                        </div>
                        <p className=' text-center'>Already registered? <span><Loginbtn /></span></p>
                    </form>
                </div>


            </div>
            </div>

        </div>
    )
}

export default StudentRegister