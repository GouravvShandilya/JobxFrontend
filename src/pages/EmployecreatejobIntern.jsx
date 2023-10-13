import React, { useState } from 'react'
import Nav from "../components/Nav"
import CreateInternship from '../components/CreateInternship';
import CreateJob from '../components/CreateJob';
function EmployecreatejobIntern() {
    // Initialize state to keep track of the selected radio button
    const [selectedOption, setSelectedOption] = useState('Intership');

    // Define a function to handle radio button change
    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div className=' w-[100%] min-h-[100vh] '>
            <Nav />

            <div className='md:w-6/12 p-4 mt-6 mx-auto min-h-[110%] border bg-white mb-4'>
                <div>
                    <div className='w-full'>
                        <h1>Opportunity Type</h1>
                        <div className=' flex gap-4 w-full mt-4  border rounded-md p-2 '>
                            <div className=' space-x-2'>
                                <input
                                    type="radio"
                                    id="Intership"
                                    value="Intership"
                                    checked={selectedOption === 'Intership'}
                                    onChange={handleRadioChange}
                                />
                                <label htmlFor="Intership">Intership</label>
                            </div>
                            <div className=' space-x-2'>
                                <input
                                    type="radio"
                                    id="job"
                                    value="job"
                                    checked={selectedOption === 'job'}
                                    onChange={handleRadioChange}
                                />
                                <label htmlFor="job">job</label>
                            </div>
                        </div>
                    </div>

                    <div>

                   
                    {selectedOption === 'Intership' &&

                        <CreateInternship/>


                    }
                    {selectedOption === 'job' &&
                        <CreateJob/>

                    }
                     </div>
                </div>
            </div>

        </div>
    )
}

export default EmployecreatejobIntern