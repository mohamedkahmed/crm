import { HiUsers } from "react-icons/hi";
import { HiArrowLongRight } from "react-icons/hi2";
import employeesPerson from "../../assets/images/employees_person.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { SingleBraedcrumb } from "../../components";
import "./AddMediator.scss";
const AddMediator = () => {
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
      navigate("/mediator", { replace: true });
    };
  return (
    <section className="add-mediator">
      <div className="container">
        <div className="add-mediator-top">
          <div className="m-b-c">
            <SingleBraedcrumb icon={<FaUsers />} title="الوسطاء" />
          </div>
          <div className="add-new">
            {" "}
            <NavLink to="/mediator">
              <HiArrowLongRight />
              عودة
            </NavLink>{" "}
          </div>
        </div>

        <div className="add-mediator-data">
          <div className="add-text">
            <p>ادخل بيانات الوسيط</p>
          </div>
          <form action="" onSubmit={onSubmit}>
            <div className="add-mediator-image">
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
                  <input type="text" name="text" required />
                </div>
                <div>
                  <label>الايميل*</label>
                  <input type="email" name="email" required />
                </div>
                <div>
                  <label>المحافظة*</label>
                  <select required>
                    <option value="">القاهره</option>
                    <option value="">الجيزة</option>
                    <option value="">المنصوره</option>
                  </select>
                </div>
              </div>
              <div className="chi-in">
                <div>
                  <label>رقم الهاتف*</label>
                  <input type="phone" name="phone" required />
                </div>
                <div>
                  <label>
                    رقم الهاتف الثاني <span>(اختياري)</span>
                  </label>
                  <input type="phone" name="phone" />
                </div>
                <div>
                  <label>العنوان بالتفصيل*</label>
                  <input type="text" name="text" required />
                </div>
              </div>
              <div className="chi-in">
                <div>
                  <label>رقم الهوية*</label>
                  <input type="number" name="number" required />
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
    </section>
  )
}

export default AddMediator
