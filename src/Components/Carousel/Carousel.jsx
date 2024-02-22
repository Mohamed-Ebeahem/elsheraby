import React, { useRef } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ph1 from '../../Assets/Slider/Untitled-2.png'
import ph2 from '../../Assets/Slider/basic.png'
import ph3 from '../../Assets/Slider/carrier.png'
import ph4 from '../../Assets/Slider/coolex.png'
import ph5 from '../../Assets/Slider/daikin.png'
import ph6 from '../../Assets/Slider/fe.png'
import ph7 from '../../Assets/Slider/general.png'
import ph8 from '../../Assets/Slider/gree.png'
import ph9 from '../../Assets/Slider/haier.png'
import ph10 from '../../Assets/Slider/lg.png'
import ph11 from '../../Assets/Slider/mando.png'
import ph12 from '../../Assets/Slider/midea.png'
import ph13 from '../../Assets/Slider/mitsubishi electric.png'
import ph14 from '../../Assets/Slider/rheem.png'
import ph15 from '../../Assets/Slider/samsung.png'
import ph16 from '../../Assets/Slider/smart gold.png'
import ph17 from '../../Assets/Slider/system.png'
import ph18 from '../../Assets/Slider/tcl.png'
import ph19 from '../../Assets/Slider/toshiba.png'
import ph20 from '../../Assets/Slider/trane.png'
import ph21 from '../../Assets/Slider/westinghouse.png'
import ph22 from '../../Assets/Slider/york.png'
import ph23 from '../../Assets/Slider/zamil.png'
import './Carousel.css'
import { useSelector } from 'react-redux';

const MyCarousel = () => {
    const carouselRef = useRef(null);
    const { lang } = useSelector((x) => x.languageData);

    const options = {
        items: 10,
        loop: true,
        dots: false,
      };
      const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    };
    return (
    <>
{lang==='ar'?
<div className=' mb-5 pb-5' style={{backgroundColor:'#EAEDEF'}}>
          

          <div   className='d-flex  align-items-center ms-5'>
          <div  onClick={handleNext} className='rounded-circle d-flex justify-content-center align-items-center' style={{width:'30px',height:'30px',backgroundColor:'#1D479B',cursor:'pointer'}}>
          
          <h5 className='text-white'>{"<"}</h5>
         </div>
         <div onClick={handlePrev} className={`ms-5 rounded-circle d-flex justify-content-center align-items-center`} style={{width:'30px',height:'30px',backgroundColor:'#1D479B',cursor:'pointer'}}>
         <h5 className='text-white'>{">"}</h5>
         </div>
        
</div>
      </div>
      :
      
      <div className=' mb-5 pb-5 text-end ' style={{backgroundColor:'#EAEDEF',direction:'rtl'}}>
          

          <div   className='d-flex  align-items-center me-5'>
         <div onClick={handlePrev} className={`ms-5 rounded-circle d-flex justify-content-center align-items-center`} style={{width:'30px',cursor:'pointer',height:'30px',backgroundColor:'#1D479B'}}>
          <h5 className='text-white'>{"<"}</h5>
         </div>
         <div  onClick={handleNext} className='rounded-circle d-flex justify-content-center align-items-center' style={{width:'30px',cursor:'pointer',height:'30px',backgroundColor:'#1D479B'}}>
          <h5 className='text-white'>{">"}</h5>
         </div>
</div>
      </div>}
            <OwlCarousel
        ref={carouselRef}
        className="owl-theme align-items-center d-flex mt-5"
        {...options}
    >        <div>
                <img className='' style={{width:'100px'}} src={ph1} alt="Slide 1" />
            </div>
            <div>
                <img className='' style={{width:'100px'}} src={ph2} alt="Slide 1" />
            </div>
            <div>
                <img className='' style={{width:'100px'}} src={ph3} alt="Slide 1" />
            </div>
            <div>
                <img className='' style={{width:'100px'}} src={ph4} alt="Slide 1" />
            </div>
            <div>
                <img className='' style={{width:'100px'}} src={ph5} alt="Slide 1" />
            </div>
            <div>
                <img className='' style={{width:'100px'}} src={ph6} alt="Slide 1" />
            </div>
            <div>
                <img className='' style={{width:'100px'}} src={ph7} alt="Slide 1" />
            </div>
            <div>
                <img className='' style={{width:'100px'}} src={ph8} alt="Slide 1" />
            </div>
            <div>
                <img className='' style={{width:'100px'}} src={ph9} alt="Slide 1" />
            </div>
            <div>
                <img className='' style={{width:'100px'}} src={ph10} alt="Slide 1" />
            </div>
            <div>
                <img className='' style={{width:'100px'}} src={ph11} alt="Slide 1" />
            </div>
            <div>
                <img className='' style={{width:'100px'}} src={ph12} alt="Slide 1" />
            </div>
            <div>
                <img className='' style={{width:'100px'}} src={ph13} alt="Slide 1" />
            </div>
            <div>
                <img className='' style={{width:'100px'}} src={ph14} alt="Slide 1" />
            </div>
            <div>
                <img className='' style={{width:'100px'}} src={ph15} alt="Slide 1" />
            </div>
            <div>
                <img className='' style={{width:'100px'}} src={ph16} alt="Slide 1" />
            </div>
            <div>
                <img className='' style={{width:'100px'}} src={ph17} alt="Slide 1" />
            </div>
            <div>
                <img className='' style={{width:'100px'}} src={ph18} alt="Slide 1" />
            </div>
            <div>
                <img className='' style={{width:'100px'}} src={ph19} alt="Slide 1" />
            </div>
            <div>
                <img className='' style={{width:'100px'}} src={ph20} alt="Slide 1" />
            </div>
            <div>
                <img className='' style={{width:'100px'}} src={ph21} alt="Slide 1" />
            </div>
            <div>
                <img className='' style={{width:'100px'}} src={ph22} alt="Slide 1" />
            </div>
            <div>
                <img className='' style={{width:'100px'}} src={ph23} alt="Slide 1" />
            </div>

          
            </OwlCarousel>
          
    </>
    );
};

export default MyCarousel;
