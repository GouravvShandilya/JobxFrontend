import React from "react";

import {Navbar, NavbarBrand, NavbarContent,NavbarMenuToggle,Avatar, NavbarItem,NavbarMenu,NavbarMenuItem, Link, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import Loginbtn from "../../assets/ui/Loginbtn";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "../../../utils/axios";
import { toast } from "react-toastify";


export default function App() {
  const navigate=useNavigate()
  const userdets=JSON.parse(sessionStorage.getItem('firstName'));
  const userprofile=JSON.parse(sessionStorage.getItem('avatar'));
  const userprofile2=JSON.parse(sessionStorage.getItem('organizationlogo'));
  const role=JSON.parse(sessionStorage.getItem('role'));
  console.log(role)

  console.log(userprofile)

  // console.log(userdets)
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const handleNavigate=()=>{
      navigate("/register/student")
  }

  const handleLogout=async()=>{
    const response=await axios.post("/user/student/signout")
    sessionStorage.clear("user")
    console.log(response)
    navigate("/")

    setTimeout(()=>{
      toast.success("Logged Out")
    },1)
    
    // console.log("safasf")

  }
  function handleClick(){
    toast.error("jasdjaskd")
  }
  function handleChangepassword(){
    navigate("/student/changepassword")
  }

  function handleChangepasswordEmploye(){
    navigate("/employe/changepassword")
  }


  function handleDeleteAccount(){
    navigate("/student/deleteaccount")
  }
  function handleDeleteAccountEmploye(){
    navigate("/employe/deleteaccount")

  }
  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          
          <p className="font-bold text-inherit">FindX</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
           
          <NavLink to="/" className="font-bold text-inherit">Find<span className=" text-yellow-400">X</span></NavLink>
        </NavbarBrand>
        <NavbarItem>
          {role==="Employe"?
          (
            <NavLink to="/employe/dashboard">
            Dashboard
          </NavLink>
          )
          :
        (
          <NavLink color="foreground" to="/student/internships">
          Internships
        </NavLink>
        )
          }
        
        </NavbarItem>
        <NavbarItem isActive>
        {role==="Employe"?
          (
            <NavLink to="/empolye/create" aria-current="page" className=" text-yellow-600">
           Post jobs/Interships
          </NavLink>
          )
          :
        (
          <NavLink to="/student/jobs" className="text-yellow-400" aria-current="page" color="warning">
            Jobs
          </NavLink>
        )
          }
         
        </NavbarItem>
       
      </NavbarContent>

      <NavbarContent justify="end">
        {!userdets &&

          <div className=" flex gap-6 ">
            <NavbarItem className="hidden lg:flex">
            
            <Loginbtn/>
          </NavbarItem>
          <NavbarItem>
          
        
            <Button as={Link} color="warning"   onClick={handleNavigate}  variant="flat">
              Sign Up
            </Button>

            <button className=" ml-4 border-l-2 px-3 font-semibold" onClick={()=>navigate("/employe/register")} >Hire Talent</button>
            
          
            
          
            
  
          </NavbarItem>
          </div>
        }
      

        {userdets &&

        <div>
        <Dropdown placement="bottom-end">
        <DropdownTrigger>
         {userprofile?
         (
          <Avatar
          isBordered
          as="button"
          className="transition-transform"
          src={userprofile.url}
        />
         )
         :
          (
            <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src={userprofile2.url}
          />
          )
         }
         
        
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="Home">
          { role==="Employe"?
          (
         
            <NavLink to="/employe/homepage">Home</NavLink>

          )
          :
          (

            <NavLink to="/">Home</NavLink>

          )

          }
          </DropdownItem>
          
          <DropdownItem key="My Application">
            {userprofile &&
  <NavLink to="/student/my-application">

    My Applications
  </NavLink>

  
            }
            {userprofile2 &&
            <NavLink to="/employe/view-application">

              view Applications
            </NavLink>

          
            }
            
            </DropdownItem>
          <DropdownItem key="Edit Resume">
          {userprofile &&
  
            <NavLink to="/resume/student">Edit Resume</NavLink>
          }
          {userprofile2 &&
            <NavLink to="/"> Nothing</NavLink>
          }
          </DropdownItem>
          { role==="Employe"?
          (
          <DropdownItem key="Change Password" onClick={handleChangepasswordEmploye}>Change Password</DropdownItem>

          )
          :
          (

            <DropdownItem key="Change Password" onClick={handleChangepassword}>Change Password</DropdownItem>
          )

          }
            { role==="Employe"?
          (
            <DropdownItem key="DeleteAccount" onClick={handleDeleteAccountEmploye}>DeleteAccount</DropdownItem>


          )
          :
          (

            <DropdownItem key="DeleteAccount" onClick={handleDeleteAccount}>DeleteAccount</DropdownItem>

          )

          }


          <DropdownItem key="Help Center">Help Center</DropdownItem>

          {role==="Employe" &&
          <DropdownItem key="Edit Profile">
            <NavLink to="/employe/edit-profile">

            Edit Profile
            </NavLink>
            
            </DropdownItem>
          }
         
          <DropdownItem key="logout" onClick={handleLogout} color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
        </div>
        }

        
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
