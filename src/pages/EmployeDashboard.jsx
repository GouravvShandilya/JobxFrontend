import React, { useEffect, useState } from 'react'
import Nav from "../components/Nav"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import axios from '../../utils/axios';
import { Link } from 'react-router-dom';
import LoadingPage from './LoadingPage';

function EmployeDashboard() {
    const [allListing,setAllListing]=useState([])
    console.log(allListing)
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
      setLoading(true)
        axios.get("/employe/getalllisting")
        .then((res)=>{
            console.log(res)
            
            const allinternships=res.data.employe.interships ||  []
            const alljobs=res.data.employe.jobs ||  []
            // console.log(alljobs)
            setAllListing([...allinternships,...alljobs])
            setLoading(false)

        })
        .catch((err)=>{
          setLoading(false)
            console.log(err)
        })
    },[])

  return (
    <div className=' min-h-[100vh] bg-cover bg-[url(https://internshala.com/static/images/registration/student_new/background.png)]'>
        <Nav/>
        <div className=' md:w-8/12 mx-auto'>
        <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>TENURE</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>VIEW APPLICATION</TableColumn>

      </TableHeader>
    
        <TableBody>
        
        {allListing?.map((list,index)=>{
            return   <TableRow key={index}>
            <TableCell>{list?.profile}</TableCell>
            {list.duration ?
            (
            <TableCell>{list?.duration}</TableCell>

            )
            :
            (
            <TableCell>Job</TableCell>
                
            )

            }
            
            <TableCell>Active</TableCell>
            {list.duration ?
            (
                <TableCell>
                <Link className=' text-blue-600' to={`/student/internship/details/${list._id}`}>view</Link>
            </TableCell>
            )
            :
            (
                <TableCell>
                <Link className=' text-blue-600' to={`/student/job/details/${list._id}`}>view</Link>
            </TableCell> 
            )
            }
       

          </TableRow>
            
        })

        }
      
      
      </TableBody>
     

     
    </Table>
        </div>
        
    </div>
  )
}

export default EmployeDashboard