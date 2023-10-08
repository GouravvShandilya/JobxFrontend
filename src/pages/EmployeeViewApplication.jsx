import React, { useEffect, useState } from 'react'
import Nav from "../components/Nav"
import axios from '../../utils/axios'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Link } from 'react-router-dom';

function EmployeeViewApplication() {
  const [allApplications, setAllApplications] = useState([])
  console.log(allApplications)
  useEffect(() => {
    axios.get("/employe/allapplications")
      .then((res) => {
        console.log(res)
        var internshiparr = res.data.employe.interships || []
        const jobarr = res.data.employe.jobs || []
        // Filter internship objects based on students array length > 0
        const filteredInternships = [];
        internshiparr.forEach((eachInter) => {
          if (eachInter.students.length > 0) {
            filteredInternships.push(eachInter);
          }
        });

        // Filter job objects based on students array length > 0
        const filteredJobs = [];
        jobarr.forEach((eachJob) => {
          if (eachJob.students.length > 0) {
            filteredJobs.push(eachJob);
          }
        });

        // Combine the filtered internship and job arrays
        const allApplications = [...filteredInternships, ...filteredJobs];
        setAllApplications(allApplications);


      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div className=' min-h-[100vh] bg-cover bg-[url(https://internshala.com/static/images/registration/student_new/background.png)]'>
      <Nav />
      <div className=' w-6/12 mx-auto mt-10'>

        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Sno.</TableColumn>

            <TableColumn>Applicant Email</TableColumn>
            <TableColumn>PROFILE</TableColumn>
            <TableColumn>APPLIED ON	</TableColumn>
            <TableColumn>REVIEW Resume</TableColumn>
          </TableHeader>
          <TableBody>
            {allApplications?.map((applicaion, index) => {
              const createdAt = applicaion.createdAt; // Your date string

              // Parse the date string into a JavaScript Date object
              const date = new Date(createdAt);

              // Extract the month and day components
              const month = date.getMonth() + 1; // Months are zero-based, so add 1
              const day = date.getDate();
              const year = date.getFullYear()
              console.log(applicaion.students[0])
              return <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>

                <TableCell>
                  {applicaion?.students.map((student, studentIndex) => (
                    <span key={studentIndex}>{student.email} </span>
                  ))}
                </TableCell>
                <TableCell>{applicaion.profile}</TableCell>
                <TableCell>{month}/{day}/{year}</TableCell>
                <TableCell>
                {applicaion?.students.map((student, studentIndex) => (
                  <Link key={studentIndex} to={`/viewresume/${student._id}`}>View resume</Link>
                    // <span >{student.email} </span>
                  ))}
                </TableCell>

              </TableRow>
            })

            }



          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default EmployeeViewApplication