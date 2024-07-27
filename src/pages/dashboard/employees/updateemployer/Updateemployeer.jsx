// import { HiUsers } from "react-icons/hi";
import { HiArrowLongRight } from "react-icons/hi2";
import employeesPerson from "../../../../assets/images/employees_person.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { SingleBraedcrumb } from "../../../../components/layout";
import { SelectOPtions } from "../../../../utils";

const Updateemployeer = () => {
    const [imageFile, setImageFile] = useState(employeesPerson);
    const navigate = useNavigate();
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setImageFile(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
      navigate("/client", { replace: true });
    };
    return (
      <section className="add-client">
        <div className="container">
          <div className="add-client-top">
            <div className="m-b-c">
              <SingleBraedcrumb icon={<FaUsers />} title="الموظفين" />
            </div>
            <div className="add-new">
              {" "}
              <NavLink to="/employees">
                <HiArrowLongRight />
                عودة
              </NavLink>{" "}
            </div>
          </div>
  
          <div className="add-client-data">
            <div className="add-text">
              <p>ادخل بيانات الموظف</p>
            </div>
            <form action="" onSubmit={onSubmit}>
              <div className="add-client-image">
                {imageFile === employeesPerson ? (
                  <img className="image-person" src={imageFile} alt="person" />
                ) : (
                  <div className="newPic">
                    <img className="image-person" src={imageFile} alt="person" />
                  </div>
                )}
                <div className="add-svg">
                  <FiPlus />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <div className="main-inputs">
                <div className="chi-in">
                  <div>
                    <label>اسم الموظف*</label>
                    <input type="text" name="text" required  defaultValue={"يوسف رواج"}/>
                  </div>
                  <div>
                    <label>الايميل*</label>
                    <input type="email" name="email" required defaultValue={" yousefrawag@gmail.com"} />
                  </div>
         
                  {
                    <SelectOPtions options={["القاهره" , "الجيزه"  , "المنصوره"]} label={"المحافظة"} name={"employeer-place"}/>
                  }
                </div>
                <div className="chi-in">
                  <div>
                    <label>رقم الهاتف*</label>
                    <input type="phone" name="phone" required defaultValue={" 10197986075"} />
                  </div>
                  <div>
                    <label>
                      رقم الهاتف الثاني <span>(اختياري)</span>
                    </label>
                    <input type="phone" name="phone"  defaultValue={" 187967446"}/>
                  </div>
                  <div>
                    <label>العنوان بالتفصيل*</label>
                    <input type="text" name="text" required  defaultValue={" 12 شارع المريوطيه الجيزه"}/>
                  </div>
                </div>
                <div className="chi-in">
                  <div>
                    <label>رقم الهوية*</label>
                    <input type="number" name="number" required defaultValue={" 988785764ث654ص65"} />
                  </div>
                </div>
              </div>
              <div className="btn-down">
                <NavLink className="cancel" to="/client">
                  الغاء
                </NavLink>
                <button className="save" type="submit">
                  حفظ
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
}

export default Updateemployeer