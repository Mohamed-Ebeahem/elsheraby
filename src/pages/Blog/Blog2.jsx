import React from 'react'
import arrow from '../../Assets/images/Path 1039.png'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Blog2 = () => {
    const { lang } = useSelector((x) => x.languageData);
    let navigate = useNavigate()
  return (
    <div>
      <div>
    {lang==='ar'?
       <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid d-flex justify-content-between'>
      <img src={arrow} onClick={()=>navigate('/Blog3')} className='ms-5' style={{width:'40px',height:'40px'}} alt=''/>
      
      <h3 className='text-white text-end'>{"فوائد الاستعانة بمقاول تكييف"}</h3>
      </div>

     
      
      </div>:
      <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid d-flex justify-content-between'>
      <h3 className='text-white  text-start'>{"Benefits of hiring an air conditioning contractor"}</h3>
      <img src={arrow} onClick={()=>navigate('/Blog3')} className='me-5' style={{width:'40px',height:'40px'}} alt=''/>
      </div>

     
      
      </div>}


      {lang==='ar'?
      <>
        <div style={{direction:'rtl'}} className='me-4 mt-4'>
           <div style={{color:'#003157'}} className='d-flex'>
            <span className='ms-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'>توفير المال</h5>
           </div>

           <p  style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className=' text-end'>
           عندما تستعين بمقاول تكييف محترف، يمكنك توفير المال على المدى الطويل. فمقاول التكييف المحترف
يستطيع تحديد مشاكل النظام بدقة وإجراء الإصلاحات اللازمة بكفاءة. هذا يقلل من حاجتك للقيام بإصلاحات
.متكررة ويوفر المال
           </p>


           <div className='d-flex mt-5' style={{color:'#003157'}}>
           <span className='ms-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'>ضمان الجودة</h5>    
                   </div>
                   <p   style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className=' mb-5 text-end'>
                   باستعانتك بمقاول تكييف محترف، يمكنك ضمان الحصول على جودة الخدمة. فمقاول التكييف المحترف لديه
.المعرفة والمهارات اللازمة لتنفيذ أعمال التكييف بشكل صحيح وفعال
                    </p>


                    <div className='d-flex mt-5' style={{color:'#003157'}}>
           <span className='ms-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'>الراحة </h5>    
                   </div>
                   <p   style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className=' mb-5 text-end'>
                   باستعانتك بمقاول تكييف محترف، يمكنك الاطمئنان والاسترخاء بينما يتم تنفيذ أعمال التكييف. ستكون عندك
.الراحة بأن العمل يتم بشكل صحيح وبتنسيق جيد
                    </p>
        </div>
      </>:
      <>
        <div style={{direction:'ltr'}} className='ms-4 mt-4'>
           <div style={{color:'#003157'}} className='d-flex'>
            <span className='me-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'>Saving money</h5>
           
           </div>

           <p  style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className=' text-start'>
           When you hire a professional air conditioning contractor, you can save money for the long term. A professional air
conditioning contractor can accurately identify system problems and make the necessary repairs efficiently. This
reduces your need to make frequent repairs and saves money.
           </p>


           <div className='d-flex' style={{color:'#003157'}}>
           <span className='me-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'> Quality assurance</h5>    
                   </div>
                   <p   style={{color:'#003157',lineHeight:'40px',fontSize:'18px',fontWeight:'lighter'}} className=' mb-5 text-start'>
                   By hiring a professional air conditioning contractor, you can ensure quality service. A professional air conditioning
contractor has the knowledge and skills to perform air conditioning work correctly and effectively.
 </p>

 <div className='d-flex' style={{color:'#003157'}}>
           <span className='me-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'> Comforts </h5>    
                   </div>
                   <p   style={{color:'#003157',lineHeight:'40px',fontSize:'18px',fontWeight:'lighter'}} className=' mb-5 text-start'>
                   By hiring a professional air conditioning contractor, you can feel good while the air conditioning work is being carried
out. You will have the comfort that the work is done correctly and in good coordination.
 </p>
        </div>
      </>
      }
    </div>
    </div>
  )
}

export default Blog2
