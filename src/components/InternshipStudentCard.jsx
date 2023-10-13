import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {Card, CardHeader, CardBody, CardFooter, Divider, Image, Button} from "@nextui-org/react";

export default function InternshipStudentCard({dets}) {
  const navigate=useNavigate()
  // console.log(dets)

  const handleViewDets=()=>{
    navigate(`/student/internship/details/${dets._id}`)
  }


  return (
    <Card className=" border rounded-sm md:min-w-[470px] md:mx-auto min-w-full">
      <CardHeader className="flex gap-3">
        <div className=" w-[40px] h-[40px] overflow-hidden rounded-[100px]">
            <img  
        src={dets.createdBy.organizationlogo.url}
            className=" w-[100%] h-[100%] object-cover"
            alt="ads" />
        </div>
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
            <h1>START DATE</h1>
            <h1>{dets.from}</h1>
          </div>

          <div className="text-[13px] opacity-80 font-medium">
            <h1>Duration</h1>
            <h1>{dets.duration} Month</h1>
          </div>

          <div className="text-[13px] opacity-80 font-medium">
            <h1>START DATE</h1>
            <h1>{dets.from}</h1>
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
