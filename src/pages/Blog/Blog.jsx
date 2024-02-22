import React from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import BolgComponent from './BolgComponent';
import img from '../../Assets/Blog/image-1.jpg'
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const { t } = useTranslation();
    const { lang } = useSelector((x) => x.languageData);
    
    let navigate = useNavigate();
  return (
    <div>
        {lang==='ar'?
       <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid'>
      <h3 className='text-white  text-end'>{"المدونة"}</h3>
      </div>

     
      
      </div>:
      <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid'>
      <h3 className='text-white  text-start'>{"Blog"}</h3>
      </div>

     
      
      </div>}

      {lang==='ar'?
      <>
      <div className='mt-3 ms-auto  pe-5' style={{width:'90%'}}>
        <h5 className='text-end fw-bold mb-3' style={{color:'#003157'}}>ما يمكن أن تتوقعه من الشربي في التكييف؟</h5>
        <p  style={{color:'#003157',fontSize:'20px'}} className='text-end'>كثيراً ما يواجه الأشخاص البحث عن مقاول محترف لتنفيذ أعمال التكييف في مراكزهم او منازلهم أو مكاتبهم
فحينما يتعلق الأمر بتركيب أو صيانة أنظمة التكييف، فإن الاختيار الصحيح لمقاول التكييف قد يكون أمراً مهماً
للغاية. هذه المقالة ستوضح لك كيفية اختيار مقاول تكييف محترف وتقديم بعض النصائح للحفاظ على نظام
التكييف الخاص بك</p>
      </div>
      <div className='p-5'>
      <div className='container-fluid my-1'>
        <div className='row gy-5 flex-row-reverse'> 
        <div className='col-md-4' onClick={()=>navigate("/Blog1")}>
        <BolgComponent image={img} text={"كيف تجدنا ؟"} id={""}/>
        </div>
     
        <div className='col-md-4' onClick={()=>navigate("/Blog2")}>
        <BolgComponent image={img} text={"فوائد الاستعانة بمقاول تكييف"} id={""}/>

        </div>
          <div className='col-md-4' onClick={()=>navigate("/Blog3")}>
        <BolgComponent image={img} text={"نصائح للحفاظ على نظام التكييف الخاص بك"} id={""}/>

        </div>
        <div className='col-md-4' onClick={()=>navigate("/Blog4")}>
        <BolgComponent image={img} text={"كيف تحسن جودة الهواء؟"} id={""}/>

        </div>
        <div className='col-md-4' onClick={()=>navigate("/Blog5")}>
        <BolgComponent image={img} text={"أنواع الدكت والجريلات والعزل الخاص بهم"} id={""}/>

        </div>
       
        <div className='col-md-4' onClick={()=>navigate("/Blog6")}>
        <BolgComponent image={img} text={"VRF كل ما تريد معرفته عن مكيف "} id={""}/>

        </div>
        <div className='col-md-4' onClick={()=>navigate("/Blog7")}>
        <BolgComponent image={img} text={"أسرار تركيب وصيانة المكيف المخفي المنزلي بشكل احترافي"} id={""}/>

        </div>
        </div>
      </div>
      </div>
      </>
      
      :
      <>
      <div className='mt-3 me-auto  ps-5' style={{width:'90%'}}>
        <h5 className='text-start fw-bold mb-3' style={{color:'#003157'}}>What can you expect from Al-Shirbi in air conditioning?</h5>
        <p  style={{color:'#003157',fontSize:'20px'}} className='text-start'>
        Many people often face the challenge of finding a professional contractor to handle air conditioning installations or
maintenance for their homes, offices, or facilities. When it comes to installing or maintaining air conditioning
systems, choosing the right HVAC contractor can be extremely crucial. This article will guide you on how to choose
a professional HVAC contractor and provide some tips for maintaining your air conditioning system.
        </p>
      </div>
      <div className='p-5'>
      <div className='container-fluid my-1'>
        <div className='row gy-5 '> 
      
       <div className='col-md-4' onClick={()=>navigate("/Blog1")}>
        <BolgComponent image={img} text={"How do you find us?"} id={""}/>
        </div>
        <div className='col-md-4' onClick={()=>navigate("/Blog2" )}>
        <BolgComponent image={img} text={"Benefits of hiring an HVAC contractor"} id={""}/>

        </div>
        
        <div className='col-md-4' onClick={()=>navigate("/Blog3")}>
        <BolgComponent image={img} text={"Tips for Maintaining Your Air Conditioning System"} id={""}/>
        </div>

        <div className='col-md-4' onClick={()=>navigate("/Blog4")}>
        <BolgComponent image={img} text={"How to improve air quality?"} id={""}/>
        </div>
       
        <div className='col-md-4' onClick={()=>navigate("/Blog5")}>
        <BolgComponent image={img} text={"Types of Ducts, Grilles, and Their Insulation"} id={""}/>
        </div>
       
        <div className='col-md-4' onClick={()=>navigate("/Blog6")}>
        <BolgComponent image={img} text={"What you need to know about VRF air conditioner"} id={""}/>
        </div>

        <div className='col-md-4' onClick={()=>navigate("/Blog7")}>
        <BolgComponent image={img} text={"Secrets of installing and maintaining a home hidden air conditioner professionally"} id={""}/>

        </div>
        </div>
      </div>
      </div>
      </>
      }
    </div>
  )
}

export default Blog
