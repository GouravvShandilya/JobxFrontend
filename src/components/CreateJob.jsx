import { Input, Select, SelectItem, Textarea } from '@nextui-org/react'
import axios from '../../utils/axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

function CreateJob() {
  const stipendStatus = ["Fixed", "Negotiable", "Performance based", "Unpaid"]
  const [selectedOption, setSelectedOption] = useState('');

  const [formData, setFormData] = useState({
    profile: "",
    skills: "",
    jobType: "",
    openings: "",
    city:"",
    description: "",
    preferences: "",
    salaryFrom:"",
    salaryTo:"",
    expirence:"",
    perks: "",
    assesments: ""
  })
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    setFormData((prev) => ({
      ...prev,
      jobType: event.target.value
    }))
  };
  // console.log(formData)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  // const handleStatusChange = (e) => {
  //   const { value } = e.target
  //   console.log(value)
  //   if (value === "0") {
  //     setFormData((prev) => {
  //       return {
  //         ...prev,
  //         stipend: {
  //           status: "Fixed",
  //           amount: prev.stipend.amount
  //         }
  //       }
  //     })
  //   }
  //   if (value === "1") {
  //     setFormData((prev) => {
  //       return {
  //         ...prev,
  //         stipend: {
  //           status: "Negotiable",
  //           amount: prev.stipend.amount
  //         }
  //       }
  //     })
  //   }
  //   if (value === "2") {
  //     setFormData((prev) => {
  //       return {
  //         ...prev,
  //         stipend: {
  //           status: "Performance based",
  //           amount: prev.stipend.amount
  //         }
  //       }
  //     })
  //   }
  //   if (value === "3") {
  //     setFormData((prev) => {
  //       return {
  //         ...prev,
  //         stipend: {
  //           status: "Unpaid",
  //           amount: prev.stipend.amount
  //         }
  //       }
  //     })
  //   }

  // }

  console.log(formData)

  const handleSubmit = () => {

    if (
      !formData.profile ||
      !formData.skills ||
      !formData.jobType ||
      !formData.openings ||
      !formData.city ||
      !formData.description ||
      !formData.preferences ||
      !formData.salaryFrom ||
      !formData.salaryTo ||
      !formData.expirence ||
      !formData.perks ||
      !formData.assesments
    ) {
      
      // console.error("All fields are required.");
      toast.error("All fields are required.")
      return;
    }



    axios.post("/employe/job/create", formData)
      .then((response) => {
        console.log(response)
        toast.success(response.data.msg)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className=' p-4  mx-auto'>
      <div className=' mb-4'>
        <h1>Internship details</h1>
      </div>
      <div className=' space-y-6'>

        <div>
          <h1>Job Profile</h1>
          <Input
            autoFocus
            variant='underlined'
            placeholder='Intership dets'
            label="IntershipProfile"
            onChange={handleChange}
            name='profile'
          />
        </div>

        <div>
          <h1>Job Type</h1>

          <div className='flex space-x-5'>
            <div className=' space-x-2'>
              <input
                type="radio"
                id="in-office/Hybird"
                value="in-office/Hybird"
                checked={selectedOption === 'in-office/Hybird'}
                onChange={handleRadioChange}
              />
              <label htmlFor="in-office/Hybird">in-office/Hybird</label>
            </div>
            <div className=' space-x-2'>
              <input
                type="radio"
                id="Remote"
                value="Remote"
                checked={selectedOption === 'Remote'}
                onChange={handleRadioChange}
              />
              <label htmlFor="Remote">Remote</label>
            </div>
          </div>

        </div>
        <div>
          <h1 className=' mb-2'>Job Description</h1>

          <Textarea
            autoFocus
            
            placeholder='description'
            label="description"
            onChange={handleChange}
            name='description'

          />

          
        </div>




        <div>
          <h1>Skills Required</h1>

          <Input
            autoFocus
            variant='underlined'
            placeholder='skills'
            label="skills"
            onChange={handleChange}
            name='skills'
          />
        </div>



        <div>
          <h1>Number of Opeing</h1>

          <Input
            autoFocus
            variant='underlined'
            placeholder='openings'
            label="openings"
            onChange={handleChange}
            name='openings'
          />
        </div>


        <div>
          <h1>City</h1>

          <Input
            autoFocus
            variant='underlined'
            placeholder='City'
            label="City"
            onChange={handleChange}
            name='city'
          />
        </div>




        <div>
          <h1>preferences</h1>

          <Input
            autoFocus
            variant='underlined'
            placeholder='preferences'
            label="preferences"
            onChange={handleChange}
            name='preferences'
          />
        </div>









          <h1>Salary Range</h1>
        <div className='flex  gap-10'>
          <div>
            <Input
              autoFocus
              variant='underlined'
              placeholder='From'
              label="salary"
              onChange={handleChange}
              name='salaryFrom'
            />
          </div>

          <div>
            <Input
              autoFocus
              variant='underlined'
              placeholder='To'
              label="salary"
              onChange={handleChange}
              name='salaryTo'
            />
          </div>

        </div>

        <div>
            <Input
              autoFocus
              variant='underlined'
              placeholder='expirence'
              label="expirence"
              onChange={handleChange}
              name='expirence'
            />
          </div>




        <div>
          <h1>Perks</h1>
          <Input
            autoFocus
            variant='underlined'
            placeholder='perks'
            label="perks"
            onChange={handleChange}
            name='perks'
          />
        </div>

        <div>
          <h1>assesments</h1>
          <Input
            autoFocus
            variant='underlined'
            placeholder='assesments'
            label="assesments"
            onChange={handleChange}
            name='assesments'
          />
        </div>



      </div>

      <div className='w-full mt-6  flex items-center justify-center'>

        <button onClick={handleSubmit} className='w-6/12 bg-[#008BDC] mx-auto p-2 text-white'>Create Job</button>
      </div>


    </div>
  )
}

export default CreateJob