import { HiArrowLongRight } from "react-icons/hi2";
import employeesPerson from "../../../assets/images/employees-user.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { SingleBraedcrumb } from "../..";
import { SelectOPtions } from "../../../utils";

const UpdatemediatorUi = () => {
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
      const formData = new FormData(e.currentTarget)
      const data = new Object.fromEntries(formData)
console.log(data);
      navigate("/client", { replace: true });
    };
    return (
      <section className="add-client">
        <div className="container">
          <div className="add-client-top">
            <div className="m-b-c">
              <SingleBraedcrumb icon={<FaUsers />} title="العملاء" />
            </div>
            <div className="add-new">
              {" "}
              <NavLink to="/mediator">
                <HiArrowLongRight />
                عودة
              </NavLink>{" "}
            </div>
          </div>
  
          <div className="add-client-data">
            <div className="add-text">
              <p> التعديل على  بيانات الوسيط</p>
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
                    <label>اسم الوسيط*</label>
                    <input type="text" name="name" required  defaultValue={"yousef rawag"}/>
                  </div>
                  <div>
                    <label>الايميل*</label>
                    <input type="email" name="email" required defaultValue={"yousefrawag908@gmail.com"} />
                  </div>
              
                  <SelectOPtions options={["القاهره" , "الجيزه" , "المنصوره"]}  name={"place"} label={"المحافظه"}/>
                </div>
                <div className="chi-in">
                  <div>
                    <label>رقم الهاتف*</label>
                    <input type="phone" name="phone" required defaultValue={"011298766"} />
                  </div>
                  <div>
                    <label>
                      رقم الهاتف الثاني <span>(اختياري)</span>
                    </label>
                    <input type="phone" name="phone2"  defaultValue={"79482374073"}/>
                  </div>
                  <div>
                    <label>العنوان بالتفصيل*</label>
                    <input type="text" name="adreses" required  defaultValue={"21 شارع المريوطيه الجيزه"}/>
                  </div>
                </div>
                <div className="chi-in">
                  <div>
                    <label>رقم الهوية*</label>
                    <input type="text" name="personal-card" required defaultValue={"9707986786r7r"} />
                  </div>
                </div>
              </div>
              <div className="btn-down">
                <NavLink className="cancel" to="/mediator">
                  الغاء
                </NavLink>
                <button className="save" type="submit">
                  حفظ
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>)
}

export default UpdatemediatorUi
