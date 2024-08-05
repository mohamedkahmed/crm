/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { SingleBraedcrumb } from "../../../components/layout";
import { PiBuildingsFill } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { projectsPro } from "../../../assets/Data/Data";
import "./Projects.scss";
import authFetch from "../../../utils/axiosAuthfetch";
import useQuerygetiteams from './../../../services/Querygetiteams';
const Projects = () => {
const{ isError , isLoading , data} =  useQuerygetiteams("projects" , "projects")
if(isLoading) {
  return <h2>loadding</h2>
}
if(isError) {
  return <h2>error </h2>
}
const {allproject} = data.data
console.log(allproject);
  return (
    <section className="main_project_wrapper">
      <div className="container">
        <div className="project_top">
          <div className="m-b-c">
            <SingleBraedcrumb icon={<PiBuildingsFill />} title="المشاريع" />
          </div>
          <div className="add-new">
            <NavLink to="/AddProject">
              <FiPlus />
              اضافة مشروع
            </NavLink>
            <input type="date" name="date" lang="ar" />
          </div>
        </div>
        <div className="all_projects_num">
          <div>
            <div className="icon_pro" style={{ backgroundColor: "#218bc7" }}>
              <PiBuildingsFill />
            </div>
            <div className="pro_num_txt">
              <h5>{projectsPro.length}</h5>
              <p>مشروع جديد</p>
            </div>
          </div>
          <div>
            <div className="icon_pro">
              <PiBuildingsFill />
            </div>
            <div className="pro_num_txt">
              <h5>50.000.00</h5>
              <p>كل المشاريع</p>
            </div>
          </div>
        </div>
        {/* project table */}
        <div className="project_box">
          {allproject.map((data) => {
            const {
              _id:id,
              projectName,
              estateType,
              governorate,
              city,
              estateNumber,
              floor,
              detailedAddress,
              clientType,
              estatePrice,
              operationType,
              installments,
              installmentsPerYear,
              areaMatter,
              finishingQuality,
              imagesURLs,
              videosURLs,
              docsURLs
            } = data;
            return (
              <div className="project_detials_box" key={id}>
                {/* <div className="project_img">
                  <img src={img} alt="project image" />
                </div> */}
                <div className="project_content">
                  <div>
                    <p>عقار فيلا</p> <span>{estateType}</span>
                  </div>
                  <div>
                    <p>المساحة / متر*</p> <span>{areaMatter}</span>
                  </div>
                  <div>
                    <p> عدد الاقساط / سنة</p> <span>{installmentsPerYear}</span>
                  </div>
                  <div>
                    <p>مبلغ العقار</p>{" "}
                    <span style={{ color: "#218bc7", fontWeight: "700" }}>
                      {estatePrice}
                    </span>
                  </div>
                </div>
                <div className="btn_project_det">
                  <Link className="btn_deta" to={`/projects/${id}`}>
                    تفاصيل
                  </Link>
                  <Link style={{backgroundColor:"#898989"}} className="btn_deta" to={`/update-project/${id}`}>
                    تعديل
                  </Link>
                  <Link style={{backgroundColor:"#9f0000"}} className="btn_deta" to={``}>
                    حذف
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
