import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../Assets/logo/logo.png'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import './Navbar.css'
import { toggleLanguage } from '../../store/LanguageSlice';
const Navbar = () => {
  const { t } = useTranslation();
  const {lang} = useSelector((x)=>x.languageData)   
  const dispatch = useDispatch();

  return (
    <div  className={`  ${lang === 'ar' ? 'rtl' : 'ltr'}`} style={{zIndex:49999}}> 
   {/* <div  onClick={() => dispatch(toggleLanguage())}>wwwwwwa</div> */}
   <nav style={{backgroundColor:'#EAEDEF',zIndex:4}} className="navbar navbar-expand-lg pt-3" >
      <div className="container-fluid d-flex w-100 ">
        <NavLink className="navbar- mx-4  " to="/"><img className='w-50 m-0'  src={logo} alt=''/></NavLink>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon " />
        </button>
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul  className={` navbar-nav w-100 d-flex justify-content-evenly   mb-lg-0 ${lang === 'ar' ? 'ms-auto' : 'me-auto'}`} >
      <li className="nav-item ">
          <NavLink className="nav-link px-4"  aria-current="page" to="/">{t('Home')}</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link px-4"  aria-current="page" to="/WhoAreWe">{t('Who_Are_We')}</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link px-4"  to="/ourServices">{t("Our_Services")}</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link px-4"  aria-current="page" to="/OurPartners">{t("Our_Partners")}</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link px-4"  aria-current="page" to="/Blog">{t("Blog")}</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link px-4"  aria-current="page" to="/ContactUs">{t("Contact_Us")}</NavLink>
        </li>
   
        
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
