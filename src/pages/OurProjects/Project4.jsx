
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import img1 from '../../Assets/OurProjects/p4/download (7).png'
import img2 from '../../Assets/OurProjects/p4/2140973.png'
import img3 from '../../Assets/OurProjects/p4/xOYzBTLDGxe6MrhF.png'
import img4 from '../../Assets/OurProjects/p4/444.jpeg'
import img5 from '../../Assets/OurProjects/p4/1642022564784986900_.png'
import img6 from '../../Assets/OurProjects/p4/1bf4640e-ac35-4866-8.png'
import img7 from '../../Assets/OurProjects/p4/download (2) (1).png'
import img8 from '../../Assets/OurProjects/p4/333.jpeg'
import img9 from '../../Assets/OurProjects/p4/Special_Security_Uni.png'
import arrow from '../../Assets/images/Path 1039.png'

const Project4 = () => {
    const navigate = useNavigate();
    const { lang } = useSelector((x) => x.languageData);

  return (
    <div>
    {lang==='ar'?
   <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
  <div className='container-fluid d-flex justify-content-between'>
  <img  onClick={()=>navigate('/Project5')} src={arrow} className='ms-5' style={{width:'40px',height:'40px'}} alt=''/>
  
  <h3 className='text-white  text-end'>{"مشاريعنا"}</h3>
  </div>

 
  
  </div>:
  <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
  <div className='container-fluid d-flex justify-content-between'>
  <h3 className='text-white  text-start'>{"Our Projects"}</h3>
  <img src={arrow} onClick={()=>navigate('/Project5')} className='me-5' style={{width:'40px',height:'40px'}} alt=''/>
  </div>

 
  
  </div>}

  {lang==='ar'?
  <h5 className='text-end me-3 mt-4' style={{color:'#28447C'}}>  قطاع المراكز التجارية والحكومية </h5>
  :
  <h5 className='text-start ms-3 mt-4' style={{color:'#28447C'}}>The Commercial and Governmental Centers Sector</h5>

  
  }
  <div className='container mb-5 '>
  <div className='row gy-3   mb-5 align-items-center'>



    <div className='col-md-4 text-center align-items-center'>
        <img className='w-75 m-auto ' src={img1} alt=''/>
    </div>
    <div className='col-md-4 text-center '>
        <img className='w-75  ' src={img2} alt=''/>
    </div>

    <div className='col-md-4 text-center align-items-center'>
        <img className='w-75 m-auto ' src={img3} alt=''/>
    </div>
    <div className='col-md-4 text-center '>
        <img className='w-75  ' src={img4} alt=''/>
    </div>

    <div className='col-md-4 text-center align-items-center'>
        <img className='w-75 m-auto ' src={img5} alt=''/>
    </div>
    <div className='col-md-4 text-center '>
        <img className='w-75  ' src={img6} alt=''/>
    </div>

    <div className='col-md-4 text-center align-items-center'>
        <img className='w-50 m-auto ' src={img7} alt=''/>
    </div>
    <div className='col-md-4 text-center '>
        <img className='w-75  ' src={img8} alt=''/>
    </div>

    <div className='col-md-4 text-center align-items-center'>
        <img className='w-50 ' src={img9} alt=''/>
    </div>
   



  </div>

  </div>


</div>
  )
}

export default Project4
