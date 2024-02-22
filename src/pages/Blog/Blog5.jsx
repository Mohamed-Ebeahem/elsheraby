import React from 'react'
import arrow from '../../Assets/images/Path 1039.png'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Blog5 = () => {
    const { lang } = useSelector((x) => x.languageData);
    let navigate = useNavigate()
  return (
    <div>
    
      <div>
    {lang==='ar'?
       <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid d-flex justify-content-between'>
      <img src={arrow} onClick={()=>navigate('/Blog6')} className='ms-5' style={{width:'40px',height:'40px'}} alt=''/>
      
      <h3 className='text-white text-end'>{"أنواع الدكت والجريلات والعزل الخاص بهم"}</h3>
      </div>

     
      
      </div>:
      <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid d-flex justify-content-between'>
      <h3 className='text-white  text-start'>{"Types of ducts, grills, and their insulation"}</h3>
      <img src={arrow} onClick={()=>navigate('/Blog6')} className='me-5' style={{width:'40px',height:'40px'}} alt=''/>
      </div>

     
      
      </div>}


      {lang==='ar'?
      <>
        <div style={{direction:'rtl'}} className='me-4 mt-4'>   
        <p  style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className='mb-4 text-end'>
        يعد نظام تكييف الهواء مثل أوركسترا، حيث تتآزر مكونات متعددة لتشكيل سيمفونية من الهواء البارد أو الساخن
للمساحات. يقع السر في التفاعل السليم بين مكونات النظام، حيث تعمل بتناغم لتحقيق النتيجة المطلوبة. يركب
مكيف الهواء العديد من الأجزاء والتكنولوجيات المختلفة مثل مجاري الهواء والجريلات وأنظمة العزل، والتي
سنتناولها بتفصيل في هذا المقال. سنستعرض أنواع مجاري الهواء وأنواع الجريلات، بالإضافة إلى أهمية العزل
.ودوره في ضمان الأداء الأمثل لنظام التكييف           </p>
           <div style={{color:'#003157'}} className='d-flex align-items-baseline'>
            <span className='ms-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'>أنواع مجاري الهواء من حيث المادة المصنوعة منها </h5>
            <span className='me-2 fs-4 fw-bold'>:</span>
           </div>

           <div className='d-flex align-items-baseline me-3'>
            <span className='ms-2 fs-4 fw-bold'>.</span>
            <h6  style={{color:'#003157',fontSize:'20px',fontWeight:'lighter'}} className=' text-end'>
            مجاري الصفائح المعدنية 	           </h6>
          
            </div>
            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-5 text-end'>
            ،يمكن أن تكون مجاري الهواء المصنوعة من الحديد المجلفن أو الألومنيوم مستديرة أو بيضاوية أو مستطيلة
تمتاز بأنها الأكثر متانة والأقل احتمالا لإيواء العفن، كما تملك القدرة على مقاومة الصدأ، خاصة الفولاذ المجلفن
.بطبقة من الزنك      </p>


<div className='d-flex align-items-baseline me-3'>
            <span className='ms-2 fs-4 fw-bold'>.</span>
            <h6  style={{color:'#003157',fontSize:'20px',fontWeight:'lighter'}} className=' text-end'>
            مجاري الألياف الزجاجية المضغوطة  	           </h6>
          
            </div>
            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-5 text-end'>

            يحتوي هذا النوع من القنوات على طبقتين: الألياف الزجاجية غير العضوية والمضغوطة مغلفة بورق القصدير
.لمنع الهواء من التسرب، عادة ما يكون هذا النوع هو الأقل تكلفة، ويمنع الضوضاء، وهو معزول جيدا بالفعل
الجانب السلبي؟ سطح الألياف الزجاجية الخام يمنع تدفق الهواء، إذا كنت تشك في أن لديك مجاري هواء قديمة
من هذا النوع، فلا تحاول تنظيفها لأن تلف سطحها سيؤدي إلى إطلاق الألياف الزجاجية في الهواء وفي جميع
.أنحاء منزلك
      </p>



<div className='d-flex align-items-baseline me-3'>
            <span className='ms-2 fs-4 fw-bold'>.</span>
            <h6  style={{color:'#003157',fontSize:'20px',fontWeight:'lighter'}} className=' text-end'>
            عزل دكتات التكييف  	           </h6>
          
            </div>
            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-5 text-end'>

            كثيرا ما يتجاهل العديد من مالكي أنظمة التكييف العزل المناسب لدكتات الهواء الخاصة بهم، وقد يجد الكثيرون
أنه غير ضروري لأن نظامهم غير المعزول يعمل تماما بالوقت الحالي، ولكن ماذا لو قلنا لك أن الكثير من الطاقة
اللازمة لتشغيل النظام تذهب سدى؟ كما أنه يساعد أيضا في قِصَر عمر دكتات الهواء ومكونات النظام الأخرى؟
      </p>
      <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-5 text-end'>
      تستخدم رولات عزل الألياف الزجاجية (الصوف الصخري) في عزل دكتات التكييف ويتم تثبيتها بالدكت باستخدام
نوع الشريط اللاصق المعدني الموصي به من قبل الشركة المصنعة للعزل، كما يتم قص رولات العزل بحيث
.تتناسب مع عرض وطول الدكت وبما يجعل الألياف الزجاجية ملفوفة بشكل غير مضغوط
</p>


<div className='d-flex align-items-baseline me-3'>
            <span className='ms-2 fs-4 fw-bold'>.</span>
            <h6  style={{color:'#003157',fontSize:'20px',fontWeight:'lighter'}} className=' text-end'>
            مخارج الهواء (الجريلات)  	           </h6>
          
            </div>
            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-5 text-end'>
            الجريلات هي أغطية جذابة في نظام توزيع الهواء تستخدم لتغطية مخرج هواء التغذية ومخرج الهواء العائد
للنظام، وتختلف في أنواعها من حيث مكان التركيب إلى نوع يتم تركيبه في الحائط وآخر في السقف، أما من
:حيث المادة المصنوعة منها فتنقسم للأنواع التالية
      </p>

      <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-5 text-end'>
      جريل اللوفر: هي أكثر أنواع الجريلات شيوعا، لديها شفرات ثابتة لا تسمح بأي نوع من التحكم في اتجاه تدفق-
الهواء، وتكون مصنوعة بالعادة من الألومنيوم أو الحديد المجلفن ولا ينصح بالحديد المجلفن كونه أثقل وأكثر
.عرضة للصدأ
      </p>
      <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-5 text-end'>
      جريلات الانحراف لها نوعان: انحراف باتجاه واحد، وانحراف مزدوج، وجريلات الانحراف المزدوج أكثر شيوعا من-
.جريلات الانحراف المفردة، ومع ذلك فإن جريلات الانحراف بشكل عام ليست شائعة
      </p>
      <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-5 text-end'>
      عادة ما توفر جريلات الانحراف الفردي تحكم في اتجاه تدفق الهواء الرأسي فقط، وتسمح جريلات الانحراف
المزدوج بالتحكم في اتجاه تدفق الهواء الرأسي والأفقي. أما بالنسبة للمادة المصنوعة منها فإن جريلات
.الانحراف مصنوعة إما من الألمنيوم أو الحديد المجلفن مع كون الأول أخف وزنا والأخير أرخص سعرا      </p>
      <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-5 text-end'>
      جريل اللوفر: هي أكثر أنواع الجريلات شيوعا، لديها شفرات ثابتة لا تسمح بأي نوع من التحكم في اتجاه تدفق-
الهواء، وتكون مصنوعة بالعادة من الألومنيوم أو الحديد المجلفن ولا ينصح بالحديد المجلفن كونه أثقل وأكثر
.عرضة للصدأ
      </p>

      <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-5 text-end'>
      يعد فهم أنواع مجاري الهواء والجريلات وأهمية العزل ضروريًا لضمان تشغيل نظام التكييف بأفضل أداء. تقدم
(الشربي) تشكيلة واسعة من الجريلات ومجاري الهواء بأعلى معايير الجودة، مما يجعلك تختار بناءً على احتياجاتك
.واستفادتك الكاملة
      </p>
      <p  style={{color:'#003157',fontSize:'20px',fontWeight:'lighter'}} className='me-5 text-end'>
      قم بزيارة مشارعنا السابقة للاطلاع على تشكيلتنا المتنوعة  وتواصل معنا لاختيار الحل الأمثل لتكييف منزلك
.أو مكتبك او مركزك       </p>
        </div>
      </>:
      <>
        <div style={{direction:'rtl'}} className='ms-4 mt-4'>   
        <p  style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className='mb-4 text-start'>
        An air conditioning system is like an orchestra, where multiple components combine to form a symphony of cool or
hot air for spaces. The secret lies in the proper interaction between the components of the system, as they work in
harmony to achieve the desired result. An air conditioner includes many different parts and technologies, such
as air ducts, grills, and insulation systems, which we will discuss in details in this article. We will review the types
of air ducts and grilles, in addition to the importance of insulation and its role in ensuring optimal performance of
the air conditioning system.       </p>
          

           <div className='d-flex align-items-baseline me-3' style={{direction:'ltr'}}>
            <span className='me-2 fs-4 fw-bold'>.</span>
            <h6  style={{color:'#003157',fontSize:'20px',fontWeight:'lighter'}} className='fw-bold text-start'>
            Sheet metal ducts 	           </h6>
          
            </div>
            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-3 text-start'>
            Ductwork made of galvanized iron or aluminum can be round, oval, or rectangular. It is the most durable, least
likely to harbor mold, and has the ability to resist rust, especially galvanized steel with a zinc coating.
     </p>


<div className='d-flex align-items-baseline me-3' style={{direction:'ltr'}}>
            <span className='me-2 fs-4 fw-bold'>.</span>
            <h6  style={{color:'#003157',fontSize:'20px',fontWeight:'lighter'}} className='fw-bold text-start'>
            Pressed fiberglass ducts  	           </h6>
          
            </div>
            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-3 text-start'>
            This type of duct has two layers: inorganic, compressed fiberglass wrapped in tin foil to prevent air from escaping.
This type is usually the least expensive, prevents noise, and is already well insulated. the negative side? The rough
fiberglass surface prevents airflow, if you suspect you have old air ducts of this type, do not attempt to clean them
as their surface will be damaged.
It will release fiberglass into the air and throughout your home.
      </p>



<div className='d-flex align-items-baseline me-3' style={{direction:'ltr'}}>
            <span className='me-2 fs-4 fw-bold'>.</span>
            <h6  style={{color:'#003157',fontSize:'20px',fontWeight:'lighter'}} className='fw-bold text-start'>
            Insulating air conditioning ducts  	           </h6>
          
            </div>
            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-3 text-start'>
            Many HVAC owners often ignore proper insulation for their air ducts, and many may find it unnecessary since their
uninsulated system is working perfectly well at the moment, but what if we told you that much of the energy needed
to run the system goes to waste? It also helps shorten the life of air ducts and other system components.
      </p>
      <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-3 text-start'>
      Fiberglass insulation rolls (rock wool) are used to insulate air conditioning ducts and are attached to the duct using
the type of metal adhesive tape recommended by the insulation manufacturer. Insulation rolls are also cut to fit the
width and length of the duct, making the fiberglass wrapped in a non-compressed manner.</p>


<div className='d-flex align-items-baseline me-3' style={{direction:'ltr'}}>
            <span className='me-2 fs-4 fw-bold'>.</span>
            <h6  style={{color:'#003157',fontSize:'20px',fontWeight:'lighter'}} className='fw-bold text-start'>
            Air outlets (grilles)</h6>
          
            </div>
            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-3 text-start'>
            Grills are attractive covers in the air distribution system used to cover the supply air outlet and the air outlet returning
to the system. They differ in their types in terms of installation location to one type that is installed in the wall and
another in the ceiling. As for the material they are made of, they are divided into the following types:      </p>


<div className='d-flex align-items-baseline me-3' style={{direction:'ltr'}}>
            <span className='me-2 fs-4 fw-bold'>.</span>
            <h6  style={{color:'#003157',fontSize:'20px',fontWeight:'lighter'}} className='fw-bold text-start'>
             Louvre Grill</h6>
          
            </div>
            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-3 text-start'>
            Louver grills are the most common type of grills. They have fixed blades that do not allow any kind of control over the
direction of air flow. They are usually made of aluminum or galvanized iron. Galvanized iron is not recommended as it
is heavier and more susceptible to rust.    </p>


<div className='d-flex align-items-baseline me-3' style={{direction:'ltr'}}>
            <span className='me-2 fs-4 fw-bold'>.</span>
            <h6  style={{color:'#003157',fontSize:'20px',fontWeight:'lighter'}} className='fw-bold text-start'>
            Linear Grill(Linear) </h6>
          
            </div>
            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-3 text-start'>
            Linear grills are more commonly used in lobbies and halls because they are more aesthetically attractive than louvre
grills and are also more expensive. Like the previous type, they do not have any type of control over the direction of the
air flow and most of them are made of aluminum as well.   </p>

<div className='d-flex align-items-baseline me-3' style={{direction:'ltr'}}>
            <span className='me-2 fs-4 fw-bold'>.</span>
            <h6  style={{color:'#003157',fontSize:'20px',fontWeight:'lighter'}} className='fw-bold text-start'>
             Deviation Grill </h6>
          
            </div>
            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-3 text-start'>
            Deviation grilles are of two types: single-way deviation and double deviation. Double grilles are more common than
single deviation grilles, however, deviation grilles in general are not common.  </p>
<p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-3 text-start'>
Single deviation grilles usually provide control of the vertical airflow direction only, and double deviation grilles allow
control of both vertical and horizontal airflow direction. As for the material it is made of, deviation grilles are made of
either aluminum or galvanized iron, with the former being lighter in weight and the latter being cheaper in price.
  </p>
  <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-3 text-start'>
  Understanding the types of ductwork and grilles and the importance of insulation is essential to ensuring your HVAC
system operates at its best performance. Al-sherbi offers a wide variety of grills and air ducts with the highest quality
standards, making your choice based on your needs and full benefit.  </p>
<p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-3 text-start'>
Visit our previous projects to see our diverse collection and contact us to choose the ideal solution for your home, office
 or center air conditioning system.  </p>

        </div>
      </>
      }
    </div>
    </div>

  )
}

export default Blog5
