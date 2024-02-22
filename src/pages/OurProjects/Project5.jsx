import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import arrow from '../../Assets/images/Path 1039.png'

const Project5 = () => {
    const navigate = useNavigate();
    const { lang } = useSelector((x) => x.languageData);

  return (
    <div style={{height:"100vh"}}>
        {lang==='ar'?
   <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
  <div className='container-fluid d-flex justify-content-between'>
  <img  onClick={()=>navigate('/Project6')} src={arrow} className='ms-5' style={{width:'40px',height:'40px'}} alt=''/>
  
  <h3 className='text-white  text-end'>{"مشاريعنا"}</h3>
  </div>

 
  
  </div>:
  <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
  <div className='container-fluid d-flex justify-content-between'>
  <h3 className='text-white  text-start'>{"Our Projects"}</h3>
  <img src={arrow} onClick={()=>navigate('/Project6')} className='me-5' style={{width:'40px',height:'40px'}} alt=''/>
  </div>

 
  
  </div>}

  {lang==='ar'?
<>
<h5 className='text-end me-3 my-4' style={{color:'#28447C'}}> قطاع المجمعات التجارية والسكنية</h5>
  <div className='col-md-4 ms-auto text-end'>
<div className='w-75 m-auto text-center'>
<p className='bgs1'>  فلل وأبنية سكنية خاصة
جدة
</p>
</div>
</div>
</>
  
  :
 <>
 <h5 className='text-start ms-3 my-4' style={{color:'#28447C'}}>The Commercial and Residential Complexes Sector</h5>
  <div className='col-md-4 ms-auto text-end'>
<div className='w-75 m-auto text-center'>
<p className='bgs1'> اكتبها فلل وأبنية سكنية خاصة
جدة
</p>
</div>
</div>
 </>
  
  }
    </div>
  )
}

export default Project5
