import React, { useState } from 'react';
import { toggleLanguage } from '../../store/LanguageSlice';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css'; 
import Logo from '../../Assets/logo/logo.png'
import Facebook from '../../Assets/icons/facebook-app-symbol.png'
import Twitter from '../../Assets/icons/twitter.png'
import insta from '../../Assets/icons/instagram.png'
import Whatsapp from '../../Assets/icons/whatsapp.png'
import WhyAreWeSpecialComponents from '../../Components/Why_Are_We_SpecialComponents/WhyAreWeSpecialComponents';
import OurWorkComponent from '../../Components/OurWorkComponent/OurWorkComponent';
import imageleftEN from '../../Assets/images/logoLeft__1_-removebg-preview (1).png'
import imageleftAR from '../../Assets/images/Untitled-removebg-preview (1).png'
import { useTranslation } from 'react-i18next';
import icon1 from '../../Assets/icons/icon 1.png'
import icon2 from '../../Assets/icons/icon 2.png'
import icon3 from '../../Assets/icons/icon 3.png'
import icon4 from '../../Assets/icons/icon 4.png'
import icon5 from '../../Assets/icons/icon 5.png'
import icon6 from '../../Assets/icons/icon_6-removebg-preview.png'
import OurWork1 from '../../Assets/ourWorkImages/image- 18.jpg'
import OurWork2 from '../../Assets/ourWorkImages/image- 19.jpg'
import OurWork3 from '../../Assets/ourWorkImages/image- 20.jpg'
import OurWork4 from '../../Assets/ourWorkImages/image- 21.jpg'
import OurWork5 from '../../Assets/ourWorkImages/image- 22.jpg'
import OurWork6 from '../../Assets/ourWorkImages/image- 23.jpg'
import iconC1 from '../../Assets/images/C1.png'
import iconC2 from '../../Assets/images/C2.png'
import iconC3 from '../../Assets/images/C3.png'
import iconC4 from '../../Assets/images/C4.png'
import iconC5 from '../../Assets/images/C5.png'
import we1 from '../../Assets/images/3qs1yKLjJ39vQfbFzrER (1).png'
import we2 from '../../Assets/images/3qs1yKLjJ39vQfbFzrER.png'
import we3 from '../../Assets/images/3qs1yKLjJ39vQfbFzrER (2).png'
import we4 from '../../Assets/images/3qs1yKLjJ39vQfbFzrER (3).png'
import img from '../../Assets/images/logo-line art (2).png'
import bgAr from '../../Assets/images/Path 1013 (2).png'
import bgEN from '../../Assets/images/Path 1013 (3).png'

