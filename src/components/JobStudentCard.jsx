import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {Card, CardHeader, CardBody, CardFooter, Divider, Image, Button} from "@nextui-org/react";

export default function JobStudentCard({dets}) {
  const navigate=useNavigate()
  console.log(dets)

  const handleViewDets=()=>{
    navigate(`/student/job/details/${dets._id}`)
  }


  return (
    <Card className=" border rounded-sm md:min-w-[470px] md:mx-auto min-w-full">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={dets.createdBy.organizationlogo.url}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md font-semibold">{dets.profile}</p>
          <p className="text-small text-default-500">{dets.createdBy.organizationname}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <div>
          <h1 className=" font-semibold">{dets.city}</h1>
        </div>
        <div className=" mt-6 flex gap-4">
          <div className="text-[13px] opacity-80 font-medium">
            <h1>Salary(Annual)</h1>
            <h1>${dets.salaryFrom} to ${dets.salaryTo}</h1>
          </div>

        

          <div className="text-[13px] opacity-80 font-medium">
            <h1>Expirence</h1>
            <h1>{dets.expirence}</h1>
          </div>

        </div>
      </CardBody>
      <Divider/>
      <CardFooter className=" flex items-end justify-end">
        
         <Button onClick={handleViewDets} variant="bordered" color="primary">View details</Button>
        
       
      </CardFooter>
    </Card>
  );
}
