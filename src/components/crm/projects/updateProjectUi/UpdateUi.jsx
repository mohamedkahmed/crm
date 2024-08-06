/* eslint-disable no-unused-vars */
import { PiBuildingsFill } from "react-icons/pi";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
import Formupdateui from "./Formupdateui";
import "./updateui.scss";
import { NavLink, useParams  ,  useNavigate } from "react-router-dom";
import { useState ,  useEffect} from "react";
import toast from "react-hot-toast";
import useQueryupdate from './../../../../services/useQueryupdate';
import useQuerygetSpacficIteam from './../../../../services/QuerygetSpacficIteam';
import { useQueryClient } from "@tanstack/react-query";
import { QueryClient } from '@tanstack/react-query';

const UpdateUi = () => {
    const navigate = useNavigate();
  
    const {id} = useParams()
    const QueryClient = useQueryClient()
   const { isError , isLoading , data} =  useQuerygetSpacficIteam("projects" , "projects" , id)
   const {  updateiteam , isPending} = useQueryupdate("projects" , "projects")

   const [images_video , setimages_video] = useState([])
   const [show_a, setShowA] = useState();
   const [show_b, setShowB] = useState();
   const [show_c, setShowC] = useState();
   const [docs , setDocs] = useState([])
   const [formData, setFormData] =useState({
    projectName:"",
    estateType: "",
    governorate: "",
    city: "",
    estateNumber: "",
    floor: "",
    detailedAddress: "",
    clientType: "",
    estatePrice:"",
    installmentsPerYear: "",
    areaMatter: "",
    specificEstate: "",
  });
   useEffect(() => {
    if (data) {
      const { estateType, finishingQuality, imagesURLs, operationType , installments, videosURLs, docsURLs } = data.project;
      setimages_video([...imagesURLs, ...videosURLs]);
      setShowA(operationType);
      setShowB(installments);
      setShowC(finishingQuality);
      setDocs([...docsURLs]);
      setFormData({
        projectName: data.project.projectName,
        estateType: data.project.estateType,
        governorate: data.project.governorate,
        city: data.project.city,
        estateNumber: data.project.estateNumber,
        floor: data.project.floor,
        detailedAddress: data.project.detailedAddress,
        clientType: data.project.clientType,
        estatePrice: data.project.estatePrice,
        installmentsPerYear: data.project.installmentsPerYear,
        areaMatter: data.project.areaMatter,
        specificEstate: data.project.specificEstate,
      })
    }
  }, [data]);
   if(isLoading) {
    return <h2>loadding</h2>
   }
   if(isError) {
    return <h2>errro</h2>
   }

    // handel submit project 
const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    formData.set("operationType" , show_a)
    formData.set("installments" , show_b)
    formData.set("finishingQuality" , show_c)
  // append list of images-videos to formData
    for(let i = 0 ; i < images_video.length ; i++) {
        formData.append(`images-videos[${i}]`, images_video[i])
    }
      // append list of docs to formData

    for(let i = 0 ; i < docs.length ; i++) {
        formData.append(`docs[${i}]`, docs[i])
    }
    const data = Object.fromEntries(formData)
 
   await updateiteam({data , id})
   QueryClient.invalidateQueries(["projects", id]);

    navigate ("/projects", {replace: true})
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

              <Formupdateui formData = {formData} setFormData={setFormData} showC={show_c} data={data} setShowC={setShowC} showB ={show_b} setShowB={setShowB} showA={show_a} setShowA={setShowA} imagesVideo ={images_video} setImagesVideo={setimages_video} docs={docs} setDocs={setDocs}/>

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