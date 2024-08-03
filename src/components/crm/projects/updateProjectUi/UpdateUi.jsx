import { PiBuildingsFill } from "react-icons/pi";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
import Formupdateui from "./Formupdateui";
import "./updateui.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const UpdateUi = () => {
    // const navigate = useNavigate();
    const [images_video , setimages_video] = useState([])
    const [show_a, setShowA] = useState("تاجير");
    const [show_b, setShowB] = useState("غير متاح التقسيط");
    const [show_c, setShowC] = useState("عادي");
    const [docs , setDocs] = useState([])
    // handel submit project 
const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    formData.set("opeartion-type" , show_a)
    formData.set("installment-avillbale" , show_b)
    formData.set("Finishing quality" , show_c)
  // append list of images-videos to formData
    for(let i = 0 ; i < images_video.length ; i++) {
        formData.append(`images-videos[${i}]`, images_video[i])
    }
      // append list of docs to formData

    for(let i = 0 ; i < docs.length ; i++) {
        formData.append(`docs[${i}]`, docs[i])
    }
    const data = Object.fromEntries(formData)
 
    toast.success("project add sucssfuly" , {position:"top-center"})
    console.log(data);
    // navigate ("/projects", {replace: true})
    }
  return (
    <section className="add_project_section">
      <div className="container">
        <div className="title_top">
          <p>التعديل على  بيانات العقار</p>
        </div>
        <div className="main_project_content">
          <div className="right_box">
            <div className="Project_completion_stage">
              <div className="icon">
                <PiBuildingsFill />
              </div>
              <div className="text">
                <p>بيانات العقار</p>
                <p>ادخل تفاصيل العقار</p>
              </div>
            </div>
            <div className="Project_completion_stage">
              <div className="icon">
                <FaUsers />
              </div>
              <div className="text">
                <p> العملاء</p>
                <p>  اختر العميل </p>
              </div>
            </div>
          
            <div className="Project_completion_stage">
              <div className="icon">
                <IoMdLink />
              </div>
              <div className="text">
                <p>مرفقات</p>
                <p>ادخال مرفقات العقار</p>
              </div>
            </div>
          </div>
          <div className="left_details_box">
            <form action="" onSubmit={onSubmit}>
              <div className="l_d_b_t">
                <div className="icon">
                  <FaRegPenToSquare />
                </div>
                <p>ادخل بيانات العقار</p>
              </div>

              {/* here is Project Box */}

              <Formupdateui show_c={show_c} setShowC={setShowC} show_b ={show_b} setShowB={setShowB} show_a={show_a} setShowA={setShowA} images_video ={images_video} setimages_video={setimages_video} docs={docs} setDocs={setDocs}/>

              <div className="add_return">
                <div className="return_btn">
                  <NavLink to="/projects">عوده</NavLink>
                </div>
                <div className="add_btn">
                  <button className="btn_submit" type="submit">
                    اضافة
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


export default UpdateUi