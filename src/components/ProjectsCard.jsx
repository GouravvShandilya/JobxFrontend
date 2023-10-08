import React,{useState} from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import axios from '../../utils/axios';
import UpdateJob from './UpdateJob';
import UpdateIntership from './UpdateIntership';
import { Link } from 'react-router-dom';
import UpdateProjects from './UpdateProjects';
function ProjectsCard({details,fetchUserData}) {
    console.log(details)
    const [formData,setFormData]=useState({
        id:details.id,
        Title:details.Title,
        StartMonth:details.StartMonth,
        EndMonth:details.EndMonth,
        Description:details.Description,
        ProjectLink:details.ProjectLink,
    })
    console.log(formData)
    const handleDelete = async () => {
        axios.post("/resume/delete-project", formData)
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
                <h1 className=' font-semibold'>{details?.Title}</h1>
                <h1 className=' text-sm opacity-75'>{details?.StartMonth}</h1>
                <h1 className=' text-sm opacity-75'>{details?.EndMonth}</h1>
                <h1 className=' text-sm opacity-75'>{details?.Description}</h1>
                <Link  to={details?.ProjectLink}>{details?.ProjectLink}</Link>
                
                
            </div>

        <div className='flex gap-4'>
        
        {/* <UpdateIntership formData={formData} setFormData={setFormData} fetchUserData={fetchUserData}/>
         */}
         <UpdateProjects  formData={formData} setFormData={setFormData} fetchUserData={fetchUserData}/>
                        <RiDeleteBin5Line onClick={handleDelete} fetchUserData={fetchUserData} />
        </div>

       

</div>
        


</div>
  )
}

export default ProjectsCard