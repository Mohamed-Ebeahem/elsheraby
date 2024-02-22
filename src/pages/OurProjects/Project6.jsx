import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import arrow from '../../Assets/images/Path 1039.png'
import img1 from '../../Assets/OurProjects/p6/JEDDAH_ALUMINIUM_-re.png'
const Project6 = () => {
    const navigate = useNavigate();
    const { lang } = useSelector((x) => x.languageData);

  return (
    <div style={{height:"100vh"}}>
        {lang==='ar'?
   <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
  <div className='container-fluid d-flex justify-content-between'>
  <img  onClick={()=>navigate('/OurProjects')} src={arrow} className='ms-5' style={{width:'40px',height:'40px'}} alt=''/>
  
  <h3 className='text-white  text-end'>{"مشاريعنا"}</h3>
  </div>

 
  
  </div>:
  <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
  <div className='container-fluid d-flex justify-content-between'>
  <h3 className='text-white  text-start'>{"Our Projects"}</h3>
  <img src={arrow} onClick={()=>navigate('/OurProjects')} className='me-5' style={{width:'40px',height:'40px'}} alt=''/>
  </div>

 
  
  </div>}

  {lang==='ar'?
<>
<h5 className='text-end me-3 my-4' style={{color:'#28447C'}}> قطاع المصانع والمستودعات</h5>

</>
  
  :
 <>
 <h5 className='text-start ms-3 my-4' style={{color:'#28447C'}}>The Industrial and Warehouse Sector</h5>

 </>
  
  }
  <div className='container'>
    <div className='row gy-3 align-items-center'>
    <div className='col-md-4 '>
<div className='w-100 m-auto text-center'>
<p className='bgs1'> مصانع العسيري
</p>
</div>
</div>

<div className='col-md-4 '>
<div className='w-100 m-auto text-center'>
<p className='bgs1'> مصنع ملابس-جدة
</p>
</div>
</div>



<div className='col-md-4 text-center align-items-center'>
        <img className='w-75 m-auto ' src={img1} alt=''/>
    </div>
    </div>
  </div>

 
    </div>
  )
}

export default Project6
