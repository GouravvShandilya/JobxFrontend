import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import axios from '../../utils/axios'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

function StudentMyApplication() {
  const [allApplicattions, setAllApplications] = useState([])
  console.log(allApplicattions)
  var allapp = []
  useEffect(() => {
    axios.get("/user/student/allapplications")
      .then((response) => {
        console.log(response)
        const appliedInterships = response.data.student.appliedinterships || [];
        const appliedJobs = response.data.student.appliedjobs || [];


        const allApplications = [...appliedInterships, ...appliedJobs];
        setAllApplications(allApplications);


      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className=' min-h-[100vh] bg-cover bg-[url(https://internshala.com/static/images/registration/student_new/background.png)]'>
      <Nav />
      <div className=' md:w-6/12   mx-auto mt-10'>

        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Sno.</TableColumn>

            <TableColumn>COMPANY</TableColumn>
            <TableColumn>PROFILE</TableColumn>
            <TableColumn>APPLIED ON	</TableColumn>
            <TableColumn>REVIEW APPLICATION</TableColumn>
          </TableHeader>
          <TableBody>
            {allApplicattions?.map((applicaion, index) => {
              const createdAt = applicaion.createdAt; // Your date string

              // Parse the date string into a JavaScript Date object
              const date = new Date(createdAt);

              // Extract the month and day components
              const month = date.getMonth() + 1; // Months are zero-based, so add 1
              const day = date.getDate();
              const year = date.getFullYear()

              return <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{applicaion.createdBy.organizationname}</TableCell>
                <TableCell>{applicaion.profile}</TableCell>
                <TableCell>{month}/{day}/{year}</TableCell>
                <TableCell>view</TableCell>

              </TableRow>
            })

            }



          </TableBody>
        </Table>
      </div>



    </div>
  )
}

export default StudentMyApplication