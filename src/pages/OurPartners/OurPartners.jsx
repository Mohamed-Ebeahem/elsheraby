import React from 'react'
import ph1 from '../../Assets/parteners/toshiba.png'
import ph2 from '../../Assets/parteners/york.png'
import ph3 from '../../Assets/parteners/zamil.png'
import ph4 from '../../Assets/parteners/gree.png'
import ph5 from '../../Assets/parteners/samsung.png'
import ph6 from '../../Assets/parteners/daikin.png'
import ph7 from '../../Assets/parteners/lg.png'
import ph8 from '../../Assets/parteners/tcl.png'
import ph9 from '../../Assets/parteners/haier.png'
import ph10 from '../../Assets/parteners/carrier.png'
import ph11 from '../../Assets/parteners/westinghouse.png'
import ph12 from '../../Assets/parteners/coolex.png'
import ph13 from '../../Assets/parteners/system.png'
import ph14 from '../../Assets/parteners/general.png'
import ph15 from '../../Assets/parteners/fe.png'
import ph16 from '../../Assets/parteners/trane.png'
import ph17 from '../../Assets/parteners/smart gold.png'
import ph18 from '../../Assets/parteners/basic.png'
import ph19 from '../../Assets/parteners/midea.png'
import ph20 from '../../Assets/parteners/mando.png'
import ph21 from '../../Assets/parteners/rheem.png'
import ph22 from '../../Assets/parteners/Untitled-2.png'
import ph23 from '../../Assets/parteners/mitsubishi electric.png'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
const OurPartners = () => {
    const { t } = useTranslation();
    const { lang } = useSelector((x) => x.languageData);

  return (
    <div>
       {lang==='ar'?
       <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid'>
      <h3 className='text-white  text-end'>{t("Our_Partners")}</h3>
      </div>

     
      
      </div>:
      <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid'>
      <h3 className='text-white  text-start'>{t("Our_Partners")}</h3>
      </div>

     
      
      </div>}
        <div className='m-auto mb-5' style={{width:'90%'}}>
        <div className='row gx-5 gy-2 m-0'>
            <div className='col-md-2 d-flex justify-content-center align-items-center'>
                <img className='w-100' src={ph1} alt=""/>
                </div>
                <div className='col-md-3  d-flex justify-content-center align-items-center'>
                <img className='w-75' src={ph2} alt=""/>
                </div>
                <div className='col-md-2  d-flex justify-content-center align-items-center'>
                <img className='w-100' src={ph3} alt=""/>
                </div>
                <div className='col-md-2  d-flex justify-content-center align-items-center'>
                <img className='w-100' src={ph4} alt=""/>
                </div>
                <div className='col-md-3  d-flex justify-content-center align-items-center'>
                <img className='w-75' src={ph5} alt=""/>
                </div>

                
                <div className='col-md-2  d-flex justify-content-center align-items-center'>
                <img className='w-100' src={ph6} alt=""/>
                </div>
                <div className='col-md-3  d-flex justify-content-center align-items-center'>
                <img className='w-75' src={ph7} alt=""/>
                </div>
                <div className='col-md-2  d-flex justify-content-center align-items-center'>
                <img className='w-100' src={ph8} alt=""/>
                </div>
                <div className='col-md-2  d-flex justify-content-center align-items-center'>
                <img className='w-100' src={ph9} alt=""/>
                </div>
                <div className='col-md-3  d-flex justify-content-center align-items-center'>
                <img className='w-75' src={ph10} alt=""/>
                </div>



                <div className='col-md-3  d-flex justify-content-center align-items-center'>
                <img className='w-75' src={ph11} alt=""/>
                </div>
                <div className='col-md-3  d-flex justify-content-center align-items-center'>
                <img className='w-75' src={ph12} alt=""/>
                </div>
                <div className='col-md-3  d-flex justify-content-center align-items-center'>
                <img className='w-75' src={ph13} alt=""/>
                </div>
                <div className='col-md-3  d-flex justify-content-center align-items-center'>
                <img className='w-75' src={ph14} alt=""/>
                </div>


                <div className='col-md-3  d-flex justify-content-center align-items-center'>
                <img className='w-75' src={ph15} alt=""/>
                </div>
                <div className='col-md-3  d-flex justify-content-center align-items-center'>
                <img className='w-75' src={ph16} alt=""/>
                </div>
                <div className='col-md-3  d-flex justify-content-center align-items-center'>
                <img className='w-75' src={ph17} alt=""/>
                </div>
                <div className='col-md-3  d-flex justify-content-center align-items-center'>
                <img className='w-75' src={ph18} alt=""/>
                </div>



                <div className='col-md-2  d-flex justify-content-center align-items-center'>
                <img className='w-100' src={ph19} alt=""/>
                </div>
                <div className='col-md-2  d-flex justify-content-center align-items-center'>
                <img className='w-100' src={ph20} alt=""/>
                </div>
                <div className='col-md-3  d-flex justify-content-center align-items-center'>
                <img className='w-75' src={ph21} alt=""/>
                </div>
                <div className='col-md-2  d-flex justify-content-center align-items-center'>
                <img className='w-100' src={ph22} alt=""/>
                </div>
                  <div className='col-md-3  d-flex justify-content-center align-items-center'>
                <img className='w-75' src={ph23} alt=""/>
                </div>


                </div>

        </div>


      
    </div>
  )
}

export default OurPartners
