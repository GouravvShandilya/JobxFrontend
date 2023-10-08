import { Input, Select, SelectItem } from '@nextui-org/react'
import axios from '../../utils/axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

function CreateInternship() {
  const stipendStatus = ["Fixed", "Negotiable", "Performance based", "Unpaid"]
  const [selectedOption, setSelectedOption] = useState('');

  const [formData, setFormData] = useState({
    profile: "",
    skills: "",
    intershipType: "",
    openings: "",
    city:"",
    from: "",
    to: "",
    duration: "",
    responsibility: "",
    stipend: {
      status: "",
      amount: ""
    },
    perks: "",
    assesments: ""
  })
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    setFormData((prev) => ({
      ...prev,
      intershipType: event.target.value
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

  const handleStatusChange = (e) => {
    const { value } = e.target
    console.log(value)
    if (value === "0") {
      setFormData((prev) => {
        return {
          ...prev,
          stipend: {
            status: "Fixed",
            amount: prev.stipend.amount
          }
        }
      })
    }
    if (value === "1") {
      setFormData((prev) => {
        return {
          ...prev,
          stipend: {
            status: "Negotiable",
            amount: prev.stipend.amount
          }
        }
      })
    }
    if (value === "2") {
      setFormData((prev) => {
        return {
          ...prev,
          stipend: {
            status: "Performance based",
            amount: prev.stipend.amount
          }
        }
      })
    }
    if (value === "3") {
      setFormData((prev) => {
        return {
          ...prev,
          stipend: {
            status: "Unpaid",
            amount: prev.stipend.amount
          }
        }
      })
    }

  }
  const handleAmountChange = (e) => {
    const { value } = e.target
    setFormData((prev) => ({
      ...prev,
      stipend: {
        status: prev.stipend.status,
        amount: value
      }
    }))
  }
  console.log(formData)





  const handleSubmit = () => {
    if (
      !formData.profile ||
      !formData.skills ||
      !formData.intershipType ||
      !formData.openings ||
      !formData.city ||
      !formData.from ||
      !formData.to ||
      !formData.duration ||
      !formData.responsibility ||
      !formData.stipend.status ||
      !formData.stipend.amount ||
      !formData.perks ||
      !formData.assesments
    ) {
      
      // console.error("All fields are required.");
      toast.error("All fields are required.")
      return;
    }



      axios.post("/employe/intership/create",formData)
      .then((response)=>{
        console.log(response)
        toast.success(response.data.msg)
      })
      .catch((err)=>{
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
          <h1>InterShip Profile</h1>
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
          <h1>Intership Type</h1>

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
            placeholder='city'
            label="city"
            onChange={handleChange}
            name='city'
          />
        </div>

        <div>
          <h1>Internship Duraiton</h1>
          <div className='flex space-x-4'>
            <Input
              type='date'
              autoFocus
              variant='underlined'
              onChange={handleChange}
              name='from'
            />
            <Input
              type='date'
              autoFocus
              variant='underlined'
              onChange={handleChange}
              name='to'
            />
          </div>
        </div>

        <div>
          <h1>Duration month</h1>

          <Input
            autoFocus
            variant='underlined'
            placeholder='duration month'
            label="duration"
            onChange={handleChange}
            name='duration'
          />
        </div>


        <div>
          <h1>responsibility</h1>

          <Input
            autoFocus
            variant='underlined'
            placeholder='responsibility'
            label="responsibility"
            onChange={handleChange}
            name='responsibility'
          />
        </div>

        <div>
          <h1>Stipend</h1>

          <Select
            items={stipendStatus}
            label="Stipend Status"
            placeholder="Select Status"
            className="max-w-xs"
            onChange={handleStatusChange}
          >
            {stipendStatus.map((status, index) => {
              return <SelectItem key={index} value={status}>{status}</SelectItem>
            })

            }

          </Select>

          <div>
            <Input
              autoFocus
              variant='underlined'
              placeholder='amount'
              label="amount"
              onChange={handleAmountChange}
              name='amount'
            />
          </div>
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

        <button onClick={handleSubmit} className='w-6/12 bg-[#008BDC] mx-auto p-2 text-white'>Create Internship</button>
      </div>


    </div>
  )
}

export default CreateInternship