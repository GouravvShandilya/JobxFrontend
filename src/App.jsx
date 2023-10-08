import React, { useContext, useEffect, useState } from 'react'
import Nav from './components/Nav' 
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import StudentRegister from './pages/StudentRegister'
import Resume from './pages/Resume'
import ForgetPassword from './pages/ForgetPassword'
import ForgetPasswordForm from './pages/ForgetPasswordForm'
import ChangePasswordPage from './pages/ChangePasswordPage'
import DeleteAccountPage from './pages/DeleteAccountPage'
import EmployeHomePage from './pages/EmployeHomePage'
import EmployeProtected from './components/EmployeProtected'
import EmployeChangePasswordPage from './pages/EmployeChangePasswordPage'
import EmployeDeleteAccPage from './pages/EmployeDeleteAccPage'
import EmployeEditProfile from './pages/EmployeEditProfile'
import EmployecreatejobIntern from './pages/EmployecreatejobIntern'
import StudentInternshipPage from './pages/StudentInternshipPage'
import StudentJobPage from './pages/StudentJobPage'
import InternshipDets from './pages/InternshipDets'
import JobDets from './pages/JobDets'
import { User } from './context/UserContext'
import StudentProtected from './components/StudentProtected'
import StudentMyApplication from './pages/StudentMyApplication'
import EmployeeViewApplication from './pages/EmployeeViewApplication'
import EmployeRegisterPage from './pages/EmployeRegisterPage'
import ViewResumePage from './components/ViewResumePage'
import EmployeDashboard from './pages/EmployeDashboard'
import ForgetPasswordForEmployee from './pages/ForgetPasswordForEmployee'
import EmployeForgetPassForm from './pages/EmployeForgetPassForm'

function App() {
  const [isloggedIn,setIsloggedIn]=useState(false)
  const [role,setRole]=useState("")
  const {userData,setData}=useContext(User)

  
  console.log(role)
  useEffect(()=>{
 if(sessionStorage.length>0){
      setIsloggedIn(true)
    }else{
      setIsloggedIn(false)
    }
    setRole(JSON.parse(sessionStorage.getItem("role")));
  },[])
   
  return (
    <div className=' relative'>
      
      
      <Routes>

 {/* <----------------------------Students ROUTES-----------------------> */}

        <Route path='/' element={<Home/>}/>
        <Route path='/register/student' element={<StudentRegister/>}/>
        <Route path='/resume/student' element={<StudentProtected role={role} isloggedIn={isloggedIn}><Resume/></StudentProtected>}/>
        <Route path='/forget/password' element={<ForgetPassword/>}/>
        <Route path='/student/forget-link/:id' element={<ForgetPasswordForm/>}/>
        <Route path='/student/changepassword' element={<StudentProtected role={role} isloggedIn={isloggedIn}><ChangePasswordPage/></StudentProtected>}/>
        <Route path='/student/deleteaccount' element={<StudentProtected role={role} isloggedIn={isloggedIn}><DeleteAccountPage/></StudentProtected>}/>
        <Route path='/student/internships' element={<StudentInternshipPage/>}/>
        <Route path='/student/jobs' element={<StudentJobPage/>}/>
        <Route path='/student/internship/details/:internshipid' element={<InternshipDets/>}/>
        <Route path='/student/job/details/:jobid' element={<JobDets/>}/>
        <Route path='/student/my-application' element={<StudentProtected role={role} isloggedIn={isloggedIn}><StudentMyApplication/></StudentProtected>}/>



        {/* <----------------------------EMPLOYEE ROUTES-----------------------> */}
        <Route path='/employe/register' element={<EmployeRegisterPage/>}/>
        <Route path='/employe/forget/password' element={<ForgetPasswordForEmployee/>}/>
        <Route path='/employe/forget-link/:id' element={<EmployeForgetPassForm/>}/>

        <Route path='/employe/homepage' element={<EmployeProtected role={role} isloggedIn={isloggedIn}><EmployeHomePage/></EmployeProtected>}/>
        <Route path='/employe/changepassword' element={<EmployeProtected role={role} isloggedIn={isloggedIn}><EmployeChangePasswordPage/></EmployeProtected>}/>
        <Route path='/employe/deleteaccount' element={<EmployeProtected role={role} isloggedIn={isloggedIn}><EmployeDeleteAccPage/></EmployeProtected>}/>
        <Route path='/employe/edit-profile' element={<EmployeProtected role={role} isloggedIn={isloggedIn}><EmployeEditProfile/></EmployeProtected>}/>
        <Route path='/empolye/create' element={<EmployeProtected role={role} isloggedIn={isloggedIn}><EmployecreatejobIntern/></EmployeProtected>}/>
        <Route path='/employe/view-application' element={<EmployeProtected role={role} isloggedIn={isloggedIn}><EmployeeViewApplication/></EmployeProtected>}/>
        <Route path='/viewresume/:studentid' element={<EmployeProtected role={role} isloggedIn={isloggedIn}><ViewResumePage/></EmployeProtected>}/>
        <Route path='/employe/dashboard' element={<EmployeProtected role={role} isloggedIn={isloggedIn}><EmployeDashboard/></EmployeProtected>}/>













      </Routes>
    </div>
  )
}

export default App