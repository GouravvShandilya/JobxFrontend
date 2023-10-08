import React,{useContext, useRef,useState} from "react";
import {  toast } from 'react-toastify';

import {Tabs,Tab,Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import {MailIcon} from './MailIcon.jsx';
import {LockIcon} from './LockIcon.jsx';
import { useLocation, useNavigate } from "react-router-dom";
import axios from '../../../utils/axios.js'
import { baseUrl } from "../baseUrl.js";
import { User } from "../../context/UserContext.jsx";
import LoadingPage from "../../pages/LoadingPage.jsx";
export default function Loginbtn() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [selected, setSelected] = useState("login");
  const [loading, setLoading] = useState(false); // Add a loading state
  const {userData,setData}=useContext(User)
  const tabRef = useRef();
  const location=useLocation()
  const navigate=useNavigate()
  const [formData,setFormData]=useState({
    email:"",
    password:"",

  })
  
const handleForgetPage=()=>{
  navigate("/forget/password")
}

  const onSelectionChange = (newSelected) => {
    console.log(newSelected)
    setSelected(newSelected);
    setFormData((prev)=>{
      return{
        role:newSelected
      }
    })
  }

  const handleChange=(e)=>{
    const {value,name}=e.target
    setFormData((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }

  const handleSubmit=async()=>{
    try {
      console.log(formData)
      setLoading(true)
      if(formData.role==="students"){
        const response=await axios.post(`/user/student/signin`,formData)
        console.log(response)
        setLoading(false)
        setData(response.data)
        localStorage.setItem("role",response.data.role)
       
      
        sessionStorage.setItem("firstName",JSON.stringify(response.data.firstName))
        sessionStorage.setItem("lastName",JSON.stringify(response.data.lastName))
        sessionStorage.setItem("avatar",JSON.stringify(response.data.avatar))
        sessionStorage.setItem("role",JSON.stringify(response.data.role))
  
    
        
        navigate("/")
        
    
        
        setTimeout(() => {
          if(response.data.success){
    
            toast.success(response.data.msg);
          }else{
            toast.error("asfasfas");
          }
          
        }, 1);
      }
      if(formData.role==="Employer"){
        console.log("emplye wala route")
        const response=await axios.post(`/employe/signin`,formData)
        console.log(response)
        sessionStorage.setItem("firstName",JSON.stringify(response.data.firstName))
        sessionStorage.setItem("lastName",JSON.stringify(response.data.lastName))
        sessionStorage.setItem("organizationlogo",JSON.stringify(response.data.organizationlogo))
        sessionStorage.setItem("role",JSON.stringify(response.data.role))
  
    
        
        navigate("/employe/homepage")
        
    
        
        setTimeout(() => {
          if(response.data.success){
    
            toast.success(response.data.msg);
          }else{
            toast.error("asfasfas");
          }
          
        }, 1);
      }
     
    } catch (error) {
      console.log(error)
      setLoading(false)
      toast.error(error.response.data.msg)
    }
   
  }

  return (
    <>
      {loading ?
      (<LoadingPage/>)
        :
        (
      <div>

        {location.pathname==="/register/student"?
      <Button onPress={onOpen} variant="light"  color="primary">Login</Button>
        :
      <Button onPress={onOpen}   color="primary">Login</Button>

        }
      
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
        
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
            <Tabs aria-label="Options" 
                        selectedKey={selected}
                        onSelectionChange={onSelectionChange}
            
            >
                <Tab  key="students" title="Students">
                <Input
                  autoFocus
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  onChange={handleChange}
                  name="email"
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                  onChange={handleChange}
                  name="password"
                />
                </Tab>
                <Tab key="Employer" title="Employer">
                <Input
                  autoFocus
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  onChange={handleChange}
                  name="email"
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                  onChange={handleChange}
                  name="password"
                />
                </Tab>
                </Tabs>
                <div className="flex py-2 px-1 justify-between">
                 
                  <Link color="primary" onClick={handleForgetPage} size="sm">
                    Forgot password?
                  </Link>

                  <Link color="primary" onClick={()=>navigate("/employe/forget/password")} size="sm">
                    Forgot password?(Employee)
                  </Link>
                </div>
                <div>
                    <p className=" w-full text-center">New to Internshala? Register ( <span className=" cursor-pointer"><Link>Student</Link></span> / <span className=" cursor-pointer"><Link>Company</Link></span>)</p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onClick={handleSubmit} onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </div>
      )
    }
      
    </>
  );
}
