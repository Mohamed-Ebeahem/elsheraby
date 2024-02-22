import React from 'react'
import './OurServices.css'
import OurWorkComponent from '../../Components/OurWorkComponent/OurWorkComponent'
import img1 from '../../Assets/Services/image- 17.jpg'
import img2 from '../../Assets/Services/image- 19.jpg'
import img3 from '../../Assets/Services/image- 20.jpg'
import img4 from '../../Assets/Services/image- 21.jpg'
import img5 from '../../Assets/Services/image- 22.jpg'
import img6 from '../../Assets/Services/image- 23.jpg'
import img7 from '../../Assets/Services/image- 24.jpg'
import img8 from '../../Assets/Services/image- 26.jpg'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

const OurServices = () => {
    const { t } = useTranslation();
    const { lang } = useSelector((x) => x.languageData);

  return (
    <>
        {lang==='ar'?
        <div>
      <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid'>
      <h3 className='text-white  text-end'>{t("Our_Services")}</h3>
      </div>

     
      
      </div>
      <div className='container-fluid my-5'>
      <div className='row gy-3'>
        <div className='col-md-4'>
            <OurWorkComponent imageBack={img2} title={"القطاع التجاري"}/>
            
        </div>
        <div className='col-md-4'>
            <OurWorkComponent imageBack={img3} title={"حلول التهوية"} addtion={"( VENTILATION )"}/>
        </div>
        <div className='col-md-4'>
            <OurWorkComponent imageBack={img4} title={"تركيب نظام تكييف التبريد المتغير"} addtion={"(VRF , VRV )"}/>
        </div>
        

        <div className='col-md-4'>
            <OurWorkComponent imageBack={img7} title={"تركيب نظام التكييف الصحراوي متعدد المراحل"} addtion={""}/>
        </div>

        <div className='col-md-4'>
            <OurWorkComponent imageBack={img6} title={"تركيب نظام التكييف المركزي المدمج"} addtion={"( PACKAGE UNIT AC )"}/>
        </div>

        <div className='col-md-4'>
            <OurWorkComponent imageBack={img5} title={"غرف التبريد والتجميد"} addtion={""}/>
        </div>

        <div className='col-md-4'>
            <OurWorkComponent imageBack={img1} title={"غرف التبريد والتجميد"} addtion={""}/>
        </div>
        <div className='col-md-4'>
            <OurWorkComponent imageBack={img8}title={"تركيب مجاري الهواء"} addtion={"( DUCT )"}/>
        </div>

        <div className='col-md-4'>
            <OurWorkComponent imageBack={img5} title={"توريد وتركيب وصيانة أنظمة التكييف الذكية والتهوية"} addtion={""}/>
        </div>
      </div>
      </div>
    </div>:
    <div>
      <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid'>
      <h3 className='text-white'>{t("Our_Services")}</h3>
      </div>

     
      
      </div>
      <div className='container-fluid my-5'>
      <div className='row gy-4'>
        <div className='col-md-4'>
            <OurWorkComponent imageBack={img2} title={"Commercial Sector"}/>
            
        </div>
        <div className='col-md-4'>
            <OurWorkComponent imageBack={img3} title={" Ventilation Solutions"} addtion={""}/>
        </div>
        <div className='col-md-4'>
            <OurWorkComponent imageBack={img4} title={"Installing a variable air conditioning system"} addtion={"(VRF , VRV )"}/>
        </div>
        

        <div className='col-md-4'>
            <OurWorkComponent imageBack={img7} title={"Installation of a multi-stage desert air conditioning system"} addtion={"(AIR20)"}/>
        </div>

        <div className='col-md-4'>
            <OurWorkComponent imageBack={img6} title={"Installation of the integrated central air consitioning system"} addtion={"( PACKAGE UNIT AC )"}/>
        </div>

        <div className='col-md-4'>
            <OurWorkComponent imageBack={img5} title={"Installation of a hidden air conditioning system"} addtion={""}/>
        </div>

        <div className='col-md-4'>
            <OurWorkComponent imageBack={img1} title={"Cold and freezing rooms"} addtion={""}/>
        </div>
        <div className='col-md-4'>
            <OurWorkComponent imageBack={img8}title={"Installation of air ducts"} addtion={""}/>
        </div>

        <div className='col-md-4'>
            <OurWorkComponent imageBack={img5} title={"Supply, installation, and maintenance of smart air conditioning and ventilation systems"} addtion={""}/>
        </div>
      </div>
      </div>
    </div>}
    </>
  )
}

export default OurServices
