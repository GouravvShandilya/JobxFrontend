import React,{useState} from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import axios from '../../utils/axios';
import UpdateJob from './UpdateJob';
import UpdateIntership from './UpdateIntership';
import UpdateResponsibility from './UpdateResponsibility';
function IntershipCard({details,fetchUserData}) {
    console.log(details)
    const [formData,setFormData]=useState({
        id:details.id,
        Description:details.Description
    })
    console.log(formData)
    const handleDelete = async () => {
        axios.post("/resume/delete-responsibility", formData)
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
                
                <h1 className=' text-sm opacity-75'>{details?.Description}</h1>
                
            </div>

        <div  className='flex  gap-4'>
        
        <UpdateResponsibility formData={formData} setFormData={setFormData} fetchUserData={fetchUserData}/>
                        <RiDeleteBin5Line onClick={handleDelete} fetchUserData={fetchUserData} />
        </div>

       

</div>
        


</div>
  )
}

export default IntershipCard