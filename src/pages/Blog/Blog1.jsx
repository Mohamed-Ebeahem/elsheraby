import React from 'react'
import { useSelector } from 'react-redux';
import arrow from '../../Assets/images/Path 1039.png'
import { useNavigate } from 'react-router-dom';
const Blog1 = () => {
    const navigate = useNavigate();
    const { lang } = useSelector((x) => x.languageData);

  return (
    <div>
    {lang==='ar'?
       <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid d-flex justify-content-between'>
      <img  onClick={()=>navigate('/Blog2')} src={arrow} className='ms-5' style={{width:'40px',height:'40px'}} alt=''/>
      
      <h3 className='text-white  text-end'>{"كيف تجدنا ؟"}</h3>
      </div>

     
      
      </div>:
      <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid d-flex justify-content-between'>
      <h3 className='text-white  text-start'>{"How do you find us?"}</h3>
      <img src={arrow} onClick={()=>navigate('/Blog2')} className='me-5' style={{width:'40px',height:'40px'}} alt=''/>
      </div>

     
      
      </div>}


      {lang==='ar'?
      <>
        <div style={{direction:'rtl'}} className='me-4 my-4'>
           <div style={{color:'#003157'}} className='d-flex'>
            <span className='ms-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'>توصيات العملاء السابقين لدينا  </h5>
           </div>

           <p  style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className=' text-end'>
           تعتبر توصيات العملاء السابقين مصدراً قيماً لتقييم مقاولي التكييف. يمكنك البحث عن تلك التقييمات على
.مواقع الاستعراض والمواقع الاجتماعية
           </p>


           <div className='d-flex mt-5' style={{color:'#003157'}}>
           <span className='ms-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'>الوصول إلينا من خلال الإنترنت </h5>    
                   </div>
                   <p   style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className=' mb-5 text-end'>
                   إحدى الطرق الأساسية للبحث هي البحث عبر الإنترنت. يمكنك العثور على العديد من الشركات المتخصصة
بالتكييف من خلال زيارة مواقعها على الإنترنت واستعراض خدماتها وفريق العمل. يمكنك أيضاً قراءة تقييمات
.العملاء السابقين لتحديد ما إذا كانت الشركة تلبي احتياجاتك</p>
        </div>
      </>:
      <>
        <div style={{direction:'ltr'}} className='ms-4 my-4'>
           <div style={{color:'#003157'}} className='d-flex'>
            <span className='me-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'> Recommendations of our previous clients</h5>
           
           </div>

           <p  style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className=' text-start'>
           Recommendations from previous clients are a valuable source for evaluating HVAC contractors. You can search for
these reviews on review page and social media.
           </p>


           <div className='d-flex mt-5' style={{color:'#003157'}}>
           <span className='me-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'> Find us through the Internet</h5>    
                   </div>
                   <p   style={{color:'#003157',lineHeight:'40px',fontSize:'18px',fontWeight:'lighter'}} className=' mb-5 text-start'>
                   You can reach us through online search. You can find many companies specializing in air conditioning by visiting their
websites and reviewing their services and work team. You can also read reviews from previous customers to determine
if the services meet your needs.
 </p>
        </div>
      </>
      }
    </div>
  )
}

export default Blog1
