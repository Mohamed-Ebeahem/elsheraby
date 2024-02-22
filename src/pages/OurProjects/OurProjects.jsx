import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import OurWorkComponent from '../../Components/OurWorkComponent/OurWorkComponent';
import Project12 from '../../Assets/OurProjects/image- 6.jpg'
import Project7 from'../../Assets/OurProjects/image- 7.jpg'
import Project8 from'../../Assets/OurProjects/image- 8.jpg'
import Project9 from'../../Assets/OurProjects/image- 9.jpg'
import Project10 from'../../Assets/OurProjects/image- 10.jpg'
import Project11 from'../../Assets/OurProjects/image- 11.jpg'

import Project1 from '../../Assets/OurProjects/image- 12.jpg'
import Project2 from '../../Assets/OurProjects/image- 14.jpeg'
import Project3 from '../../Assets/OurProjects/image- 13.jpeg'
import Project4 from '../../Assets/OurProjects/image- 17.jpg'
import Project5 from '../../Assets/OurProjects/image- 16.jpg'
import Project6 from '../../Assets/OurProjects/image- 15.jpg'
import img1 from '../../Assets/OurProjects/image 2 (1).png'
import img2 from '../../Assets/OurProjects/image 4.png'
import img3 from '../../Assets/OurProjects/men-working-with-equ.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const OurProjects = () => {
    const navigate = useNavigate();
    const { lang } = useSelector((x) => x.languageData);
    const options = {
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    };
  return (

    <div>
       {lang==='ar'?
       <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid '>
      
      <h3 className='text-white  text-end'>{"مشاريعنا"}</h3>
      </div>
      </div>:
      <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid'>
      <h3 className='text-white  text-start'>{"Our Projects"}</h3>
      </div>
      </div>}

      {lang==='ar'?
      
  <>
  <p   style={{color:'#003157',fontSize:'17px',fontWeight:'lighter'}} className=' my-4 me-3 text-end'>
      نفذت الشربي العديد من مشاريع التكييف في مختلف المجالات (الطبي - السكني التجاري - المكاتب الإدارية - المستودعات - غرف تبريد وغيرها) في مناطق عديدة في المملكة (أنظمة تكييف الهواء - أنظمة التدفئة - أنظمة التهوية)

 </p>
 <p   style={{color:'#003157',fontSize:'17px',fontWeight:'lighter'}} className=' mb-5 me-3 text-end'>
 إن خدماتنا لا تقتصر على تنفيذ الأعمال الكهروميكانيكية ولكن في تقديم حلول متكاملة في هذا المجال، كما نلبي احتياجات العديد من العملاء للحد من تعقيد التعامل مع موردين من خلال علاقة قوية مع الموردين المحليين والدوليين والتغلب على مخاوف العملاء من خلال الالتزام بتوفير خدمات ما بعد البيع والتكامل السلس والمعدات

 </p>

 <div className=' text-center'>
 <p   style={{color:'#003157',fontSize:'17px',fontWeight:'bold'}} className=' mb-5 me-3 '>
 :ومن أهم هذه المشاريع
    </p>
 </div>

<div className='container mb-5'>

<div className='row gy-5'>
        <div className='col-md-4 ' onClick={()=>navigate('/Project3')}>
            <OurWorkComponent imageBack={Project1} title={"قطاع الرياضة (الملاعب والصالات)"} addtion={""}/>
        </div>
        <div className='col-md-4 ' onClick={()=>navigate('/Project2')}>
            <OurWorkComponent imageBack={Project2} title={"قطاع الفنادق والمطاعم والمقاهي"} addtion={""}/>
        </div>
        <div className='col-md-4 ' onClick={()=>navigate('/Project1')}>
            <OurWorkComponent imageBack={Project3} title={"قطاع البنوك والمصارف"} addtion={""}/>
        </div>
        <div className='col-md-4 '  onClick={()=>navigate('/Project6')}>
            <OurWorkComponent imageBack={Project4} title={"قطاع المصانع والمستودعات"} addtion={""}/>
        </div>
        <div className='col-md-4 '  onClick={()=>navigate('/Project5')}>
            <OurWorkComponent imageBack={Project5} title={"قطاع المجمعات التجارية والسكنية"} addtion={""}/>
        </div>
        <div className='col-md-4 '  onClick={()=>navigate('/Project4')}>
            <OurWorkComponent imageBack={Project6} title={"قطاع المراكز التجارية والحكومية"} addtion={""}/>
        </div>
        </div>

</div>
    <div className='container-fluid p-5 mb-5'>
<OwlCarousel className="owl-theme mb-5"  {...options}>
            <div className='h-100 rounded-5'>
                <img  className='h-100 rounded-5'   style={{width:'100%',height:'50%'}} src={img1} alt="Slide 1" />
            </div>
            <div className='h-100 rounded-5'>
                <img className='h-100 rounded-5'   style={{width:'100%',height:'50%'}} src={img2} alt="Slide 1" />
            </div>
            <div className='h-100 rounded-5'>
                <img className='h-100 rounded-5'   style={{width:'100%',height:'50%'}} src={img3} alt="Slide 1" />
            </div>
            <div className='h-100 rounded-5'>
                <img className='h-100 rounded-5'   style={{width:'100%',height:'50%'}} src={Project12} alt="Slide 1" />
            </div>
            <div className='h-100 rounded-5'>
                <img className='h-100 rounded-5'   style={{width:'100%',height:'50%'}} src={Project7} alt="Slide 1" />
            </div>
            <div className='h-100 rounded-5'>
                <img className='h-100 rounded-5'   style={{width:'100%',height:'50%'}} src={Project8} alt="Slide 1" />
            </div>
            <div className='h-100 rounded-5'>
                <img className='h-100 rounded-5'   style={{width:'100%',height:'50%'}} src={Project9} alt="Slide 1" />
            </div>
            <div className='h-100 rounded-5'>
                <img className='h-100 rounded-5'   style={{width:'100%',height:'50%'}} src={Project10} alt="Slide 1" />
            </div>
            <div className='h-100 rounded-5'>
                <img className='h-100 rounded-5'   style={{width:'100%',height:'50%'}} src={Project11} alt="Slide 1" />
            </div>
 </OwlCarousel>
</div>
    
  </>
      :
      
      
      
  <>
  <p   style={{color:'#003157',fontSize:'17px',fontWeight:'normal'}} className=' my-4 ms-3 text-start'>
  Al-Sherbi has implemented many air conditioning projects in various fields (medical - residential - commercial - administrative offices - warehouses - cooling rooms, etc.) in many regions of the Kingdom. (Air conditioning systems - heating systems - ventilation systems).

 </p>
 <p   style={{color:'#003157',fontSize:'17px',fontWeight:'normal'}} className=' mb-5 ms-3 text-start'>
 Our services are not limited to implementing electromechanical works, but rather in providing integrated solutions in this field. We also serve the needs of many customers to reduce the complexity of dealing with suppliers through a strong relationship with local and international suppliers and overcome customers’ fears through the commitment to provide after-sales services and seamless integration of equipment.

 </p>

 <div className=' text-center'>
 <p   style={{color:'#003157',fontSize:'17px',fontWeight:'bold'}} className=' mb-5 me-3 '>
 Among the most important of these projects:
import OurPartners from '../OurPartners/OurPartners';

    </p>
 </div>

<div className='container mb-5'>

<div className='row gy-5'>
<div className='col-md-4 '  onClick={()=>navigate('/Project1')}>
            <OurWorkComponent imageBack={Project3} title={"The Banking and Financial Sector"} addtion={""}/>
        </div>
        <div className='col-md-4 '  onClick={()=>navigate('/Project2')}>
            <OurWorkComponent imageBack={Project2} title={"The Hotels, Restaurants, and Cafés Sector"} addtion={""}/>
        </div>
        
        <div className='col-md-4 '  onClick={()=>navigate('/Project3')}>
            <OurWorkComponent imageBack={Project1} title={"The Sports Sector (Stadiums and Halls)"} addtion={""}/>
        </div>

 <div className='col-md-4 ' onClick={()=>navigate('/Project4')}>
            <OurWorkComponent imageBack={Project6} title={"The Commercial and Governmental Centers Sector"} addtion={""}/>
        </div>

        <div className='col-md-4 ' onClick={()=>navigate('/Project5')}>
            <OurWorkComponent imageBack={Project5} title={"The Commercial and Residential Complexes Sector"} addtion={""}/>
        </div>
       

        <div className='col-md-4 ' onClick={()=>navigate('/Project6')}>
            <OurWorkComponent imageBack={Project4} title={"The Industrial and Warehouse Sector"} addtion={""}/>
        </div>
        </div>

</div>
    <div className='container-fluid p-5 mb-5'>
<OwlCarousel className="owl-theme mb-5"  {...options}>
            <div className='h-100 rounded-5'>
                <img  className='h-100 rounded-5'  style={{width:'100%',height:'50%'}} src={img1} alt="Slide 1" />
            </div>
            <div className='h-100 rounded-5'>
                <img className='h-100 rounded-5'   style={{width:'100%',height:'50%'}} src={img2} alt="Slide 1" />
            </div>
            <div className='h-100 rounded-5'>
                <img className='h-100 rounded-5'   style={{width:'100%',height:'50%'}} src={img3} alt="Slide 1" />
            </div>
            <div className='h-100 rounded-5'>
                <img className='h-100 rounded-5'   style={{width:'100%',height:'50%'}} src={Project12} alt="Slide 1" />
            </div>
            <div className='h-100 rounded-5'>
                <img className='h-100 rounded-5'   style={{width:'100%',height:'50%'}} src={Project7} alt="Slide 1" />
            </div>
            <div className='h-100 rounded-5'>
                <img className='h-100 rounded-5'   style={{width:'100%',height:'50%'}} src={Project8} alt="Slide 1" />
            </div>
            <div className='h-100 rounded-5'>
                <img className='h-100 rounded-5'   style={{width:'100%',height:'50%'}} src={Project9} alt="Slide 1" />
            </div>
            <div className='h-100 rounded-5'>
                <img className='h-100 rounded-5'   style={{width:'100%',height:'50%'}} src={Project10} alt="Slide 1" />
            </div>
            <div className='h-100 rounded-5'>
                <img className='h-100 rounded-5'   style={{width:'100%',height:'50%'}} src={Project11} alt="Slide 1" />
            </div>
 </OwlCarousel>
</div>
  </>
 
      }

    </div>
  )
}

export default OurProjects
