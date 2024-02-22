import React from 'react'
import { useTranslation } from 'react-i18next';
import Logo from '../../Assets/logo/logo.png'
import Facebook from '../../Assets/icons/facebook-app-symbol.png'
import Twitter from '../../Assets/icons/twitter.png'
import insta from '../../Assets/icons/instagram.png'
import Whatsapp from '../../Assets/icons/whatsapp.png'
import im from '../../Assets/images/Path 1012 (7) (1).png'
import './Footer.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  let {lang} = useSelector((x) => x.languageData);
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
<>
<div className='w-100' style={{height:'1px',backgroundColor:'#1D479B'}}></div>
    <div className=' pt-4' style={{backgroundColor:'#EAEDEF'}}>
    <div className='m-auto position-relative' style={{width:"90%"}}>
     {lang==='ar'?
     <div className='row gy-3  '>
     <div className='col-md-3   mt-auto d-flex'>
        <div className=' text-end h-100 text-center position-relative'>
              <img src={Logo} className='w-100 mt-5' alt=''/>

              <h5 className='mx-auto fw-bold mb-5 text-end' style={{color:'#1D479B'}}>ارسل مخطط مشروعك , واحصل علي عرض سعر , مهندسينا بانتظار طلبك</h5>
            </div>
        </div>
     
        <div className='col-md-5 text-end position-relative'>
        <div className='mb-5 ms-auto d-flex flex-column  ReadMore p-1 text-center'style={{width:'200px',fontSize:'18px'}}>
             {t("Connect_With_Us")}
            </div>
            <div className='' style={{color:'#1D479B'}}>
              <h6>{t("Connect_With_Us1")}</h6>
            </div>
            <div className='my-4' style={{color:'#1D479B'}}>
              <h6>{t("Connect_With_Us2")}</h6>
            </div>
            <div className='' style={{color:'#1D479B'}}>
              <h6>{t("Connect_With_Us3")}</h6>
            </div>
            <div className='my-4' style={{color:'#1D479B'}}>
              <h6>{t("Connect_With_Us4")}</h6>
            </div>
            <div className='' style={{color:'#1D479B'}}>
              <h6>{t("Connect_With_Us5")}</h6>
            </div>
          
           
        </div>
        <div className='col-md-4  ms-auto'>
            <div className='mb-4 ms-auto ReadMore text-center p-1' style={{width:'200px',fontSize:'18px'}}>
             {t("Important_Links")}
            </div>
<div className='text-end'>
<div className='text-end' onClick={()=>navigate("/WhoAreWe")} style={{color:'#1D479B',cursor:'pointer'}}>
              <h6>{t("Important_Links1")}</h6>
            </div>
            <div className='my-3'  style={{color:'#1D479B',cursor:'pointer'}}>
              <h6>{t("Important_Links2")}</h6>
            </div>
            <div className='' onClick={()=>navigate("/Orgchart")}   style={{color:'#1D479B',cursor:'pointer'}}>
              <h6>{t("Important_Links3")}</h6>
            </div>
            <div className='my-3' onClick={()=>navigate("/OurServices")}  style={{color:'#1D479B',cursor:'pointer'}}>
              <h6>{t("Important_Links4")}</h6>
            </div>
            <div className='' onClick={()=>navigate("/OurProjects")} style={{color:'#1D479B',cursor:'pointer'}}>
              <h6>{t("Important_Links5")}</h6>
            </div>
            <div className='my-3' onClick={()=>navigate('/MaintenanceWork')} style={{color:'#1D479B',cursor:'pointer'}}>
              <h6>{t("Important_Links6")}</h6>
            </div>
            <div className='' onClick={()=>navigate('/ColdStorageRooms')}        style={{color:'#1D479B',cursor:'pointer'}}>
              <h6>{t("Important_Links7")}</h6>
            </div>

</div>
           
        </div>
        
      </div>:
     <div className='row gy-3 h-100'>
      <div className='col-md-4'>
            <div className='mb-4 ReadMore text-center p-1' style={{width:'200px',fontSize:'18px'}}>
             {t("Important_Links")}
            </div>

            <div className='' onClick={()=>navigate("/WhoAreWe")} style={{color:'#1D479B',cursor:'pointer'}}>
              <h6>{t("Important_Links1")}</h6>
            </div>
            <div className='my-3'  style={{color:'#1D479B',cursor:'pointer'}}>
              <h6>{t("Important_Links2")}</h6>
            </div>
            <div className=''  onClick={()=>navigate("/Orgchart")}  style={{color:'#1D479B',cursor:'pointer'}}>
              <h6>{t("Important_Links3")}</h6>
            </div>
            <div className='my-3'  onClick={()=>navigate("/OurServices")}    style={{color:'#1D479B',cursor:'pointer'}}>
              <h6>{t("Important_Links4")}</h6>
            </div>
            <div className='' onClick={()=>navigate("/OurProjects")} style={{color:'#1D479B',cursor:'pointer'}}>
              <h6>{t("Important_Links5")}</h6>
            </div>
            <div className='my-3' onClick={()=>navigate('/MaintenanceWork')} style={{color:'#1D479B',cursor:'pointer'}}>
              <h6>{t("Important_Links6")}</h6>
            </div>
            <div className='' onClick={()=>navigate('/ColdStorageRooms')}   style={{color:'#1D479B',cursor:'pointer'}}>
              <h6>{t("Important_Links7")}</h6>
            </div>

        </div>
        <div className='col-md-5 position-relative'>
        <div className='mb-5 d-flex flex-column  ReadMore p-1 text-center'style={{width:'200px',fontSize:'18px'}}>
             {t("Connect_With_Us")}
            </div>
            <div className='' style={{color:'#1D479B'}}>
              <h6>{t("Connect_With_Us1")}</h6>
            </div>
            <div className='my-4' style={{color:'#1D479B'}}>
              <h6>{t("Connect_With_Us2")}</h6>
            </div>
            <div className='' style={{color:'#1D479B'}}>
              <h6>{t("Connect_With_Us3")}</h6>
            </div>
            <div className='my-4' style={{color:'#1D479B'}}>
              <h6>{t("Connect_With_Us4")}</h6>
            </div>
            <div className='' style={{color:'#1D479B'}}>
              <h6>{t("Connect_With_Us5")}</h6>
            </div>
          
           
        </div>
        <div className='col-md-3   mt-auto d-flex'>
        <div className=' text-end h-100 text-center position-relative'>
              <img src={Logo} className='w-100 mt-5' alt=''/>

              <h5 className='mx-auto mb-5 fw-bold text-start' style={{color:'#1D479B'}}>Send your project plan, get a price quote, our engineers are waiting for your request</h5>
            </div>
        </div>
      </div>}
   


           
    </div> <div className='w-100 text-white'style={{backgroundColor:'#1D479B'}}>
      <div className='m-auto' style={{width:"90%"}}>
        <div className='d-flex justify-content-between align-items-center   py-2'>
          <p className='pt-3'>{t("All_rights_reserved_for_Al_Sherbi")}</p>
          <div className='d-flex align-items-center '>
          <div className=' rounded-circle me-3 d-flex justify-content-center align-items-center border border-2 border-white' style={{width:'40px',height:'40px'}}>
              <img src={insta} className='w-100 p-2' alt=''/>
            </div>

           
            <div className='rounded-circle me-3 d-flex justify-content-center align-items-center border border-2 border-white' style={{width:'40px',height:'40px'}}>
              <img src={Twitter} className='w-100 p-2' alt=''/>
            </div>
            
            
  
             <div className='rounded-circle me-3 d-flex justify-content-center align-items-center border border-2 border-white' style={{width:'40px',height:'40px'}}>
              <img src={Facebook} className='w-100 p-2' alt=''/>
            </div>
              <div className='rounded-circle me-3 d-flex justify-content-center align-items-center border border-2 border-white' style={{width:'40px',height:'40px'}}>
              <img src={Whatsapp} className='w-100 p-2' alt=''/>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default Footer
