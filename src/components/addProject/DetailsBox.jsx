/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaChevronDown } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { MdAttachFile } from "react-icons/md";
import { useState } from "react";
import Uploadeproject from './../addprojectImagesuploade/Uploadeproject';
import { SelectOPtions } from "../../utils";
// form details input and select options
const DetailsBox = ({images_video , setimages_video , docs , setDocs , show_a , setShowA  ,show_b , setShowB , show_c , setShowC}) => {
  const finishing_c = ["صيانة", "بيع", "تاجير"];
  const finishing_f = ["متاح للتقسيط", "غير متاح التقسيط"];
  const finishing_d = ["عالي الجودة", "متوسط الجودة", "عادي"];
 // handel options functions odf state
  const handleButtonClickA = (buttonId) => {
    setShowA(buttonId);
  }
 
  const handleButtonClickB = (buttonId) => {
    setShowB(buttonId);
  };
 
  const handleButtonClickC = (buttonId) => {
    setShowC(buttonId);
  };

  return (
    <>
      <div className="project_box">
          <div className="property_type">
            {/* estate type select options*/}
          <div className="main_group">
              {
                <SelectOPtions options = {["فيلا" , "شقة"  , "مخزن"]} name= "estate" id="exampleFormControlSelect1" label= "اختر نوع العقار"  />
              }
            </div>
          </div>
          <div className="property_location">
            <p>تفاصيل مكان العقار</p>
            {/* estate detatil place select options */}
            <div className="real_inputs">
         
            {
            <SelectOPtions options = {["الجيزه" , "القاهرة" , "المنصورة"]}name="place" id="exampleFormControlSelect2" label= "المحافظة" />

            }
         
                {
            <SelectOPtions options = {["حلوان" , "6 اكتوبر" , "المعادى"]}name="city" id="exampleFormControlSelect3" label= "المدينة" />

            }
          
               {
            <SelectOPtions options = {["عقار-3" , "عقار-2" , "عقار-1"]}name="estate-number" id="exampleFormControlSelect4" label= "رقم العقار" />

            }
         
              {
            <SelectOPtions options = {[ "الدور العلوى" , "الدور الأرضى "]}name="estate-floor" id="exampleFormControlSelect5" label= "الدور الخاص بالعقار" />

            }
            </div>
          </div>
          <div className="project_address">
            <label htmlFor="exampleFormControlSelect6">العنوان بالتفصيل*</label>
            <input type="text" name="adress" id="exampleFormControlSelect6" />
          </div>
          <div className="client_dir">
        
                {
            <SelectOPtions options = {[ " وسيط" , " عميل مباشر  "]}name="estate-type" id="exampleFormControlSelect7" label= "  الجهة التابعة للعقار " />

            }
          </div>
          <div className="finishing_c">
            <p className="pt-3">نوع العملية</p>
            <div className="display-flex py-3">
   {/* render lis of options */}
              {finishing_c.map((item, index) => {
                return (
                  <button onClick={() => handleButtonClickA(item)} className={show_a === item ? "active" : null} type="button" key={index}>{item}</button>
                )
              }) }
            </div>
          </div>
          <div className="project_price">
            <label htmlFor="exampleFormControlSelect8">اضف مبلغ العقار</label>
            <input type="text" name="estate-price" id="exampleFormControlSelect8" />
          </div>
          <div className="finishing_c">
            <p className="pt-3">امكانية التقسيط</p>
            <div className="display-flex py-3">
              {/* render lis of options */}
            {finishing_f.map((item, index) => {
                return (
                  <button onClick={() => handleButtonClickB(item)} className={show_b === item ? "active" : null} type="button" key={index}>{item}</button>
                )
              }) }
            </div>
          </div>
          <div className="project_price">
            <label htmlFor="exampleFormControlSelect9">عدد الاقساط  / سنة</label>
            <input type="text" name="installment-number" id="exampleFormControlSelect9"  />
          </div>
          <div className="project_price">
            <label htmlFor="exampleFormControlSelect10">المساحة / متر*</label>
            <input type="text" name="estate-measure" id="exampleFormControlSelect10" />
          </div>
          <div className="finishing_c">
            <p className="pt-3">جودة التشطيب</p>
            <div className="display-flex py-3">
                 {/* render lis of options */}
            {finishing_d.map((item, index) => {
                return (
                  <button onClick={() => handleButtonClickC(item)} className={show_c === item ? "active" : null} type="button" key={index}>{item}</button>
                )
              }) }
            </div>
          </div>
          <div className="add_files">
          
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <div>
                  <FiPlus /> إضافة مرفقات
                </div>
              </button>
              {/* drop down to handel uplaods images-videos and docs */}
              <div className="dropdown-menu" >
               <label htmlFor="files" className="dropdown-item">
                  {" "}
                  <img src="/images/Vector.svg" alt="Vector" /> اختر من الملفات
                  </label>
                  <input type="file" multiple className="input-file" id="files" onChange = {(e) => setDocs([...e.target.files , ...docs])}  accept ="pdf/* , doc/* , txt/*" />
                <label htmlFor="image-video" className="dropdown-item">
                  <img src="/images/Group.svg" alt="Group" /> اختر صورة او فيديو{" "}
                  </label>
                  <input  onChange={(e) =>setimages_video([...e.target.files , ...images_video])} type="file"   accept="video/*,image/*" multiple className="input-file" id="image-video" />
              </div>
             
            </div>
            {
              images_video.length ?  <Uploadeproject images ={images_video} setImages ={setimages_video} docs={docs} setDocs={setDocs} /> :null
            }
           <br />
         
          </div>
      </div>
    </>
  );
};

export default DetailsBox;
