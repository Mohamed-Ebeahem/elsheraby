import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import img1 from '../../Assets/OurProjects/p3/download (1) (1).png'
import img2 from '../../Assets/OurProjects/p3/KZANPMDY_400x400.png'
import arrow from '../../Assets/images/Path 1039.png'

const Project3 = () => {
    const navigate = useNavigate();
    const { lang } = useSelector((x) => x.languageData);

  return (
    <div style={{height:"100vh"}}>
        {lang==='ar'?
   <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
  <div className='container-fluid d-flex justify-content-between'>
  <img  onClick={()=>navigate('/Project4')} src={arrow} className='ms-5' style={{width:'40px',height:'40px'}} alt=''/>
  
  <h3 className='text-white  text-end'>{"مشاريعنا"}</h3>
  </div>

 
  
  </div>:
  <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
  <div className='container-fluid d-flex justify-content-between'>
  <h3 className='text-white  text-start'>{"Our Projects"}</h3>
  <img src={arrow} onClick={()=>navigate('/Project4')} className='me-5' style={{width:'40px',height:'40px'}} alt=''/>
  </div>

 
  
  </div>}

  {lang==='ar'?
  <h5 className='text-end me-3 mt-4' style={{color:'#28447C'}}>قطاع الرياضة (الملاعب والصالات)</h5>
  :
  <h5 className='text-start ms-3 mt-4' style={{color:'#28447C'}}>The Sports Sector (Stadiums and Halls)</h5>

  
  }
  <div className='container mb-5 ' style={{height:'100vh'}}>
  <div className='row gy-3   mb-5 align-items-center'>


  <div className='col-md-4 text-center align-items-center'>
<div className='w-75 m-auto text-center'>
<p className='bgs1'> استاد الملك فهد-الحوية
</p>
</div>
</div>

    <div className='col-md-4 text-center align-items-center'>
        <img className='w-50 m-auto ' src={img1} alt=''/>
    </div>
    <div className='col-md-4 text-center '>
        <img className='w-50  ' src={img2} alt=''/>
    </div>
    <div className='col-md-4 text-center align-items-center'>
<div className='w-75 m-auto text-center'>
<p className='bgs1'> استاد الأمير عبدالله الفيصل
جدة
</p>
</div>
</div>

<div className='col-md-4 text-center align-items-center'>
<div className='w-75 m-auto text-center'>
<p className='bgs1'>المعسكر الدائم بالعرفا
وزارة الشباب
</p>
</div>
</div>

<div className='col-md-4 text-center align-items-center'>
<div className='w-75 m-auto text-center'>
<p className='bgs1'> مدينة الملك فهد الرياضية
</p>
</div>
</div>
  </div>

  </div>


</div>
  )
}

export default Project3
