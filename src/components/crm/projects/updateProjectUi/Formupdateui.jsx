/* eslint-disable react/prop-types */
import { FiPlus } from "react-icons/fi";
import Uploadeproject from './../addprojectImagesuploade/Uploadeproject';
import { SelectOPtions } from "../../../../utils";

const Formupdateui = ({ formData , setFormData, imagesVideo, setImagesVideo, docs, setDocs, showA, setShowA, showB, setShowB, showC, setShowC }) => {
  
  const finishing_c = ["صيانة", "بيع", "تاجير"];
  const finishing_f = ["متاح للتقسيط", "غير متاح التقسيط"];
  const finishing_d = ["عالي الجودة", "متوسط الجودة", "عادي"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleButtonClickA = (buttonId) => {
    setShowA(buttonId);
  };

  const handleButtonClickB = (buttonId) => {
    setShowB(buttonId);
  };

  const handleButtonClickC = (buttonId) => {
    setShowC(buttonId);
  };

  return (
    <>
      <div className="project_box">
        <div className="project_address">
          <label htmlFor="projectName">إسم المشروع*</label>
          <input
            type="text"
            name="projectName"
            id="projectName"
            value={formData.projectName}
            onChange={handleInputChange}
          />
        </div>
        <div className="property_type">
          <div className="main_group">
            <SelectOPtions
              options={["فيلا", "شقة", "مخزن"]}
              value={formData.estateType}
              name="estateType"
              id="estateType"
              label="اختر نوع العقار"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="property_location">
          <p>تفاصيل مكان العقار</p>
          <div className="real_inputs">
            <SelectOPtions
              options={["الجيزه", "القاهرة", "المنصورة"]}
              value={formData.governorate}
              name="governorate"
              id="governorate"
              label="المحافظة"
              onChange={handleInputChange}
            />
            <SelectOPtions
              options={["حلوان", "6 اكتوبر", "المعادى"]}
              value={formData.city}
              name="city"
              id="city"
              label="المدينة"
              onChange={handleInputChange}
            />
            <SelectOPtions
              options={["عقار-3", "عقار-2", "عقار-1"]}
              value={formData.estateNumber}
              name="estateNumber"
              id="estateNumber"
              label="رقم العقار"
              onChange={handleInputChange}
            />
            <SelectOPtions
              options={["الدور العلوى", "الدور الأرضى"]}
              value={formData.floor}
              name="floor"
              id="floor"
              label="الدور الخاص بالعقار"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="project_address">
          <label htmlFor="detailedAddress">العنوان بالتفصيل*</label>
          <input
            type="text"
            name="detailedAddress"
            value={formData.detailedAddress}
            id="detailedAddress"
            onChange={handleInputChange}
          />
        </div>
        <div className="client_dir">
          <SelectOPtions
            options={["وسيط", "عميل مباشر"]}
            value={formData.clientType}
            name="clientType"
            id="clientType"
            label="الجهة التابعة للعقار"
            onChange={handleInputChange}
          />
        </div>
        <div className="finishing_c">
          <p className="pt-3">نوع العملية</p>
          <div className="display-flex py-3">
            {finishing_c.map((item, index) => (
              <button
                onClick={() => handleButtonClickA(item)}
                className={showA === item ? "active" : null}
                type="button"
                key={index}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="project_price">
          <label htmlFor="estatePrice">اضف مبلغ العقار</label>
          <input
            type="text"
            name="estatePrice"
            value={formData.estatePrice}
            id="estatePrice"
            onChange={handleInputChange}
          />
        </div>
        <div className="finishing_c">
          <p className="pt-3">امكانية التقسيط</p>
          <div className="display-flex py-3">
            {finishing_f.map((item, index) => (
              <button
                onClick={() => handleButtonClickB(item)}
                className={showB === item ? "active" : null}
                type="button"
                key={index}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="project_price">
          <label htmlFor="installmentsPerYear">عدد الاقساط / سنة</label>
          <input
            type="text"
            name="installmentsPerYear"
            value={formData.installmentsPerYear}
            id="installmentsPerYear"
            onChange={handleInputChange}
          />
        </div>
        <div className="project_price">
          <label htmlFor="areaMatter">المساحة / متر*</label>
          <input
            type="text"
            name="areaMatter"
            value={formData.areaMatter}
            id="areaMatter"
            onChange={handleInputChange}
          />
        </div>
        <div className="finishing_c">
          <p className="pt-3">جودة التشطيب</p>
          <div className="display-flex py-3">
            {finishing_d.map((item, index) => (
              <button
                onClick={() => handleButtonClickC(item)}
                className={showC === item ? "active" : null}
                type="button"
                key={index}
              >
                {item}
              </button>
            ))}
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
            <div className="dropdown-menu">
              <label htmlFor="files" className="dropdown-item">
                <img src="/images/Vector.svg" alt="Vector" /> اختر من الملفات
              </label>
              <input
                type="file"
                multiple
                className="input-file"
                id="files"
                onChange={(e) => setDocs([...e.target.files, ...docs])}
                accept="pdf/* , doc/* , txt/*"
              />
              <label htmlFor="image-video" className="dropdown-item">
                <img src="/images/Group.svg" alt="Group" /> اختر صورة او فيديو
              </label>
              <input
                onChange={(e) => setImagesVideo([...e.target.files, ...imagesVideo])}
                type="file"
                accept="video/*,image/*"
                multiple
                className="input-file"
                id="image-video"
              />
            </div>
          </div>
          {imagesVideo.length > 0 || docs.length > 0 ? (
            <Uploadeproject
              images={imagesVideo}
              setImages={setImagesVideo}
              docs={docs}
              setDocs={setDocs}
            />
          ) : null}
          <br />
        </div>
      </div>
    </>
  );
};

export default Formupdateui;
