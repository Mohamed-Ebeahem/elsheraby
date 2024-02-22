import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import { useSelector } from 'react-redux';
import { Chart } from "react-google-charts";


import './Orgchart.css'

export const options = {
  allowHtml: true,
};
const Orgchart = () => {
  
    const { lang } = useSelector((x) => x.languageData);

  return (
    <div>
  
      {lang==='ar'?
       <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid'>
      <h3 className='text-white  text-end'>{"الهيكل التنظيمي"}</h3>
      </div>

     
      
      </div>:
      <div className='py-3 ' style={{backgroundColor:'#1D479B'}}>
      <div className='container-fluid'>
      <h3 className='text-white  text-start'>{"Organizational Chart"}</h3>
      </div>

     
      
      </div>}
      {lang==='ar'?
      <div className='container my-5'>
      <Tree
      
        lineWidth={'2px'}
        lineColor={'#0A0463'}
        lineBorderRadius={'10px'}
        label={< > <p className='m-auto bg1'>المدير العام</p></>}
      >
        <TreeNode label={<p className='bg2'> التسويق وخدمة العملاء</p>}>
        <TreeNode label={<p className='bgs1'>ممثلين تسويق</p>}>
          <TreeNode label={<p className='bgs1'>ممثلين خدمة العملاء</p>} />
        </TreeNode>   
        </TreeNode>
        <TreeNode label={<p className='bg3'>إدارة الصيانة</p>}>
          <TreeNode label={<p className='bgs1'>مهندسين صيانة</p>}>


            <TreeNode label={<p className='bgs1'>مساعدين مهندسين</p>}>
            <TreeNode label={<p className='bgs1'> مشريفين صيانة</p>}>
            <TreeNode label={<p className='bgs1'>  فنيين</p>}>
            <TreeNode label={<p className='bgs1'> مساعدين فنيين</p>} />
          </TreeNode>     
          </TreeNode>     
               </TreeNode>
          </TreeNode>
        </TreeNode>
        <TreeNode label={<p className='bg4'>إدارة التنفيذ والتشغيل</p>}>
        <TreeNode label={<p className='bgs1'> مهندسين
</p>}>


<TreeNode label={<p className='bgs1'> مساعدين مهندسين

</p>}>
<TreeNode label={<p className='bgs1'>  مشريفين مواقع</p>}>
<TreeNode label={<p className='bgs1'>  فنيين</p>}>
<TreeNode label={<p className='bgs1'> مساعدين فنيين</p>} />
</TreeNode>     
</TreeNode>     
   </TreeNode>
</TreeNode>
        </TreeNode>
        <TreeNode label={<p className='bg5'>إدارة الدراسات والتصاميم</p>}>
        <TreeNode label={<p className='bgs1'> مهندسين
</p>}>


<TreeNode label={<p className='bgs1'> مساعدين مهندسين

</p>}>
<TreeNode label={<p className='bgs1'>مهندسين تصميم</p>}>
<TreeNode label={<p className='bgs1'>  ممثلين مشاريع
</p>}>
</TreeNode>     
</TreeNode>     
   </TreeNode>
</TreeNode>        </TreeNode>
      </Tree>
      </div>
      :
      <div className='container my-5'>
      <Tree
      
        lineWidth={'2px'}
        lineColor={'#0A0463'}
        lineBorderRadius={'10px'}
        label={< > <p className='m-auto bgE1'> General Manager</p></>}
      >
     
       
        <TreeNode label={<p className='bgE5'>  Studies & Designs Management</p>}>
        <TreeNode label={<p className='bgs1'> Engineers
</p>}>


<TreeNode label={<p className='bgs1'>  Assistant engineers


</p>}>
<TreeNode label={<p className='bgs1'> Design engineers
</p>}>
<TreeNode label={<p className='bgs1'>   Project representatives

</p>}>
</TreeNode>     
</TreeNode>     
   </TreeNode>
</TreeNode>     
        </TreeNode>

        <TreeNode label={<p className='bgE4'>  Execution & Operation Management
</p>}>
        <TreeNode label={<p className='bgs1'> Engineers

</p>}>


<TreeNode label={<p className='bgs1'>  Assistant engineers


</p>}>
<TreeNode label={<p className='bgs1'>   Site supervisors
</p>}>
<TreeNode label={<p className='bgs1'>  Technicians
</p>}>
<TreeNode label={<p className='bgs1'>  Assistant technicians
</p>} />
</TreeNode>     
</TreeNode>     
   </TreeNode>
</TreeNode>
        </TreeNode>
  
        <TreeNode label={<p className='bgE3'> Maintenance Management
</p>}>
          <TreeNode label={<p className='bgs1'> Maintenance engineers
</p>}>


            <TreeNode label={<p className='bgs1'> Assistant engineers
</p>}>
            <TreeNode label={<p className='bgs1'>Maintenance supervisors
</p>}>
            <TreeNode label={<p className='bgs1'>  Technicians</p>}>
            <TreeNode label={<p className='bgs1'>  Assistant technicians
</p>} />
          </TreeNode>     
          </TreeNode>     
               </TreeNode>
          </TreeNode>
        </TreeNode>


        <TreeNode label={<p className='bgE2'>   Marketing & Custosdfgsdfgdfgdf</p>}>
        <TreeNode label={<p className='bgs1'> Marketing representatives
</p>}>
          <TreeNode label={<p className='bgs1'>Customer service representatives
</p>} />
        </TreeNode>
        </TreeNode>
      </Tree>
      </div>
      }
   
    </div>
  );
};

export default Orgchart;
