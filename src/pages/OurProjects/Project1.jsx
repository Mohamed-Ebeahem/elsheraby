import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import arrow from '../../Assets/images/Path 1039.png'
import img1 from '../../Assets/OurProjects/p1/1200px-Anb_bank_logo.png'
import img2 from '../../Assets/OurProjects/p1/1280px-Bank_Albilad_.png'
import img3 from '../../Assets/OurProjects/p1/222.jpeg'

const Project1 = () => {
    const navigate = useNavigate();
    const { lang } = useSelector((x) => x.languageData);

  return (
    <div style={{height:"100vh"}}>
        {lang==='ar'?
       <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid d-flex justify-content-between'>
      <img  onClick={()=>navigate('/Project2')} src={arrow} className='ms-5' style={{width:'40px',height:'40px'}} alt=''/>
      
      <h3 className='text-white  text-end'>{"مشاريعنا"}</h3>
      </div>

     
      
      </div>:
      <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid d-flex justify-content-between'>
      <h3 className='text-white  text-start'>{"Our Projects"}</h3>
      <img src={arrow} onClick={()=>navigate('/Project2')} className='me-5' style={{width:'40px',height:'40px'}} alt=''/>
      </div>

     
      
      </div>}

      {lang==='ar'?
      <h5 className='text-end me-3 mt-4' style={{color:'#28447C'}}>قطاع البنوك والمصارف</h5>
      :
      <h5 className='text-start ms-3 mt-4' style={{color:'#28447C'}}>The Banking and Financial Sector</h5>

      
      }
      <div className='container mb-5'>
      <div className='row gy-3 align-items-center'>
        <div className='col-md-4 '>
            <img className='w-100 p-5' src={img1} alt=''/>
        </div>
        <div className='col-md-4 '>
            <img className='w-100 p-5' src={img2} alt=''/>
        </div>
        <div className='col-md-4 mb-5'>
            <img className='w-100 p-5' src={img3} alt=''/>
        </div>
      </div>

      </div>


    </div>
  )
}

export default Project1
