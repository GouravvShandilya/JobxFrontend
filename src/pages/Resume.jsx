import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import axios from '../../utils/axios';
import Loading from '../components/Loading';
import BasicInfoModal from '../components/BasicInfoModal';
import EducationCard from '../components/EducationCard';
import AddEduModal from '../components/AddEduModal';
import JobCard from '../components/JobCard';
import AddJob from '../components/AddJob';
import IntershipCard from '../components/IntershipCard';
import AddIntership from '../components/AddIntership';
import ResponsibilityCard from '../components/ResponsibilityCard';
import AddResponsibility from '../components/AddResponsibility';
import AddProjects from '../components/AddProjects';
import ProjectsCard from '../components/ProjectsCard';
import SkillsCard from '../components/SkillsCard';
import AddSkills from '../components/AddSkills';

function Resume() {
  const [loading, setLoading] = useState(false);
  const [resumeData, setResumeData] = useState(null);
  const [userData, setUserData] = useState({});
  const [formData, setFormData] = useState({
    firstName: '',
  });
  console.log(userData)


  function handleChange(e) {
    const { value, name } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post('/user/student/update', formData)
      .then((res) => {
        // After successfully updating the data in the database, you can fetch the updated user data.
        fetchUserData();

        console.log(res);
      })
      .catch((err) => console.log(err));
    console.log(formData);
  }

  // Fetch updated user data from the server
  const fetchUserData = async () => {
    try {
      const user = await axios.get('/user/student');
      console.log(user.data.student);
      setUserData(user.data.student);
    } catch (error) {
      console.log(error);
    }
  };




  const fetchResumeDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/resume');
      // Fetch the user data initially
      fetchUserData();
      console.log(response.data.resume);
      setResumeData(response?.data?.resume);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchResumeDetails();
  }, []);




  return (
    <div>
      <Nav />

      {loading ? (
        <Loading />
      ) : (
        <div className="md:w-8/12 min-h-[100vh] mt-[3vw] p-4 mx-auto">
          <h1 className="text-2xl font-semibold text-center">Resume</h1>

          <div className="md:w-8/12  px-10 pt-10 mt-4 mx-auto min-h-[100vh] border rounded-md ">
            <div className="border-b-1 pb-2">
              <div className="flex space-x-3 items-center">
                <h1 className="text-3xl font-semibold">{`${userData?.firstName} ${userData?.lastName}`}</h1>
                <BasicInfoModal fetchUserData={fetchUserData} fetchResumeDetails={fetchResumeDetails} />
              </div>
              <p>{userData?.email}</p>
              <p>{userData?.contact}</p>
              <p>{userData.city}</p>
            </div>
            <div className='border-b-1 pb-2  min-h-[200px]'>

              <div className=" flex mt-3">

                <div className=' w-[30%] h-[200px]  p-3'>
                  <p>Education</p>
                </div>
                <div className=' w-[70%] min-h-[300px]'>
                  {
                    userData?.resume?.education?.length < 1 ?
                      (
                        <p className='w-[100%] text-center m-4'>No data</p>

                      )
                      :
                      (
                        userData?.resume?.education?.map((det, index) => {
                          return <EducationCard key={index} fetchUserData={fetchUserData} details={det} />
                        })
                      )


                  }
                </div>




              </div>
              <div className=' text-blue-600 flex flex-col space-y-4 mt-3 text-center'>
                <AddEduModal fetchUserData={fetchUserData} />

              </div>
            </div>

            <div className='border-b-1 pb-2  min-h-[100px]' >
              <div className=" flex mt-3">

                <div className=' w-[30%] h-[200px]  p-3'>
                  <p>Jobs</p>
                </div>
                <div className=' w-[70%] min-h-[100px]'>
                {
                    userData?.resume?.jobs?.length < 1 ?
                      (
                        <p className='w-[100%] text-center m-4'>No data</p>

                      )
                      :
                      (
                        userData?.resume?.jobs?.map((det, index) => {
                          return <JobCard key={index} fetchUserData={fetchUserData} details={det} />
                        })
                      )


                  }
                </div>
               



              </div>
              <div className=' text-blue-600 flex flex-col space-y-4 mt-3 text-center'>
                <AddJob fetchUserData={fetchUserData}/>

              </div>  
            </div>

            <div className='border-b-1 pb-2  min-h-[100px]' >
              <div className=" flex mt-3">

                <div className=' w-[30%] h-[200px]  p-3'>
                  <p>Interships</p>
                </div>
                <div className=' w-[70%] min-h-[100px]'>
                {
                    userData?.resume?.interships?.length < 1 ?
                      (
                        <p className='w-[100%] text-center m-4'>No data</p>

                      )
                      :
                      (
                        userData?.resume?.interships?.map((det, index) => {
                          return <IntershipCard key={index} fetchUserData={fetchUserData} details={det} />
                        })
                      )


                  }
                </div>
               



              </div>
              <div className=' text-blue-600 flex flex-col space-y-4 mt-3 text-center'>
                <AddIntership fetchUserData={fetchUserData}/>

              </div>  
            </div>







            <div className='border-b-1 pb-2  min-h-[100px]' >
              <div className=" flex mt-3">

                <div className=' w-[30%] h-[200px]  p-3'>
                  <p>Role of responsibility</p>
                </div>
                <div className=' w-[70%] min-h-[100px]'>
                {
                    userData?.resume?.responsibilities?.length < 1 ?
                      (
                        <p className='w-[100%] text-center m-4'>No data</p>

                      )
                      :
                      (
                        userData?.resume?.responsibilities?.map((det, index) => {
                          return <ResponsibilityCard  key={index} fetchUserData={fetchUserData} details={det} />
                        })
                      )


                  }
                </div>
               



              </div>
              <div className=' text-blue-600 flex flex-col space-y-4 mt-3 text-center'>
               
                <AddResponsibility  fetchUserData={fetchUserData}/>
              </div>  
            </div>





            <div className='border-b-1 pb-2  min-h-[100px]' >
              <div className=" flex mt-3">

                <div className=' w-[30%] h-[200px]  p-3'>
                  <p>ACADEMICS/  <br /> PERSONAL PROJECTS</p>
                </div>
                <div className=' w-[70%] min-h-[100px]'>
                {
                    userData?.resume?.projects?.length < 1 ?
                      (
                        <p className='w-[100%] text-center m-4'>No data</p>

                      )
                      :
                      (
                        userData?.resume?.projects?.map((det, index) => {
                          return <ProjectsCard  key={index} fetchUserData={fetchUserData} details={det} />
                        })
                      )


                  }
                </div>
               



              </div>
              <div className=' text-blue-600 flex flex-col space-y-4 mt-3 text-center'>
               
                <AddProjects  fetchUserData={fetchUserData}/>
              </div>  
            </div>



            <div className='border-b-1 pb-2  min-h-[100px]' >
              <div className=" flex mt-3">

                <div className=' w-[30%] h-[200px]  p-3'>
                  <p>Skills</p>
                </div>
                <div className=' w-[70%] min-h-[100px]'>
                {
                    userData?.resume?.skills?.length < 1 ?
                      (
                        <p className='w-[100%] text-center m-4'>No data</p>

                      )
                      :
                      (
                        userData?.resume?.skills?.map((det, index) => {
                          return <SkillsCard  key={index} fetchUserData={fetchUserData} details={det} />
                        })
                      )


                  }
                </div>
               



              </div>
              <div className=' text-blue-600 flex flex-col space-y-4 mt-3 text-center'>
               
                <AddSkills  fetchUserData={fetchUserData}/>
              </div>  
            </div>




          </div>



        </div>
      )}
    </div>
  );
}

export default Resume;
