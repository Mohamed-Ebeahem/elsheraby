import React from 'react'
import arrow from '../../Assets/images/Path 1039.png'
import img1 from '../../Assets/OurProjects/p2/capt1065.png'
import img2 from '../../Assets/OurProjects/p2/1611734238_ratio.png'
import img3 from '../../Assets/OurProjects/p2/sudfah-logo.png'
import img4 from '../../Assets/OurProjects/p2/800_filter_nobg_6342.png'
import img5 from '../../Assets/OurProjects/p2/6a4c9b7112267f1458cf.png'
import img6 from '../../Assets/OurProjects/p2/logo (2).png'
import img7 from '../../Assets/OurProjects/p2/423290041.png'
import img8 from '../../Assets/OurProjects/p2/download (4).png'
import img9 from '../../Assets/OurProjects/p2/log.png'
import img10 from '../../Assets/OurProjects/p2/bVwZ3TXW_400x400.png'
import img11 from '../../Assets/OurProjects/p2/Web capture_30-11-20.png'
import img12 from '../../Assets/OurProjects/p2/download (6).png'
import img13 from '../../Assets/OurProjects/p2/download (5).png'
import img14 from '../../Assets/OurProjects/p2/DX4Fd3fXUAAZGuG.jpg.png'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Project2 = () => {
    const navigate = useNavigate();
    const { lang } = useSelector((x) => x.languageData);

  return (
    <div>
    {lang==='ar'?
   <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
  <div className='container-fluid d-flex justify-content-between'>
  <img  onClick={()=>navigate('/Project3')} src={arrow} className='ms-5' style={{width:'40px',height:'40px'}} alt=''/>
  
  <h3 className='text-white  text-end'>{"مشاريعنا"}</h3>
  </div>

 
  
  </div>:
  <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
  <div className='container-fluid d-flex justify-content-between'>
  <h3 className='text-white  text-start'>{"Our Projects"}</h3>
  <img src={arrow} onClick={()=>navigate('/Project3')} className='me-5' style={{width:'40px',height:'40px'}} alt=''/>
  </div>

 
  
  </div>}

  {lang==='ar'?
  <h5 className='text-end me-3 mt-4' style={{color:'#28447C'}}>قطاع الفنادق والمطاعم والمقاهي</h5>
  :
  <h5 className='text-start ms-3 mt-4' style={{color:'#28447C'}}>The Hotels, Restaurants, and Cafés Sector</h5>

  
  }
  <div className='container mb-5'>
  <div className='row gy-3 align-items-center'>
    <div className='col-md-4 align-items-center'>
        <img className='w-75 m-auto ' src={img1} alt=''/>
    </div>
    <div className='col-md-4 text-center '>
        <img className='w-75  ' src={img2} alt=''/>
    </div>
    <div className='col-md-4 text-center'>
        <img className='w-75  ' src={img3} alt=''/>
    </div>
    <div className='col-md-3 text-center'>
        <img className='w-75   ' src={img4} alt=''/>
    </div>
    <div className='col-md-3 text-center'>
        <img className='w-75   ' src={img5} alt=''/>
    </div>
    <div className='col-md-3 text-center'>
        <img className='w-75   ' src={img6} alt=''/>
    </div>
    <div className='col-md-3 text-center'>
        <img className='w-75   ' src={img7} alt=''/>
    </div>


    <div className='col-md-3 p-4 ms-4 text-center'>
        <img className='w-100   ' src={img8} alt=''/>
    </div>
    <div className='col-md-2 text-center '>
        <img className='w-100   ' src={img9} alt=''/>
    </div>

    <div className='col-md-2 text-center '>
        <img className='w-100   ' src={img10} alt=''/>
    </div>
    <div className='col-md-2 text-center '>
        <img className='w-100   ' src={img11} alt=''/>
    </div>

    <div className='col-md-2 text-center '>
        <img className='w-100   ' src={img12} alt=''/>
    </div>



    <div className='col-md-6 text-center '>
        <img className='w-75   ' src={img13} alt=''/>
    </div>
    <div className='col-md-6 text-center '>
        <img className='w-75   ' src={img14} alt=''/>
    </div>
  </div>

  </div>


</div>
  )
}

export default Project2
