import React from 'react'
import image1 from '../../Assets/images/Path 1019 (1).png'
import image2 from '../../Assets/images/Path 1019.png'
import { useSelector } from 'react-redux';
const WhyAreWeSpecialComponentsFooter = ({text,icon}) => {
  const { lang } = useSelector((x) => x.languageData);
  return (
    <div className='d-flex mt-1  w-100'>
    <div className=' position-relative mt-4 d-flex' style={{width:'35px',height:'35px'}}>
    <img className=' w-100 '  src={lang === 'ar' ?image1 : image2}  style={{zIndex:12}} alt=''/>
    <img className=' w-100 d-flex  bg-white' style={{borderTop:'#003E6E solid 1px',borderBottom:'#003E6E solid 1px', marginLeft:lang==='ar'?'':'-40%',marginRight:lang==='ar'?'-40%':'',zIndex:0,paddingTop:5,paddingBottom:5}}  src={icon} alt=''/>
     

    </div>
      <div className='w-75 bg-white mt-4 px-2 bg-black ' style={{borderLeft:lang === 'ar'?'#003E6E solid 1px':'',borderRight:lang === 'ar'?'':'#003E6E solid 1px',borderTop:'#003E6E solid 1px',borderBottom:'#003E6E solid 1px', paddingTop:5,paddingBottom:4}}>
     {text}
     </div>
      
    </div>
  )
}

export default WhyAreWeSpecialComponentsFooter
