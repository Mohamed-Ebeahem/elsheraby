import React from 'react'
import { useSelector } from 'react-redux';
import icon6 from '../../Assets/icons/icon_6-removebg-preview.png'
import imag from '../../Assets/WhatsApp Image 2024-02-21 at 00.01.57.jpeg'
const MaintenanceWork = () => {
    const { lang } = useSelector((x) => x.languageData);
  return (
    <div style={{height:''}}>
         {lang==='ar'?
       <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid '>
      
      <h3 className='text-white  text-end'>{"أعمال الصيانة"}</h3>
      </div>
      </div>:
      <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid'>
      <h3 className='text-white  text-start'>{"Maintenance Work"}</h3>
      </div>
      </div>}



{lang==='ar'?

<>
<h3 style={{color:'#003157'}} className=' my-4 fw-bold me-3 text-end'>نتميز بأعمالنا المتكاملة في الصيانة </h3>

<div className='container'>
    <div className='row gy-3 align-items-center'>
        <div className='col-md-3 mb-5'>
        <img src={imag} className='w-100' alt=''/>

        </div>
        <div className='col-md-9'>
<div className='d-flex mb-3  text-end me-4 align-items-center'>
   <h5 style={{color:'#1D479B'}}  className={`fw-bold ms-auto `}>{"الصيانة الطارئة الفورية"}</h5>
   <img 
  src={icon6} 
  style={{ width: '50px', height: '50px' }} 
  className='hoverable-icon  ms-4' 
  alt=''
/>
    </div>
    <div className='d-flex mb-3  text-end me-4 align-items-center'>
   <h5 style={{color:'#1D479B'}}  className={`fw-bold ms-auto `}>{"الصيانة الوقائية السنوية"}</h5>
   <img 
  src={icon6} 
  style={{ width: '50px', height: '50px' }} 
  className='hoverable-icon  ms-4' 
  alt=''
/>
    </div>

    <div className='d-flex mb-3  text-end me-4 align-items-center'>
   <h5 style={{color:'#1D479B'}}  className={`fw-bold ms-auto `}>{"صيانة أنظمة المبردات والثلاجات  المركزية"}</h5>
   <img 
  src={icon6} 
  style={{ width: '50px', height: '50px' }} 
  className='hoverable-icon  ms-4' 
  alt=''
/>
    </div>
    <div className='d-flex mb-3  text-end me-4 align-items-center'>
   <h5 style={{color:'#1D479B'}}  className={`fw-bold ms-auto `}>{"    الصيانة التصحيحية العلاجية"}</h5>
   <img 
  src={icon6} 
  style={{ width: '50px', height: '50px' }} 
  className='hoverable-icon  ms-4' 
  alt=''
/>
    </div>
    <div className='d-flex mb-3  text-end me-4 align-items-center'>
   <h5 style={{color:'#1D479B'}}  className={`fw-bold ms-auto `}>{"صيانة وتعقيم مجاري الهواء"}</h5>
   <img 
  src={icon6} 
  style={{ width: '50px', height: '50px' }} 
  className='hoverable-icon  ms-4' 
  alt=''
/>
    </div>

    <div className='d-flex mb-3  text-end me-4 align-items-center'>
   <h5 style={{color:'#1D479B'}}  className={`fw-bold ms-auto `}>{"صيانة وتظيف وتعقيم مرواح السحب"}</h5>
   <img 
  src={icon6} 
  style={{ width: '50px', height: '50px' }} 
  className='hoverable-icon  ms-4' 
  alt=''
/>
    </div>

        </div>
    </div>
</div>
</>

:

<>
<h4 style={{color:'#003157'}} className=' my-4 ms-3 text-start'> We are special by our comprehensive maintenance work </h4>

<div className='container'>
    <div className='row gy-3 align-items-center'>
        <div className='col-md-9'>

<div className='d-flex mb-3  text-start me-4 align-items-center'>
<img 
  src={icon6}
  style={{ width: '50px', height: '50px' }} 
  className='hoverable-icon  mx-4' 
  alt=''
/>
   <h5 style={{color:'#1D479B'}}  className={`fw-bold me-auto `}>{"Immediate emergency maintenance"}</h5>
   
    </div>
    <div className='d-flex mb-3  text-start me-4 align-items-center'>
    <img 
  src={icon6}
  style={{ width: '50px', height: '50px' }} 
  className='hoverable-icon  mx-4' 
  alt=''
/>
   <h5 style={{color:'#1D479B'}}  className={`fw-bold me-auto `}>{"Annual preventive maintenance "}</h5>

    </div>
    <div className='d-flex mb-3  text-start me-4 align-items-center'>
    <img 
  src={icon6}
  style={{ width: '50px', height: '50px' }} 
  className='hoverable-icon  mx-4' 
  alt=''
/>
   <h5 style={{color:'#1D479B'}}  className={`fw-bold me-auto `}>{"    Remedial corrective maintenance "}</h5>

    </div>
    <div className='d-flex mb-3  text-start me-4 align-items-center'>
    <img 
  src={icon6} 
  style={{ width: '50px', height: '50px' }} 
  className='hoverable-icon  mx-4' 
  alt=''
/>
   <h5 style={{color:'#1D479B'}}  className={`fw-bold me-auto `}>{"Maintenance of central chillers and refrigerators systems"}</h5>

    </div>


    <div className='d-flex mb-3  text-start me-4 align-items-center'>
    <img 
  src={icon6} 
  style={{ width: '50px', height: '50px' }} 
  className='hoverable-icon  mx-4' 
  alt=''
/>
   <h5 style={{color:'#1D479B'}}  className={`fw-bold me-auto `}>{"Maintenance and sterilization of air ducts"}</h5>

    </div>

    <div className='d-flex mb-3  text-start me-4 align-items-center'>
    <img 
  src={icon6} 
  style={{ width: '50px', height: '50px' }} 
  className='hoverable-icon  mx-4' 
  alt=''
/>
   <h5 style={{color:'#1D479B'}}  className={`fw-bold me-auto `}>{"Maintaining, cleaning and sterilizing the intake fans"}</h5>

    </div>
        </div>
        <div className='col-md-3 mb-5'>
        <img src={imag} className='w-100' alt=''/>
        </div>
    </div>
</div>
</>
}
 
    </div>
  )
}

export default MaintenanceWork
