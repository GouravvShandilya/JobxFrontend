import { Button, Input } from '@nextui-org/react'
import axios from '../../utils/axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from  '../components/Nav'
import { toast } from 'react-toastify'
function DeleteAccountPage() {
  const  [password,setPassword]=useState("")
  
    const navigate=useNavigate()
    const handleDelete=()=>{
      const formData=new FormData()
      formData.append("password",password)
        axios.post("/user/student/delete-account",formData)
        .then((res)=>{
            console.log(res)
            sessionStorage.clear()
            setTimeout(() => {
              
              toast.success(res.data.msg)
            }, 1);
            navigate("/")
        })
        .catch((err)=>{console.log(err)
          toast.error(err.response.data.msg)
        })
    }
  return (
    <div className=' w-[100%] h-[100vh] overflow-hidden'>
      <Nav/>
      <div className='w-[100vw] h-[100vh] flex justify-center items-center '>

      <div className=' md:w-[20%] flex flex-col gap-4  w-[80%]'>
          
            <Input
              autoFocus
              label="Password"
              placeholder='Enter your password'
              type='text'
              onChange={(e)=>setPassword(e.target.value)}
              
            />
          <div>
            
        <h1>Are you Sure??</h1>
        <Button color="danger" onClick={handleDelete} variant="bordered">
        Delete user
      </Button>
            </div>
              </div>
      </div>
        </div>
  )
}

export default DeleteAccountPage