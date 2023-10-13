import axios from '../../utils/axios'
import React, { useEffect, useState } from 'react'
import {Link}  from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
// import '../components/Navigationbtn.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function LatestJobs() {
    const [jobs, setJobs] = useState([])
    const [windowWidth,setWindowWidth]=useState(768)

    useEffect(() => {
        axios.get("/user/student/latestjob")
            .then((response) => {
                console.log(response)
                setJobs(response.data.job)
            }).catch((err) => {
                console.log(err)
            })
    }, [])
    useEffect(()=>{
        window.addEventListener('resize',(e)=>{
            // console.log(e.target.outerWidth)
            setWindowWidth(e.target.outerWidth)
        })
    },[])
  
    return (
        <div className='w-[100%] min-h-[50vh] md:p-10 mt-4 '>
        <div className=' text-center'>
            <h1 className=' text-3xl font-semibold'>Latest  <span className=' text-yellow-500'>Jobs</span> </h1>
        </div>
        <div className=' flex gap-4 p-10 '>
            {/* {internships.map((internship,index)=>{
            return <LatestInternshipsCard key={index} dets={internship} />
        })

        } */}
            {windowWidth>768 ?
            (
                <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                spaceBetween={80}
                slidesPerView={3}
                // navigation={true}   
                // scrollbar={true}
                pagination={{ clickable: true }}
                className="mySwiper  md:p-10 w-full md:w-10/12 "
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >   
                 {jobs.map((item, i) => (
        <SwiperSlide key={i}>
            <div className="slider-single w-[300px] h-[305.4px] space-x-4 p-4 rounded-lg border bg-white">
               <div className='heading  border-b px-3 justify-between flex  items-center'>
                <div>

                    <h1 className='  text-[14px] font-semibold'>{item.profile}</h1>
                    <h1 className=' font-semibold opacity-50'>{item.createdBy.organizationname}</h1>
                </div>
                <div className='w-[40px] h-[40px] overflow-hidden rounded-[100%] mr-4'>
                    <img src={item.createdBy.organizationlogo.url} className='w-[100%] h-[100%] object-cover' alt="" />
                </div>
               </div>
               <div>
                <div className='mt-4 h-[190px] '>
                    <h1 className=' opacity-60 text-sm'>{item.jobType}</h1>
                    <h1 className=' opacity-60 text-sm'>{item.salaryFrom}-{item.salaryTo}</h1>
                    <h1 className=' opacity-60 text-sm'>{item.expirence}</h1>
                </div>
               </div>
               <div>
                <Link className='  text-[13px]'>View Details</Link>
               </div>
            </div>
        </SwiperSlide>
    
    ))}
            </Swiper>
            )
            :
            (
                <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                spaceBetween={80}
                slidesPerView={1}
                // navigation={true}   
                // scrollbar={true}
                pagination={{ clickable: true }}
                className="mySwiper  md:p-10 w-full md:w-10/12"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >   
                 {jobs.map((item, i) => (
        <SwiperSlide key={i}>
            <div className="slider-single w-[300px] h-[305.4px] space-x-4 p-4 rounded-lg border bg-white">
               <div className='heading  border-b px-3 justify-between flex  items-center'>
                <div>

                    <h1 className='  text-[14px] font-semibold'>{item.profile}</h1>
                    <h1 className=' font-semibold opacity-50'>{item.createdBy.organizationname}</h1>
                </div>
                <div className='w-[40px] h-[40px] overflow-hidden rounded-[100%] mr-4'>
                    <img src={item.createdBy.organizationlogo.url} className='w-[100%] h-[100%] object-cover' alt="" />
                </div>
               </div>
               <div>
                <div className='mt-4 h-[190px] '>
                    <h1 className=' opacity-60 text-sm'>{item.jobType}</h1>
                    <h1 className=' opacity-60 text-sm'>{item.salaryFrom}-{item.salaryTo}</h1>
                    <h1 className=' opacity-60 text-sm'>{item.expirence}</h1>
                </div>
               </div>
               <div>
                <Link className='  text-[13px]'>View Details</Link>
               </div>
            </div>
        </SwiperSlide>
    
    ))}
            </Swiper>
            )

            }
         





        </div>
    </div>
    )
}

export default LatestJobs