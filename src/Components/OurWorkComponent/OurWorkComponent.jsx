import React from 'react';
import './OurWorkComponent.css';
// import imageBack from '../../Assets/ourWorkImages/image- 19.jpg'; 

const OurWorkComponent = ({imageBack,title,addtion}) => {
  return (
    <div>
      <div className='rounded-4  position-relative backImage m-auto' style={{width:'90%'}}>
      <img  style={{height:"175px"}} className='w-100 rounded-5' src={imageBack}alt=''/>
      <div className=' text-white d-flex flex-column  justify-content-center rounded-5 text-center position-absolute top-0 end-0 start-0 bottom-0' style={{backgroundColor:'#000824E4',zIndex:44}}>
        <div className='p-2 your-hoverable-div'>
        <h6 className='m-auto p-0 m-0'>{title}</h6>
      <h5 className='m-auto p-0 m-0'>{addtion}</h5>
        </div>
      </div>
       
      </div>
    </div>
  );
}

export default OurWorkComponent;