import WhyAreWeSpecialComponentsFooter from '../../Components/WhyAreWeSpecialComponentsFooter/WhyAreWeSpecialComponentsFooter';
import MyCarousel from '../../Components/Carousel/Carousel';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { lang } = useSelector((x) => x.languageData);
    const [hovered, setHovered] = useState(false);
    const { t } = useTranslation();
    const imagePath = t('image');
    console.log(imagePath);
    return (

     <div>
           <div  style={{zIndex:11,position:'relative'}}>
    <div className={` position-relative   ${lang === 'ar' ? 'rtl' : 'ltr'}`} style={{overflow:'hidden'}}>
<div className='section1' style={{height:'71vh'}}>
<div  className='' >  

        
           <div className='' style={{height:'100vh',position:'relative'}}>
           <img  src={lang ==='ar' ?imageleftAR:imageleftEN} alt="" className={`mt-auto  position-absolute ${lang === 'ar' ? 'rtl' : 'ltr'}`} 
        style={{ 
            position: "relative",
            // top: -110,
                width: "35%",
            // marginTop:"80px",
            zIndex:1, 
            [lang === 'ar' ? 'right' : 'left']: hovered ? "-3%" : "-17%",
            transition: "right 0.5s, left 0.5s"
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}/>

        <div className={` h-100 w- ${lang === 'ar' ? 'me-auto ms-3 ' : 'ms-auto me-3 '}`}>
        <div className='pt-3'>
        <div  onClick={() => dispatch(toggleLanguage())} className={` position-fixed rounded-circle mt-4 text-white text-center d-flex justify-content-center align-items-center ${lang === 'ar' ? 'start-0 ms-3 ' : 'end-0 me-3 '}`} style={{top:'10%',width:'50px',height:'50px' ,backgroundColor:'#1D479B',zIndex:22,cursor:'pointer'}}> <p className='pt-3' >{lang === 'en' ? 'AR' : 'EN'}</p></div>
        
        </div>
           <div  className={` my-auto d-flex flex-column   justify-content-center  h-50  ${lang === 'ar' ? 'me-auto ms-3 ' : 'ms-auto me-3 '} ${lang === 'ar' ? 'rtl' : 'ltr'}`} 
        style={{ 
          width:'65%',
            top: "-10%", 
            
            [lang === 'ar' ? 'right' : 'left']: hovered ? "-25%" : "-27%",
            transition: "right 0.5s, left 0.5s"
        }}>
               {/* <img className={` ${lang === 'ar' ? 'ms-auto' : 'me-auto'} w-25 my-5 `} src={lang === 'ar' ? NameArab : NameEnglish} alt=''/> */}
               <h1 style={{color:'#1D479B',fontSize:'60px'}}  className={`fw-bold  ${lang === 'ar' ? 'ms-auto' : 'me-auto'} my-4`}>{t("Name")}</h1>
               <p style={{width:'100%',fontSize:'20px'}} className={` ${lang === 'ar' ? 'ms-auto' : 'me-auto'} `} >{t("HomeText")}</p>

               <div onClick={()=>navigate("/WhoAreWe")} style={{cursor:'pointer',width:'130px'}} className={` ${lang === 'ar' ? 'ms-auto ReadMore' : 'me-auto ReadMore'} px-4 py-2`}>{t("Read_More")}</div>


            </div>
        </div>
           </div>
         
        </div>
           

</div>
<div className={`  ${lang === 'ar' ? 'text-start' : 'text-end'} py-5` } style={{backgroundColor:'#EAEDEF'}}>
    <div className='mx-auto  text-center'>
    <div className=' border text-center border-black mx-auto rounded-pill' style={{width:'50%', display: 'inline-block',position:'relative' }}>
   <div className=' text-center   px-5 py-2 rounded-pill' style={{backgroundColor:'#1D479B',position:'relative',top:3,left:-3 ,whiteSpace: 'nowrap' }}>
        <h4 className='mx-auto' style={{ width:'100%',fontSize:'36px', color: 'white' }}>{t("Why_Are_We_Special")}</h4>
    </div>
</div>
    </div>

   {lang==='ar'?
   
   <div className={`container mt-4   ${lang === 'ar' ? 'rtl' : 'ltr'}`} >
        <div className={`row gy-2   m-auto d-flex justify-content-center`}>
        <div className='col-md-4'>
        <WhyAreWeSpecialComponents icon={icon1} title={t("iconTitle3")} discription={t("iconDescription3")}/>
        </div>
        <div className='col-md-4'>
        <WhyAreWeSpecialComponents icon={icon2}  title={t("iconTitle2")} discription={t("iconDescription2")}/>
        </div>
        <div className='col-md-4'>
        <WhyAreWeSpecialComponents icon={icon3}  title={t("iconTitle1")} discription={t("iconDescription1")}/>
        </div>
        <div className='col-md-4'>
        <WhyAreWeSpecialComponents icon={icon4} title={t("iconTitle4")} discription={t("iconDescription5")}/>
        </div>
        <div className='col-md-4'>
        <WhyAreWeSpecialComponents icon={icon5} title={t("iconTitle5")} discription={t("iconDescription4")}/>
        </div>
        </div>
    </div>
   
   :
   <div className={`container mt-5   ${lang === 'ar' ? 'rtl' : 'ltr'}`} >
        <div className={`row gy-2  m-auto d-flex justify-content-center`}>
        <div className='col-md-4'>
        <WhyAreWeSpecialComponents icon={icon1} title={t("iconTitle1")} discription={t("iconDescription1")}/>
        </div>
        <div className='col-md-4'>
        <WhyAreWeSpecialComponents icon={icon2}  title={t("iconTitle2")} discription={t("iconDescription2")}/>
        </div>
        <div className='col-md-4'>
        <WhyAreWeSpecialComponents icon={icon3}  title={t("iconTitle3")} discription={t("iconDescription3")}/>
        </div>
        <div className='col-md-4'>
        <WhyAreWeSpecialComponents icon={icon4} title={t("iconTitle4")} discription={t("iconDescription4")}/>
        </div>
        <div className='col-md-4'>
        <WhyAreWeSpecialComponents icon={icon5} title={t("iconTitle5")} discription={t("iconDescription5")}/>
        </div>
        </div>
    </div>}
</div> 

<div className='position-relative   -5 w-100' style={{zIndex:1}}>
<div className={`ms-auto  w-75 position-absolute top-0 ${lang==='ar'? 'end-50':" start-50"}`}>
</div>
<div className='  '>
    <div className='container '>
    <div className='d-flex  align-items-center'>
    <img 
  src={icon6} 
  style={{ width: '50px', height: '50px' }} 
  className='hoverable-icon ' 
  alt=''
/>   <h1 style={{color:'#1D479B'}}  className={`fw-bold   ${lang === 'ar' ? 'ms-auto' : 'me-auto'} my-5`}>{t("Our_Services")}</h1>
    </div>
    
    
        <div className='row gy-5'>
        <div className='col-md-4 '>
            <OurWorkComponent imageBack={OurWork1} title={t("Our_WorkTitle1")} addtion={t("Our_WorkTitle1Addetion")}/>
        </div>
        <div className='col-md-4'>
        <OurWorkComponent imageBack={OurWork2} title={t("Our_WorkTitle2")} addtion={t("Our_WorkTitle2Addetion")}/>
       </div>
       <div className='col-md-4'>
        <OurWorkComponent imageBack={OurWork3}  title={t("Our_WorkTitle3")} addtion={t("Our_WorkTitle3Addetion")}/>   
       </div>
       <div className='col-md-4'>
        <OurWorkComponent imageBack={OurWork4}  title={t("Our_WorkTitle4")} addtion={t("Our_WorkTitle4Addetion")}/>   
       </div>
       <div className='col-md-4'>
        <OurWorkComponent imageBack={OurWork5}  title={t("Our_WorkTitle5")} addtion={t("Our_WorkTitle5Addetion")}/>   
       </div>
       <div className='col-md-4'>
        <OurWorkComponent imageBack={OurWork6}  title={t("Our_WorkTitle6")} addtion={t("Our_WorkTitle6Addetion")}/>   
       </div>
      

        </div>
    </div>
    <div style={{cursor:'pointer',width:'180px',zIndex:1}} className={` my-5 text-center ${lang === 'ar' ? 'ReadMore' : 'ReadMore'} m-auto px-4 py-2`} onClick={()=>navigate('/ourServices')}>{t("More_Services")}</div>




    <div className={`pb-5 section2 ${lang === 'ar' ? 'text-start' : 'text-end'}`}>
<div className={`ms-auto  w-100 position-absolute top-0 `}  style={{zIndex:0}}>
</div>

<div className='container pt-5 mt-5 position-relative z-0'>
<div className='d-flex align-items-center'>
    <img 
  src={icon6} 
  style={{ width: '50px', height: '50px' }} 
  className=' mt-5 hoverable-icon' 
  alt=''
/>   <h1 style={{color:'#1D479B'}}  className={`fw-bold  ${lang === 'ar' ? 'ms-auto' : 'me-auto'} mt-5`}>{t("Why_Are_We_Special2")}</h1>
    </div>
    <h6 className={`w-50 mt-2 ${lang === 'ar' ? 'text-end' : 'text-start'}`}  style={{color:"#1D479B"}}>{t("Why_Are_We_Special_Disc")}</h6>


  <div className='row gy-5'>
  <div className='col-md-5'>
  {lang==='ar'?
  
  <div className='text-end'>
<WhyAreWeSpecialComponentsFooter icon={iconC1} text={t("Arrow1")}/>
        <WhyAreWeSpecialComponentsFooter icon={iconC2} text={t("Arrow2")}/>
        <WhyAreWeSpecialComponentsFooter icon={iconC3} text={t("Arrow3")}/>
        <WhyAreWeSpecialComponentsFooter icon={iconC4} text={t("Arrow4")}/>
        <WhyAreWeSpecialComponentsFooter icon={iconC5} text={t("Arrow5")}/>
        </div>
  :
  <div className='text-start'>
  <WhyAreWeSpecialComponentsFooter icon={iconC1} text={t("Arrow1")}/>
        <WhyAreWeSpecialComponentsFooter icon={iconC2} text={t("Arrow2")}/>
        <WhyAreWeSpecialComponentsFooter icon={iconC3} text={t("Arrow3")}/>
        <WhyAreWeSpecialComponentsFooter icon={iconC4} text={t("Arrow4")}/>
        <WhyAreWeSpecialComponentsFooter icon={iconC5} text={t("Arrow5")}/>
  </div>
  }
       

    
    </div>
    <div className='col-md-7  position-relative'>

    <div className='' style={{width:'80%',position:'relative',top:0,zIndex:333}}>
        <img className=' w-100 h-100' src={lang === 'ar' ?we4:we1} alt=''/>
    </div>
    <div className=''  style={{width:'80%',position:'absolute',top:10,left:0,right:0,bottom:-12}}>
    <img className=' w-100 h-100' src={lang === 'ar' ?we3:we2} alt=''/>
    </div>

    </div>

  </div>
</div>
</div>
<div className='bg- section4  'style={{zIndex:1000}}>
<div className={``} style={{backgroundColor:'#EAEDEF'}}>

    <div className='container d-flex' style={{position:'relative',zIndex:1000}}>
<div className='d-flex pt-5 align-items-center'>
    <img 
  src={icon6} 
  style={{ width: '50px', height: '50px' }} 
  className='hoverable-icon' 
  alt=''
/>   <h1 style={{color:'#1D479B'}}  className={`fw-bold  ${lang === 'ar' ? 'ms-auto' : 'me-auto'} -5`}>{t("Our_Partners")}</h1>
    </div>



</div>


</div>

</div>
</div>

</div>



        </div>


<div>

   </div>
   <MyCarousel/>

        </div>
     </div>
    
    );
};

export default Home;