import React from 'react'
const BolgComponent = ({id,text,image}) => {
  return (
    <div className='position-relative rounded-5'>
      <img className='w-100 rounded-5' src={image} alt=''/>
      <div className='rounded-5 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 end-0 start-0' style={{background:'#000824E7'}}>
        <p className='text-white m-auto w-75 text-center'>{text}</p>
      </div>
    </div>
  )
}

export default BolgComponent
