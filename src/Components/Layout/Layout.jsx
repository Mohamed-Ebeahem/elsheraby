import React from 'react'

import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import img from '../../Assets/whatsapp(1).png'
import WhatsAppButton from 'react-whatsapp-button';

export default function Layout() {
  const phoneNumber ="00966599253253"
  const naviagate = useNavigate()
  const handleClick = () => {
    
    window.open('https://wa.me/966567787056');
  };

  return (
    <div className='position-relative'>

    <Navbar/>
    {/*  */}
    <Outlet/>
    <Footer/>
   
{/* <a href="https://wa.me/966567787056"></a> */}
    <div onClick={handleClick}   className={` position-fixed rounded-circle mt-4 text-white text-center d-flex justify-content-center align-items-center`} style={{bottom:10,left:10,width:'50px',height:'50px' ,backgroundColor:'#1D479B',zIndex:9999999999999,cursor:'pointer'}}><img className='w-100' src={img} alt=''/></div>

    </div>
  )
}
