import React from 'react'
import { useSelector } from 'react-redux';
import img from '../../Assets/image-1.jpg'
import './ColdStorageRooms.css'
const ColdStorageRooms = () => {
    const { lang } = useSelector((x) => x.languageData);
    return (
 <>
           
         {lang==='ar'?
    <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
   <div className='container-fluid '>
   
   <h3 className='text-white  text-end'>{" غرفة التبريد"}</h3>
   </div>
   </div>:
   <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
   <div className='container-fluid'>
   <h3 className='text-white  text-start'>{"Cold storage rooms "}</h3>
   </div>
   </div>}
   
     <div className='coldrooms position-relative' style={{height:'100vh', backgroundImage: `url(${img})` }}>
     

    <div className='position-absolute top-0 start-0 w-100 h-100 ' style={{backgroundColor:'#040115D4'}}>




{lang==='ar'?
<>
<p   style={{color:'#FFFFFF',fontSize:'22px',fontWeight:'lighter'}} className=' my-5 w-75 me-5 ms-auto text-end'>
نتميز في أعمالنا في غرف التبريد بدقة العمل في تركيب وتوريد غرف
ومستودعات التبريد والتجميد ولدينا من الخبرة ما يكفي لفهم متطلبات
عملائنا الكرام وإنتاج المشاريع المطلوبة بشكل أفضل، والذي يرتكز
أساسه على تطابق مشاريعنا مع معايير البناء والكهرباء والتأسيسات
الأخرى والتلاؤم معها ، وهذا أكبر دليل على خبرتنا وخاصة في
الاستشارات التقنية والتنظيمية في هذا المجال
 </p>

 <p   style={{color:'#FFFFFF',fontSize:'22px',fontWeight:'lighter'}} className=' my-5 w-75 me-5 ms-auto text-end'>
 ولدينا فريق ديناميكي فعال من أجل تقديم مشاريع ذات جودة
عالية وبأقل طاقة وتكلفة ممكنة وبشكل صديق للبيئة، ولذلك
أعمالنا في غرف التبريد تصنف على مرتبة عالية محليا في مجال
,الغرف ومستودعات التبريد والتجميد، ونعمل على توريد وتركيب
منتجات أصلية  بالإضافة الى تقديم أفضل الحلول في هذا المجال
وما زلنا نثابر بتقديم ماهو جديد ومفيد في هذا المجال </p>
</>

:
<>
<p   style={{color:'#FFFFFF',fontSize:'22px',fontWeight:'lighter'}} className=' my-5 w-75 ms-5 me-auto text-start'>
What differentiate our work in cooling rooms is the accuracy in installing and supplying cooling and
freezing rooms and warehouses. We have sufficient experience to understand our customers’
requirements and produce the required projects in a better way, which is based on the conformity of
our projects with the standards of construction, electricity and other institutions and their compatibility
with them, and this is the greatest evidence of our experience. Especially in technical and organizational
consulting in this field. </p>

 <p   style={{color:'#FFFFFF',fontSize:'22px',fontWeight:'lighter'}} className=' my-5 w-75 ms-5 me-auto text-start'>
 We have a dynamic and effective team in order to provide high-quality projects at the lowest possible
energy and cost and in an environmentally friendly manner. Therefore, our work in cooling rooms is
locally highly ranked in the field of cooling and freezing rooms and warehouses, and we work to supply
and install original products in addition to providing the best solutions in this field. We still persevere to
provide all what is new and useful in this field.</p>
</>

}
    </div>
 </div>
 </>
  )
}

export default ColdStorageRooms
