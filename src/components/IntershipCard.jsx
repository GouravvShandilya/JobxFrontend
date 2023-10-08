import React,{useState} from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import axios from '../../utils/axios';
import UpdateJob from './UpdateJob';
import UpdateIntership from './UpdateIntership';
function IntershipCard({details,fetchUserData}) {
    console.log(details)
    const [formData,setFormData]=useState({
        id:details.id,
        Designation:details.Designation,
        Profile:details.Profile,
        Organization:details.Organization,
        Location:details.Location,
        StartDate:details.StartDate,
        EndDate:details.EndDate,
        Description:details.Description
    })
    console.log(formData)
    const handleDelete = async () => {
        axios.post("/resume/delete-internship", formData)
            .then((res) => {
                console.log(res)
                fetchUserData()
            })
            .catch((err) => console.log(err))
    }


  return (
    <div className=' w-full   flex justify-between p-4'>
    <div className=' flex justify-between'>


      
            <div>
                <h1 className=' font-semibold'>{details?.Designation}</h1>
                <h1 className=' text-sm opacity-75'>{details?.Profile}</h1>
                <h1 className=' text-sm opacity-75'>{details?.Organization}</h1>
                <h1 className=' text-sm opacity-75'>{details?.Location}</h1>
                <h1 className=' text-sm opacity-75'>{details?.StartDate}</h1>
                <h1 className=' text-sm opacity-75'>{details?.EndDate}</h1>
                <h1 className=' text-sm opacity-75'>{details?.Description}</h1>
                
            </div>

        <div  className='flex gap-4'>
        
        <UpdateIntership formData={formData} setFormData={setFormData} fetchUserData={fetchUserData}/>
                        <RiDeleteBin5Line onClick={handleDelete} fetchUserData={fetchUserData} />
        </div>

       

</div>
        


</div>
  )
}

export default IntershipCard