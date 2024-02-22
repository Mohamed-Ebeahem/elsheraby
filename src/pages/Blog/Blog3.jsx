import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import arrow from '../../Assets/images/Path 1039.png'

const Blog3 = () => {
    const { lang } = useSelector((x) => x.languageData);
    let navigate = useNavigate()
  return (
    <div>
      <div>
    {lang==='ar'?
       <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid d-flex justify-content-between'>
      <img src={arrow} onClick={()=>navigate('/Blog4')} className='ms-5' style={{width:'40px',height:'40px'}} alt=''/>
      
      <h3 className='text-white text-end'>{"نصائح للحفاظ على نظام التكييف الخاص بك"}</h3>
      </div>

     
      
      </div>:
      <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid d-flex justify-content-between'>
      <h3 className='text-white  text-start'>{"Tips for maintaining your air conditioning system"}</h3>
      <img src={arrow} onClick={()=>navigate('/Blog4')} className='me-5' style={{width:'40px',height:'40px'}} alt=''/>
      </div>

     
      
      </div>}


      {lang==='ar'?
      <>
        <div style={{direction:'rtl'}} className='me-4 mt-4'>
           <div style={{color:'#003157'}} className='d-flex'>
            <span className='ms-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'> إجراء الصيانة الدورية</h5>
           </div>

           <p  style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className=' text-end'>
           للحفاظ على أداء نظام التكييف الخاص بك على أعلى مستوى، من المهم إجراء الصيانة الدورية. يمكنك التعاقد
.مع مقاول تكييف لتنفيذ الصيانة الدورية والتحقق من حالة النظام
           </p>


           <div className='d-flex mt-5' style={{color:'#003157'}}>
           <span className='ms-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'> تنظيف الفلاتر بانتظام </h5>    
                   </div>
                   <p   style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className=' mb-5 text-end'>
                   .تنظيف فلاتر نظام التكييف بانتظام يساعد في توفير استهلاك الطاقة ويحافظ على نقاء الهواء
                    </p>


                    <div className='d-flex mt-5' style={{color:'#003157'}}>
           <span className='ms-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'>التحقق من وجود تسربات </h5>    
                   </div>
                   <p   style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className=' mb-3 text-end'>
                   تسربات الهواء في نظام التكييف يمكن أن تؤثر على أداء النظام وتزيد من استهلاك الطاقة. قم بالتحقق من
.وجود تسربات وإصلاحها بمساعدة مقاول التكييف
                    </p>
                    <p   style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className=' mb-5 text-end'>
                    هذه المقالة تسلط الضوء على أهمية اختيار مقاول تكييف محترف وتقديم نصائح للحفاظ على نظام التكييف الخاص
.بك. استشر مقاول تكييف محترف للحصول على المشورة اللازمة وضمان تشغيل نظام التكييف بكفاءة وسلامة
                    </p>
        </div>
      </>:
      <>
        <div style={{direction:'ltr'}} className='ms-4 mt-4'>
           <div style={{color:'#003157'}} className='d-flex'>
            <span className='me-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'> Regular maintenance </h5>
           
           </div>

           <p  style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className=' text-start'>
           To keep your HVAC system performing at highest level, it is important to perform regular maintenance. You can hire
an air conditioning contractor to perform regular maintenance and check the condition of the system.
           </p>


           <div className='d-flex' style={{color:'#003157'}}>
           <span className='me-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'> Clean filters regularly </h5>    
                   </div>
                   <p   style={{color:'#003157',lineHeight:'40px',fontSize:'18px',fontWeight:'lighter'}} className=' mb-5 text-start'>
                   Cleaning the air conditioning system filters regularly helps save energy consumption and maintains air purity.
 </p>

 <div className='d-flex' style={{color:'#003157'}}>
           <span className='me-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'> Check for leaks </h5>    
                   </div>
                   <p   style={{color:'#003157',lineHeight:'40px',fontSize:'18px',fontWeight:'lighter'}} className=' mb-2 text-start'>
                   Air leaks in the HVAC system can affect system performance and increase energy consumption. Check for leaks and
repair them with the help of an HVAC contractor.
 </p>
 <p   style={{color:'#003157',lineHeight:'40px',fontSize:'18px',fontWeight:'lighter'}} className=' mb-2 text-start'>
 This article highlights the importance of choosing a professional HVAC contractor and provides tips for maintaining
your HVAC system.
 </p>
 <p   style={{color:'#003157',lineHeight:'40px',fontSize:'18px',fontWeight:'lighter'}} className=' mb-3 text-start'>
 Consult a professional HVAC contractor for advice to ensure your HVAC system operates efficiently and safely.
 </p>





        </div>
      </>
      }
    </div>
    </div>
  )
}

export default Blog3
