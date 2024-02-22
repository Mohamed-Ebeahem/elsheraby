import React from 'react'
import airImage from '../../Assets/images/air-conditioners-roo.png'
import bgImage from '../../Assets/images/Path 1037.png'
import bgImage2 from '../../Assets/images/Path 1037 (1).png'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import logo from '../../Assets/images/logo - Copy.png'
import WhoAreWeComponent from '../../Components/WhoAreWeComponent/WhoAreWeComponent';
import log1 from '../../Assets/icons/message.png'
import log2 from '../../Assets/icons/message (1).png'
import log3 from '../../Assets/icons/value.png'
import './WhoAreWe.css'
const WhoAreWe = () => {
    const { lang } = useSelector((x) => x.languageData);
    const { t } = useTranslation();

  return (
    <div>
      <div className=' position-'>
        <div>
        <img className='w-100 ' src={airImage} alt=''/>
        </div>
        <div className='position- overflow-hidden mt-5' style={{top:'28%' ,zIndex:0}}>
        {/* <img className='' style={{width:'110%'}} src={lang==='ar'?bgImage2:bgImage} alt=''/> */}
        </div>
        {lang==='ar'?
        <div className='m-auto position-' style={{width:'90%',height:'100vh',bottom:150}}>
            <div className=' d-flex align-items-center ' style={{zIndex:1,top:'80px'}}>
            
      <h1 style={{color:'#1D479B'}}  className={`fw-bold pt-3  ${lang === 'ar' ? 'ms-auto' : 'me-auto'} my-5`}>{t("Name")}</h1>
      <img src={logo} style={{width:'10%'}} alt=''/>
      </div>

      <div className=''>
        <h6 className='my-5 text-end' style={{color:'#28447C',fontWeight:'lighter',fontSize:'20px'}}>{t("WhoAreWeDisc1")}</h6>
        <h6 className='my-5  text-end' style={{color:'#28447C',fontWeight:'lighter',fontSize:'20px'}}>{t("WhoAreWeDisc2")}</h6>
      </div>


      <div className='m-auto  ' style={{width:'90%'}}>
        
           {lang==='ar'?
           <div className='row gy-3'>
           <div className='col-md-4'>
            
            <WhoAreWeComponent icon={log3} Title={t("Title3Our")} desc={t("desc3Our")}/>
             
        </div>

        <div className='col-md-4'>
         
        <WhoAreWeComponent icon={log2} Title={t("Title2Our")} desc={t("desc2Our")} />
         
        </div>


        <div className='col-md-4'>
         
        <WhoAreWeComponent icon={log1} Title={t("Title1Our")} desc={t("desc1Our")} />
         
         </div>
         </div>:
         <div className='row gy-3'>
         <div className='col-md-4'>
         
         <WhoAreWeComponent icon={log3} Title={t("Title3Our")} desc={t("desc3Our")} />
          
          </div>
          
        <div className='col-md-4'>
         
        <WhoAreWeComponent icon={log2} Title={t("Title2Our")} desc={t("desc2Our")} />
         
        </div>
        <div className='col-md-4'>
            
            <WhoAreWeComponent icon={log1} Title={t("Title1Our")} desc={t("desc1Our")}/>
             
        </div>


      
         </div>}
 


      </div>
            </div>
        :
        <div className='m-auto p' style={{width:'90%',bottom:150}}>
            <div className=' d-flex align-items-center ' style={{zIndex:1,top:'80px'}}>
            <img src={logo} style={{width:'10%'}} alt=''/>
      <h1 style={{color:'#1D479B'}}  className={`fw-bold pt-3  ${lang === 'ar' ? 'ms-auto' : 'me-auto'} my-5`}>{t("Name")}</h1>

      </div>

      <div className=''>
        <h6 className='my-5' style={{color:'#28447C',fontWeight:'lighter',fontSize:'20px'}}>{t("WhoAreWeDisc1")}</h6>
        <h6 className='my-5' style={{color:'#28447C',fontWeight:'lighter',fontSize:'20px'}}>{t("WhoAreWeDisc2")}</h6>
      </div>


      <div className='m-auto  ' style={{width:'90%'}}>
        
           {lang==='ar'?
           <div className='row gy-3'>
           <div className='col-md-4'>
            
            <WhoAreWeComponent icon={log1} Title={t("Title1Our")} desc={t("desc1Our")}/>
             
        </div>

        <div className='col-md-4'>
         
        <WhoAreWeComponent icon={log2} Title={t("Title2Our")} desc={t("desc2Our")} />
         
        </div>


        <div className='col-md-4'>
         
        <WhoAreWeComponent icon={log3} Title={t("Title3Our")} desc={t("desc3Our")} />
         
         </div>
         </div>:
         <div className='row gy-3'>
         <div className='col-md-4'>
         
         <WhoAreWeComponent icon={log3} Title={t("Title3Our")} desc={t("desc3Our")} />
          
          </div>
          
        <div className='col-md-4'>
         
        <WhoAreWeComponent icon={log2} Title={t("Title2Our")} desc={t("desc2Our")} />
         
        </div>
        <div className='col-md-4'>
            
            <WhoAreWeComponent icon={log1} Title={t("Title1Our")} desc={t("desc1Our")}/>
             
        </div>


      
         </div>}
 


      </div>
            </div>}
            
          
      </div>  

      
    </div>
  )
}

export default WhoAreWe
