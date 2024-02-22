import React from 'react'
import './WhyAreWeSpecialComponents.css'
const Why_Are_We_SpecialComponents = ({icon ,title,discription}) => {
  return (
    <div className='text-center h-100  pb-4' >
    <img src={icon} className='mt-1 icon-wrapper' style={{position:'relative',zIndex:100000, width:'35px',height:'35px'}} alt=''/>
<h5 className='my-1' style={{color:'#1D479B'}}>{title}</h5>
<p  style={{color:'#1D479B'}}>{discription}</p>
    </div>
  )
}

export default Why_Are_We_SpecialComponents
