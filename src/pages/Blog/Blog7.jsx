import React from 'react'
import arrow from '../../Assets/images/Path 1039.png'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Blog7 = () => {
    const { lang } = useSelector((x) => x.languageData);
    let navigate = useNavigate()
  return (
    <div>
    
      <div>
    {lang==='ar'?
       <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid d-flex justify-content-between'>
      <img src={arrow} onClick={()=>navigate('/Blog')} className='ms-5' style={{width:'40px',height:'40px'}} alt=''/>
      
      <h3 className='text-white text-end'>{" أسرار تركيب وصيانة المكيف المخفي المنزلي بشكل احترافي"}</h3>
      </div>

     
      
      </div>:
      <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid d-flex justify-content-between'>
      <h3 className='text-white  text-start'>{"Secrets of installing and maintaining a home hidden air conditioner professionally"}</h3>
      <img src={arrow} onClick={()=>navigate('/Blog')} className='me-5' style={{width:'40px',height:'40px'}} alt=''/>
      </div>

     
      
      </div>}


      {lang==='ar'?
      <>
        <div style={{direction:'rtl'}} className='me-4 mt-4'>   
        <p  style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className='mb-4 text-end'>
        يعتبر تركيب مكيف الهواء في المنزل مهمة لا يجب أن تترك للمحترفين فحسب. في هذه المقالة، سوف نستكشف
.عملية تركيب المكيف المخفي (الكونسيليد)  بالتفصيل ونقدم نصائح لتحقيق الأداء الأمثل والتحكم بالنظام بسهولة        </p>
           <div style={{color:'#003157'}} className='d-flex align-items-baseline'>
            <span className='ms-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'>أهمية اختيار مهندس تكييف محترف</h5>
           </div>


            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-2 text-end'>
            ،يمكن أن تكون مجاري الهواء المصنوعة من الحديد المجلفن أو الألومنيوم مستديرة أو بيضاوية أو مستطيلة
تمتاز بأنها الأكثر متانة والأقل احتمالا لإيواء العفن، كما تملك القدرة على مقاومة الصدأ، خاصة الفولاذ المجلفن
.بطبقة من الزنك      </p>


<div style={{color:'#003157'}} className='d-flex align-items-baseline'>
            <span className='ms-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'>اختيار نوعية النظام المناسب لمنزلك</h5>
           </div>


            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-2 text-end'>
            يتطلب اختيار النظام المثلى لتكييف الهواء فهمًا جيدًا لأنواع الأنظمة المتاحة. يجب أن يكون النظام متوافقًا مع
.هيكل المنزل واحتياجات التبريد والتدفئة     </p>


<div style={{color:'#003157'}} className='d-flex align-items-baseline'>
            <span className='ms-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'>العملية السليمة لتركيب مكيف الهواء المخفي</h5>
           </div>


            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-2 text-end'>
            يجب أن يبدأ تركيب مكيف الهواء المخفي منذ مرحلة بناء المنزل. ينبغي مراعاة الاشتراطات التصميمية وتحديد
.المواقع المثلى لتوجيه الدكتات وتحقيق الأداء المثالي   </p>

<div style={{color:'#003157'}} className='d-flex align-items-baseline'>
            <span className='ms-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'>أسرار الصيانة والاستخدام الفعّال</h5>
           </div>


            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-2 text-end'>
            بعد تركيب المكيف، يجب العناية به بشكل جيد للحفاظ على أداء مثالي. يشمل ذلك الصيانة الدورية والنصائح
.للاستخدام الفعّال لتحقيق أقصى استفادة من النظام  </p>

<div style={{color:'#003157'}} className='d-flex align-items-baseline'>
            <span className='ms-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'>استشارة خبير تكييف الهواء</h5>
           </div>


            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-2 text-end'>
            تأكد من أنك تستشير خبير تكييف الهواء في شركة الشربي للتكييف والتهوية للحصول على التوجيه الأمثل. يمكنهم
.مساعدتك في اختيار وتركيب النظام الذي يتناسب مع احتياجاتك بدقة </p>


<div style={{color:'#003157'}} className='d-flex align-items-baseline'>
            <span className='ms-2 fs-4 fw-bold'>•</span>
            <h5 className='fw-bold'>مراحل تركيب المكيف المخفي الكونسيليد</h5>
           </div>


            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-2 text-end'>
            اولا: مرحلة التأسيسات 
           </p>
           <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-5 text-end'>
           تنقسم التأسيسات اللازمة للمكيف المخفي إلى قسم خاص بالمواسير النحاسية وما يترتب عليه من تحديد لأماكن
الوحدات الخارجية والداخلية والتوفيق بينهم لضمان الترشيد في أطوال المواسير اللازمة، وبعد تحديد أماكن الوحدات
.الداخلية، يلزم تأسيس وحدة تصريف للماء المتكاثف من الوحدة الداخلية وتوصيلها بأقرب وحدة صرف صحي
كما يلزم التأسيس لوحدة التحكم بالوحدة الداخلية من المكيف من خلال ربطها مع شبكة كهرباء المكيف، ويتم
.تركيبها بالعادة في منطقة مفاتيح الإنارة الخاصة بالغرف           </p>

<p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-2 text-end'>
ثانيا: تركيب الدكتات
           </p>
           <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-5 text-end'>
           الآن وبعد تحديد الأقطار اللازمة للدكتات المنوي تركيبها والناتجة من معادلات خاصة بكمية وسرعة الهواء المتدفق
خلالها يمكن تمديد هذه الدكتات بين السقف الخرساني وسقف الجبس بورد، مع ضرورة تطبيق العزل الخاص بها
وهو عبارة عن رولات الصوف الصخري الذي يتم إلصاقه بالدكتات بواسطة غراء خاص، ومن ثم لف الشريط اللاصق
.حول الصوف وفق النوع المحدد مسبقا
         </p>

         <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-2 text-end'>
         ثالثا: تركيب الجريلات
                    </p>
           <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-5 text-end'>
           تأخذ الجريلات الطابع الجمالي، لذا وبعد مراجعة رغبة العميل وموافقتها لمتطلبات العمل من حيث سرعة وحجم
الهواء المار من خلالها يتم تركيب الأنواع المناسبة، كما تشترط المواصفات وجود فتحة لأداء الصيانة اللازمة بأنظمة 
.المكيف المخفي الداخلية
         </p>

         <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-2 text-end'>
         رابعا: تشغيل النظام
                             </p>
           <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-5 text-end'>
           بعد استكمال تركيب كافة المكونات اللازمة لتشغيل نظام التكييف المخفي، تجري أولا عملية اختبار النظام لمراقبة
أي عيوب ناتجة عن خلل في التركيب أو بالتوصيلات، وتعد هذه المرحلة من أهم مراحل تركيب النظام، حيث يتم التأكد
.من مطابقة كافة الدراسات الكهربائية والميكانيكية وملائمتها لحاجة المنزل
         </p>
         <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-2 fw-bold text-end'>
         في المملكة العربية السعودية، تتوفر مجموعة متنوعة من أنواع المكيفات المخفية   والتي تلبي متطلبات الاحتياجات
المنزلية والتجارية. إليك بعض الأنواع الشائعة
:
         </p>
         <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-5 text-end'>
          1-
         ,مكيفات السقف المخفية: تعمل هذه المكيفات على توجيه الهواء المكيف من خلال فتحات مخفية في السقف
.مما يسمح بتوزيع الهواء بشكل متساوي في المكان
         </p>

         <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-5 text-end'>
          2-
          مكيفات الأرضية المخفية: تتميز هذه الوحدات بتركيبها في الأرض، ويتم تخفيضها بشكل كامل أو جزئي تحت
.الأرض، مما يوفر مساحة في الغرفة ويسهل توجيه الهواء
         </p>
         <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-5 text-end'>
          3-
          مكيفات الجدران المخفية: تتميز بتركيبها في الجدران بطريقة تجعلها شبه غير مرئية، وتوفر توزيعًا متجانسًا للهواء
.في المكان
         </p>

         <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-5 text-end'>
          4-
          مكيفات الأرضية المخفية تحت الأثاث: تمتاز بوضعها تحت الأثاث أو في الحوائط السفلية، وتتيح للمكيف أن
.يتموضع بشكل مخفي ولا يؤثر على التصميم الداخلي للمكان
         </p>

         <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-5 text-end'>
          5-
          مكيفات السقف المخفية الداخلية: تثبت في السقف وتتميز بتوجيه الهواء بشكل دقيق ومتساوي، مما يوفر
.توزيعًا فعّالاً للتبريد داخل المكان

         </p>
         <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='me-2 fw-bold text-end'>
         قد تبدو هذه العملية طويلة ومعقدة، ولكن في أيدي فريق تركيب ماهر يجب أن تكون العملية برمتها أكثر سهولة
لا تتردد في التواصل معنا
.
         </p>

        </div>
      </>:
      <>
        <div style={{direction:'rtl'}} className='ms-4 mt-4'>   
        <p  style={{color:'#003157',fontSize:'18px',fontWeight:'lighter'}} className='mb-4 text-start'>
        Installing an air conditioner at home is a task that should not be left only to professionals. In this article, we will
explore the concealed air conditioner installation process in detail and provide tips for achieving optimal performance
and easy control of the system.     </p>
          

           <div className='d-flex align-items-baseline me-3' style={{direction:'ltr'}}>
            <span className='me-2 fs-4 fw-bold'>.</span>
            <h6  style={{color:'#003157',fontSize:'20px',fontWeight:'lighter'}} className='fw-bold text-start'>
            The importance of choosing a professional air conditioning engineer	           </h6>
          
            </div>
            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-3 text-start'>
            The home air conditioner installation journey begins with relying on a professional air conditioning engineer. These
experts can help you choose and install the right system for your home based on your individual needs and requirements.  </p>


<div className='d-flex align-items-baseline me-3' style={{direction:'ltr'}}>
            <span className='me-2 fs-4 fw-bold'>.</span>
            <h6  style={{color:'#003157',fontSize:'20px',fontWeight:'lighter'}} className='fw-bold text-start'>
            Choose the appropriate type of system for your home           </h6>
          
            </div>
            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-3 text-start'>
            Choosing the optimal air conditioning system requires a good understanding of the types of systems available. The
system must be compatible with the home's structure and cooling and heating needs.
      </p>



<div className='d-flex align-items-baseline me-3' style={{direction:'ltr'}}>
            <span className='me-2 fs-4 fw-bold'>.</span>
            <h6  style={{color:'#003157',fontSize:'20px',fontWeight:'lighter'}} className='fw-bold text-start'>
            Proper process of installing a concealed air conditioner  	           </h6>
          
            </div>
            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-3 text-start'>
            Installation of a hidden air conditioner should start from the construction stage of the house. Design requirements
should be taken into consideration and the optimal locations must be determined to guide the ducts and achieve
ideal performance. </p>
   
<div className='d-flex align-items-baseline me-3' style={{direction:'ltr'}}>
            <span className='me-2 fs-4 fw-bold'>.</span>
            <h6  style={{color:'#003157',fontSize:'20px',fontWeight:'lighter'}} className='fw-bold text-start'>
            Secrets of maintenance and effective use</h6>
          
            </div>
            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-3 text-start'>
            After installing the air conditioner, it must be well taken care to maintain optimal performance. This includes regular
maintenance and tips for effective use to get the most out of the system. </p>


<div className='d-flex align-items-baseline me-3' style={{direction:'ltr'}}>
            <span className='me-2 fs-4 fw-bold'>.</span>
            <h6  style={{color:'#003157',fontSize:'20px',fontWeight:'lighter'}} className='fw-bold text-start'>
            Consult an air conditioning expert</h6>
          
            </div>
            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-3 text-start'>
            Make sure you consult an air conditioning expert at Al-sherbi Air Conditioning and Ventilation Company for optimal
guidance. They can help you choose and install a system that precisely matches your needs.
   </p>


<div className='d-flex align-items-baseline me-3' style={{direction:'ltr'}}>
            <span className='me-2 fs-4 fw-bold'>.</span>
            <h6  style={{color:'#003157',fontSize:'20px',fontWeight:'lighter'}} className='fw-bold text-start'>
            Stages of installing a hidden concealed air conditioner </h6>
          
            </div>
            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-3 fw-bold text-start'>
            First: the establishment stage
              </p>
<p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-5 text-start'>
The necessary installations for the hidden air conditioner are divided into a special section for copper pipes and the
resulting determination of the locations of the external and internal units and reconciliation between them to ensure
rationalization in the lengths of the necessary pipes. After determining the locations of the internal units, it is necessary
to establish a drainage unit for the condensed water from the internal unit and connect it to the nearest sewage unit.
              </p>
<p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-5 text-start'>
It is also necessary to establish a control unit for the indoor unit of the air conditioner by connecting it to the air
conditioner’s electricity network, and it is usually installed in the area of the room’s lighting switches. </p>


            <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-3 fw-bold text-start'>
            Second: Installing ducts
              </p>
<p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-5 text-start'>
Now after diameters for the ducts to be installed have been determined, resulting from special equations for the
quantity and speed of air flowing through them, these ducts can be extended between the concrete ceiling and the
gypsum board ceiling, with the necessity of applying their own insulation, which is made of rock wool rolls that are
attached to the ducts using special glue, and then Wrap the tape around the wool according to the previously selected type
 </p>
 <p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-3 fw-bold text-start'>
 Third: Installing grilles
              </p>
<p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-5 text-start'>
Grills take on an aesthetic nature, so after reviewing the client’s desire and their agreement with the work requirements
in terms of the speed and volume of air passing through them, the appropriate types are installed. The specifications also
require the presence of an opening to perform the necessary maintenance on the internal hidden air conditioning systems.
</p>


<p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-3 fw-bold text-start'>
Fourth: Operating the system
              </p>
<p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-5 text-start'>
After completing the installation of all components necessary to operate the concealed air conditioning system, the
system is first tested to monitor any defects resulting from the installation or connections. This stage is one of the
most important stages of installing the system, as it is ensured that all electrical and mechanical studies are consistent
and suit the needs of the home.
</p>
<p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-3 text-start'>
:
In the Kingdom of Saudi Arabia, a variety of types of concealed air conditioners are available that meet the requirements
of domestic and commercial needs. Here are some common types

</p>



<div className='d-flex  ms-4'>

<p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-1 text-start me-auto'>
Concealed ceiling air conditioners: These air conditioners direct the conditioned air through hidden openings in the
ceiling, allowing the air to be distributed equally in the place.
</p>
<p>.1</p>
</div>

<div className='d-flex  ms-4'>

<p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-1 text-start'>

Concealed floor air conditioners: These units are characterized by their installation in the floor, and are completely
or partially lowered under the floor, which saves space in the room and facilitates air direction.
</p>
<p>.2</p>
</div>
<div className='d-flex  ms-4'>

<p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-1 text-start'>

Concealed wall air conditioners: They are distinguished by their installation in the walls in a way that makes them
almost invisible, and provides homogeneous distribution of air in the place.</p>
<p>.3</p>
</div>

<div className='d-flex  ms-4'>

<p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-1 text-start'>

Floor air conditioners hidden under furniture: They are distinguished by being placed under furniture or in the lower
walls, and allow the air conditioner to be positioned in a hidden manner without affecting the interior design of the place.
</p>
<p>.4</p>
</div>
<div className='d-flex  ms-4'>

<p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='ms-1 text-start'>
Indoor concealed ceiling air conditioners: They are installed in the ceiling and are characterized by directing air
precisely and equally, providing effective distribution of cooling within the space.
</p>
<p>.5</p>
</div>
<p  style={{color:'#003157',fontSize:'16px',fontWeight:'lighter'}} className='fw-bold ms-1 text-start'>
This process may seem long and complicated, but with a skilled installation team the whole process should be much
easier. Do not hesitate to contact us
</p>



        </div>
      </>
      }
    </div>
    </div>
  )
}

export default Blog7
