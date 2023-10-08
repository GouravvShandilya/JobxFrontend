import React, { useState } from "react";
import {
    useNavigate,
    useParams,
  } from "react-router-dom";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Input, Button} from "@nextui-org/react";
import axios from "../../utils/axios";
import {  toast } from 'react-toastify';


export default function ForgetPasswordForm() {
    const navigate=useNavigate()
    const {id}=useParams()
    const [formData,setFormData]=useState({
        id,
        password:""
    })
    console.log(formData)

    const handleChange=(e)=>{
        const{name,value}=e.target
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const handleClick=()=>{
        axios.post(`/user/student/forget-link`,formData)
        .then((res)=>{console.log(res)
            navigate("/")
        })
        .catch(err=>{
          console.log(err)
         
        
        })
    }


  return (
    <div className=" flex justify-center w-[100%] h-[100vh] items-center">

    <Card className="min-w-[400px]">
      <CardHeader className="flex gap-3">
        <h1>Make sure you remember next time</h1>
      </CardHeader>
      <Divider/>
      <CardBody className=" space-y-4">
        <Input
        label="Password"
        placeholder="Enter your password"
        variant="bordered"
        type="password"
        name="password"
        onChange={handleChange}
        />
           <Input
        label="Confirm Password"
        placeholder="Enter your password"
        variant="bordered"
        type="password"
        />
      </CardBody>
      <Divider/>
      <CardFooter className=" flex items-end justify-end">

        <Button color="primary" onClick={handleClick} >Change Password</Button>
          
        
      </CardFooter>
    </Card>
    </div>
  );
}
