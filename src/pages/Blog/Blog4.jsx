import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import arrow from '../../Assets/images/Path 1039.png'

const Blog4 = () => {
    const { lang } = useSelector((x) => x.languageData);
    let navigate = useNavigate()
  return (
    <div>
    
      <div>
    {lang==='ar'?
       <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid d-flex justify-content-between'>
      <img src={arrow} onClick={()=>navigate('/Blog5')} className='ms-5' style={{width:'40px',height:'40px'}} alt=''/>
      
      <h3 className='text-white text-end'>{" كيف تحسن جودة الهواء؟"}</h3>
      </div>

     
      
      </div>:
      <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid d-flex justify-content-between'>
      <h3 className='text-white  text-start'>{"How to improve air quality?"}</h3>
      <img src={arrow} onClick={()=>navigate('/Blog5')} className='me-5' style={{width:'40px',height:'40px'}} alt=''/>
      </div>

     
      
      </div>}


      {lang==='ar'?
      <>
        <div style={{direction:'rtl'}} className='me-4 mt-4'>   
        <p  style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className='mb-4 text-end'>
       يبحث الجميع عن طرق لتحسين جودة الهواء في منازلهم ومكاتبهم ومراكزهم. واحدة من أفضل الطرق لتحقيق
.ذلك هي عن طريق صيانة وإصلاح وتركيب أجهزة التكييف بشكل منتظم
           </p>
           <div style={{color:'#003157'}} className='d-flex'>
            <span className='ms-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'>أهمية صيانة وإصلاح وتركيب أجهزة التكييف</h5>
           </div>

            <div className='d-flex align-items-baseline'>
            <p  style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className=' text-end'>
.توفر صيانة وإصلاح وتركيب أجهزة التكييف العديد من المزايا الهامة لتحسين جودة الهواء في المنزل أو المكتب :من بين هذه الفوائد
           </p>
           <span className='me-2 fs-4 fw-bold'>:</span>
            </div>
            <div className='d-flex align-items-baseline'>
            <span className='ms-2 fs-4 fw-bold'>.</span>
            <p  style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className=' text-end'>
            تساعد في إزالة الغبار والأوساخ والعوادم الضارة من الهواء 	           </p>
          
            </div>


            <div className='d-flex align-items-baseline'>
            <span className='ms-2 fs-4 fw-bold'>.</span>
            <p  style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className=' text-end'>
            تقلل من نمو العفن والبكتيريا والفطريات في الوحدات التكيفية      </p>
          
            </div>


            <div className='d-flex align-items-baseline'>
            <span className='ms-2 fs-4 fw-bold'>.</span>
            <p  style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className=' text-end'>
            تساعد في الحفاظ على رطوبة مناسبة في الهواء 	           </p>
          
            </div>

            <div className='d-flex align-items-baseline'>
            <span className='ms-2 fs-4 fw-bold'>.</span>
            <p  style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className=' text-end'>
            تحتفظ بأداء جهاز التكييف بأفضل حالة، مما يزيد من كفاءته وطول عمره   </p>
          
            </div>


           <div className='d-flex align-items-baseline mt-5' style={{color:'#003157'}}>
           <span className='ms-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'>تحديد مسؤولية الضرر الناتج عن سوء المصنعية أو سوء استعمال العميل</h5>    
                   </div>
                   <p   style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className=' mb-5 text-end'>
                   عند تركيب أو صيانة أجهزة التكييف، من المهم تحديد مسؤولية أي ضرر قد يحدث. يجب على المقاول تحمل
مسؤولية أي ضرر ينجم عن سوء المصنعية أو سوء الاستخدام من جانب العميل. يجب على العميل التأكد من
.توضيح تفاصيل هذه المسؤولية في عقد الخدمة                    </p>


                    <div className='d-flex mt-5' style={{color:'#003157'}}>
           <span className='ms-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'>تحديد التفاصيل المتعلقة بالمدفوعات وفترة الضمانة</h5>    
                   </div>
                   <p   style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className=' mb-3 text-end'>
                   من المهم أيضًا تحديد التفاصيل المتعلقة بالمدفوعات وفترة الضمانة عند التعاقد مع مقاول التكييف. يجب تحديد
,سعر الخدمة وطريقة الدفع وجدولة المدفوعات. كما يجب التأكد من تحديد فترة الضمانة التي يقدمها المقاول
.حيث يمكن للعميل الاعتماد عليها في حالة حدوث أي مشكلة في المستقبل                    </p>
                   

<div className='d-flex mt-5' style={{color:'#003157'}}>
           <span className='ms-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'> خاتمة</h5>    
                   </div>
                   <p   style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className=' mb-3 text-end'>
                   عند إختيار مقاول التكييف، من المهم البحث عن الشركات المتخصصة في مجال التكييف والتي تقدم خدمات صيانة
وإصلاح وتركيب عالية الجودة. يمكن الوصول إلى هذه الشركات من خلال مواقعها على الإنترنت وقراءة توصيات
الزبائن السابقين. كما يمكن الاعتماد على تجارب الأصدقاء والعائلة مع الشركات السابقة. قبل توقيع العقد، يجب أن
.يحتوي الاتفاق على تفاصيل المدفوعات وفترة الضمانة ومسؤولية الضرر           </p>
                   
<p   style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className=' mb-3 text-end'>
لا تتردد في التواصل معنا </p>
                   
        </div>
      </>:
      <>
        <div style={{direction:'ltr'}} className='ms-4 mt-4'>
        <p  style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className=' text-start'>
        Everyone is looking for ways to improve the air quality in their homes, offices and centers. One of the best ways t
 achieve this is maintaining, repairing and installing air conditioning devices on a regular basis.
           </p>

           <div style={{color:'#003157'}} className='d-flex'>
            <span className='me-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'>  The importance of maintaining, repairing and installing air conditioning equipment </h5>
           
           </div>

           <div className='d-flex align-items-baseline'>
            <p  style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className='me-3 text-start'>
            Air conditioning maintenance, repair, and installation provide many important benefits for improving the air quality
in your home or office. Among these benefits
           </p>
           <span className='me-2 fs-4 fw-bold'>:</span>
            </div>
  
            <div className='d-flex align-items-baseline'>
            <span className='me-2 fs-4 fw-bold'>.</span>
            <p  style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className='me-3 text-start'>
            Helps remove dust, dirt and harmful exhausts from the air.
           </p>
           
            </div>

            <div className='d-flex align-items-baseline'>
            <span className='me-2 fs-4 fw-bold'>.</span>
            <p  style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className='me-3 text-start'>
            Reduces the growth of mold, bacteria and fungi in AC units
                       </p>
           
            </div>
            <div className='d-flex align-items-baseline'>
            <span className='me-2 fs-4 fw-bold'>.</span>
            <p  style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className='me-3 text-start'>
            It helps maintain proper humidity in the air
                                   </p>
           
            </div>
            <div className='d-flex align-items-baseline'>
            <span className='me-2 fs-4 fw-bold'>.</span>
            <p  style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className='me-3 text-start'>
            It keeps the air conditioner performing at its best, increasing its efficiency and longevity                       </p>
           
            </div>
           <div className='d-flex' style={{color:'#003157'}}>
           <span className='me-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'> Determining liability for damage resulting from manufacturing defects or customer misuse </h5>    
                   </div>
                   <p   style={{color:'#003157',lineHeight:'40px',fontSize:'18px',fontWeight:'lighter'}} className=' mb-2 text-start'>
                   When installing or maintaining air conditioning equipment, it is important to determine responsibility for any damage
that may occur.  </p>
 <p   style={{color:'#003157',lineHeight:'40px',fontSize:'18px',fontWeight:'lighter'}} className=' mb-2 text-start'>
 The contractor must be responsible for any damage resulting from  manufacturing defects or misuse
of the customer.  </p>
 <p   style={{color:'#003157',lineHeight:'40px',fontSize:'18px',fontWeight:'lighter'}} className=' mb-5 text-start'>
 The customer must make sure to clarify the details of this responsibility in the service contract. </p>

 <div className='d-flex' style={{color:'#003157'}}>
           <span className='me-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'> Specify details regarding payments and guarantee periode </h5>    
                   </div>
                   <p   style={{color:'#003157',lineHeight:'40px',fontSize:'18px',fontWeight:'lighter'}} className=' mb-2 text-start'>
                   It is also important to determine the details regarding payments and warranty period when hiring an HVAC contractor.
 </p>
 <p   style={{color:'#003157',lineHeight:'40px',fontSize:'18px',fontWeight:'lighter'}} className=' mb-2 text-start'>
 The Service price must be specified, payment method, and payment scheduling.
 </p>
 <p   style={{color:'#003157',lineHeight:'40px',fontSize:'18px',fontWeight:'lighter'}} className=' mb-3 text-start'>
 You must also make sure to specify the
warranty period provided by the contractor where the customer can rely on it if any problem occurs. </p>


<div className='d-flex' style={{color:'#003157'}}>
           <span className='me-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'> Conclusion </h5>    
                   </div>
                   <p   style={{color:'#003157',lineHeight:'40px',fontSize:'18px',fontWeight:'lighter'}} className=' mb-2 text-start'>
                   When choosing an air conditioning contractor, it is important to look for companies that specialize in the field of air
conditioning and that provide high-quality maintenance, repair, and installation services. These companies can be
reached through their websites and reading recommendations from previous customers. </p>
 <p   style={{color:'#003157',lineHeight:'40px',fontSize:'18px',fontWeight:'lighter'}} className=' mb-2 text-start'>
 You can also rely on the
experiences of friends and family with previous companies. </p>
 <p   style={{color:'#003157',lineHeight:'40px',fontSize:'18px',fontWeight:'lighter'}} className=' mb-3 text-start'>
 Before signing the contract, the agreement must contain
details of payments, warranty period and damage liability. </p>

<p   style={{color:'#003157',lineHeight:'40px',fontSize:'18px',fontWeight:'lighter'}} className=' mb-3 text-start'>
Do not hesitate to contact us. </p>




        </div>
      </>
      }
    </div>
    </div>
  )
}

export default Blog4
