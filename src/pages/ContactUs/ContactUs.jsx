import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import phone  from '../../Assets/ContactUs/phone-call.png'
import email  from '../../Assets/ContactUs/mail.png'
import img  from '../../Assets/ContactUs/pngwing.com - 2023-1 (1).png'
import { Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser'
import './ContactUs.css'
const ContactUs = () => {
  // <a href="mailto:mmmm@gmail.com">Info@al-Sherbi.com</a>

  const handelmail =()=>{
    window.open('mailto:Info@al-Sherbi.com')
  }
  const handleClick = () => {
    
    window.open('https://wa.me/966567787056');
  };
    const { lang } = useSelector((x) => x.languageData);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        emailjs.sendForm('service_4nl5snr','template_wzbjv7o',event.target,'xSZX_PAmN7oFuWw83')
        console.log("dddddd");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };
  return (
    <div>
       {lang==='ar'?
       <>
      <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid'>
      <h3 className='text-white  text-start'>{"Connect With Us"}</h3>
      </div>
      </div>
      <div className='container'>
      <div className='row gy-3 my-5'>
        <div style={{backgroundColor:'#1D479B'}} className='col-md-8 rounded-5   d-flex justify-content-center align-items-center'>
            <div className='' >
                <div className='mb-4 d-flex align-items-center justify-content-center my-auto'>
                   <div >
                   <p className='text-white fs-3 pt-3 me-5' style={{cursor:'pointer'}} onClick={handleClick}>00966565173187</p>
                    </div>
                    <div className='border  ms-5 border-1 p-1 border-white rounded-circle'>
                            <img src={phone} className='m-1' style={{width:'40px',height:'40px'}} alt=''/>
                    </div>
                 
                </div>
                <div className='d-flex align-items-center justify-content-center my-auto'>
                   <div >
                   <p className='text-white fs-3 pt-3 me-5' onClick={handelmail}>Info@al-Sherbi.com</p>
                    </div>
                    <div className='border border-1 ms-4 p-1 border-white rounded-circle'>
                            <img src={email} className='m-1' style={{width:'40px',height:'40px'}} alt=''/>
                    </div>
                 
                </div>
            </div>
        </div>
        <div className='col-md-4'>
            <img src={img} className='w-100' alt=''/>
        </div>

      </div>

      </div>
    
      <div className='container' style={{direction:'rtl'}}>
      <Form className="contact-form">
      <Form.Group controlId="formName">
        <Form.Control type="text" placeholder="ادخل اسمك" className="shadow-lg" />
      </Form.Group>

      <Form.Group className='my-3' controlId="formEmail">
        <Form.Control type="email" placeholder="رقم الجوال" className="shadow-lg" />
      </Form.Group>

      <Form.Group controlId="formPhone">
        <Form.Control type="text" placeholder="البريد الالكتروني" className="shadow-lg" />
      </Form.Group>

      <Form.Group className='my-3' controlId="formMessage">
        <Form.Control as="textarea" rows={3} placeholder="ادخل رسالتك" className="shadow-lg" />
      </Form.Group>

      <div className='w-100 mb-5 m-auto text-center'>
      <div style={{cursor:'pointer',width:'130px',fontSize:'18px'}} className={`mx-auto ${lang === 'ar' ? 'ms-auto ReadMore' : 'me-auto ReadMore'} px-4 py-2`}>{"ارسال"}</div>

      </div>
    </Form>
      </div>
      </>:
     

     
      <>
      <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid'>
      <h3 className='text-white  text-start'>{"Connect With Us"}</h3>
      </div>
      </div>
      <div className='container'>
      <div className='row gy-3 my-5'>
      <div className='col-md-4'>
            <img src={img} className='w-100' alt=''/>
        </div>
        <div style={{backgroundColor:'#1D479B'}} className='col-md-8 rounded-5   d-flex justify-content-center align-items-center'>
            <div className='' >
                <div className='mb-4 d-flex align-items-center justify-content-center my-auto'>
                <div className='border  me-5 border-1 p-1 border-white rounded-circle'>
                            <img src={phone} className='m-1' style={{width:'40px',height:'40px'}} alt=''/>
                    </div>
                   <div >
                   <p className='text-white fs-3 pt-3 me-5' style={{cursor:'pointer'}} onClick={handleClick}>00966565173187</p>
                    </div>
                 
                 
                </div>
                <div className='d-flex align-items-center justify-content-center my-auto'>
                <div className='border border-1 me-4 p-1 border-white rounded-circle'>
                            <img src={email} className='m-1' style={{width:'40px',height:'40px'}} alt=''/>
                    </div>
                   <div >
                   <p className='text-white fs-3 pt-3 me-5' onClick={handelmail}>Info@al-Sherbi.com</p>
                    </div>
                    
                 
                </div>
            </div>
        </div>
        

      </div>

      </div>
    
      <div className='container' style={{direction:'ltr'}}>
      <Form className="contact-form" onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter your name"
          className="shadow-lg"
          onChange={handleInputChange}
          value={formData.name}
        />
      </Form.Group>

      <Form.Group className="my-3" controlId="formEmail">
        <Form.Control
          type="phone"
          name="phone"
          placeholder="Mobile number"
          className="shadow-lg"
          onChange={handleInputChange}
          value={formData.phone}
        />
      </Form.Group>

      <Form.Group controlId="formPhone">
        <Form.Control
          type="email"
          name="email"
          placeholder="Email"
          className="shadow-lg"
          onChange={handleInputChange}
          value={formData.email}
        />
      </Form.Group>

      <Form.Group className="my-3" controlId="formMessage">
        <Form.Control
          as="textarea"
          rows={3}
          name="message"
          placeholder="Enter your message"
          className="shadow-lg"
          onChange={handleInputChange}
          value={formData.message}
        />
      </Form.Group>

      <div className="w-100 mb-5 m-auto text-center">
        <button
          type="submit"
          style={{ cursor: "pointer", width: "130px", fontSize: "18px" }}
          className={`mx-auto ${
            lang === "ar" ? "ms-auto ReadMore" : "me-auto ReadMore"
          } px-4 py-2`}
        >
          {"ارسال"}
        </button>
      </div>
    </Form>
      </div>
      </>
      }


    </div>
  )
}

export default ContactUs
