import React, { useState } from 'react'
import Nav from "../components/Nav"
import EmployePersonalDets from '../components/EmployePersonalDets'
import OrgDets from '../components/OrgDets'
function EmployeEditProfile() {
    const [pDets,setPDets]=useState(true)
    const [oDets,setODets]=useState(false)

    const handlePersonalDetails=()=>{
        setODets(false)
        setPDets(true)
    }   
    const handleOrgDetails=()=>{
        setPDets(false)
        setODets(true)
    }
  return (
    <div className='w-[100%] min-h-[100vh] '>
        <Nav/>
        <div className='md:w-6/12 mx-auto mt-4 min-h-[70vh] '>
            <div className='w-[100%]  flex gap-4 p-4 items-center justify-center'>
                <button onClick={handlePersonalDetails}>Personal Details</button>
                <button onClick={handleOrgDetails}>organization Details</button>

            </div>
            <div className=' w-[100%]  p-4 mt-10'>

            {pDets &&
            <EmployePersonalDets/>
            
        }
            {oDets &&
                <OrgDets/>
            }
            </div>
        </div>
       
        </div>
  )
}

export default EmployeEditProfile