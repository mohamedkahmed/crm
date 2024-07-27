import { SingleBraedcrumb } from "../../../../components/layout";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { LuDownload } from "react-icons/lu";

import {  NavLink } from "react-router-dom";
import "./ReportDetails.scss";
const ReportDetails = () => {
  return (
    <>
      <section className='reportDetails_section_wrapper'>
        <div className="container">
        <div className="reportDetails_top">
          <div className="m-b-c">
            <SingleBraedcrumb
              icon={<FaEdit />}
              title="تفاصيل التقرير"
            />
          </div>
          <div className="add-new">
            <NavLink to="/reports">
            <FaArrowRightLong />
              عوده
            </NavLink>
          </div>
        </div>
        <div className="reportDetails_main_box">
          <div className="chat_box">
            <div className="user_top">
              <div className="user_img">
                <img src="/images/150-1-PeopleImages 6.svg" alt="user" />
              </div>
              <div className="user_name">
                <p>محمد علي</p>
                <span>12,july 8:30AM </span>
              </div>
            </div>
            <div className="project_message">
              <p>مرحباً
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</p>
            </div>
            <p className="vi_im">الصور والفيديوهات تم ارسالها</p>
            <div className="image_videos_box">
                <img src="/images/Illustration-House-investment-growth-Real-estate-Property-value.webp" alt="" />
                <img src="/images/Illustration-House-investment-growth-Real-estate-Property-value.webp" alt="" />
                <img src="/images/Illustration-House-investment-growth-Real-estate-Property-value.webp" alt="" />
                <img src="/images/Illustration-House-investment-growth-Real-estate-Property-value.webp" alt="" />
                <img src="/images/Illustration-House-investment-growth-Real-estate-Property-value.webp" alt="" />
                </div>
                <hr />
                <p className="vi_im">مرفقات تم ارسالها</p>
                <div className="pdf_file_box">
                  <div className="pdf_file">

                    <div className="pdf_details">
                      <div className="txt">
                        <p>office.pdf</p>
                        <span>21 Mp </span>
                      </div>
                      <div className="pdf_icon">
                        <img src="/images/pdf-icon.svg" alt="pdf icon" />
                      </div>
                    </div>
                  </div>
                  <div className="pdf_file">
                    <div className="pdf_details">
                      <div className="txt">
                        <p>office.pdf</p>
                        <span>21 Mp </span>
                      </div>
                      <div className="pdf_icon">
                        <img src="/images/pdf-icon.svg" alt="pdf icon" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="respone_chat">
                  <div className="user_title">
                  <div className="user_img">
                <img src="/images/150-1-PeopleImages 6.svg" alt="user" /> <p> الرد علي</p><span>محمد علي</span>
              </div>
                  </div>
                  <div className="add_chat_box">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni inventore assumenda accusantium natus dolores beatae, culpa quas totam quia distinctio odit suscipit explicabo dignissimos ut eos tempore eligendi necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit quasi fugiat deserunt magni. Optio, exercitationem! Inventore at reiciendis eum blanditiis enim vel, illo odio aliquam, vitae et, animi cumque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni inventore assumenda accusantium natus dolores beatae, culpa quas totam quia distinctio odit suscipit explicabo dignissimos ut eos tempore eligendi necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit quasi fugiat deserunt magni. Optio, exercitationem! Inventore at reiciendis eum blanditiis enim vel, illo odio aliquam, vitae et, animi cumque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni inventore assumenda accusantium natus dolores beatae, culpa quas totam quia distinctio odit suscipit explicabo dignissimos ut eos tempore eligendi necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit quasi fugiat deserunt magni. Optio, exercitationem! Inventore at reiciendis eum blanditiis enim vel, illo odio aliquam, vitae et, animi cumque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni inventore assumenda accusantium natus dolores beatae, culpa quas totam quia distinctio odit suscipit explicabo dignissimos ut eos tempore eligendi necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit quasi fugiat deserunt magni. Optio, exercitationem! Inventore at reiciendis eum blanditiis enim vel, illo odio aliquam, vitae et, animi cumque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni inventore assumenda accusantium natus dolores beatae, culpa quas totam quia distinctio odit suscipit explicabo dignissimos ut eos tempore eligendi necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit quasi fugiat deserunt magni. Optio, exercitationem! Inventore at reiciendis eum blanditiis enim vel, illo odio aliquam, vitae et, animi cumque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni inventore assumenda accusantium natus dolores beatae, culpa quas totam quia distinctio odit suscipit explicabo dignissimos ut eos tempore eligendi necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit quasi fugiat deserunt magni. Optio, exercitationem! Inventore at reiciendis eum blanditiis enim vel, illo odio aliquam, vitae et, animi cumque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni inventore assumenda accusantium natus dolores beatae, culpa quas totam quia distinctio odit suscipit explicabo dignissimos ut eos tempore eligendi necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit quasi fugiat deserunt magni. Optio, exercitationem! Inventore at reiciendis eum blanditiis enim vel, illo odio aliquam, vitae et, animi cumque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni inventore assumenda accusantium natus dolores beatae, culpa quas totam quia distinctio odit suscipit explicabo dignissimos ut eos tempore eligendi necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit quasi fugiat deserunt magni. Optio, exercitationem! Inventore at reiciendis eum blanditiis enim vel, illo odio aliquam, vitae et, animi cumque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni inventore assumenda accusantium natus dolores beatae, culpa quas totam quia distinctio odit suscipit explicabo dignissimos ut eos tempore eligendi necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit quasi fugiat deserunt magni. Optio, exercitationem! Inventore at reiciendis eum blanditiis enim vel, illo odio aliquam, vitae et, animi cumque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni inventore assumenda accusantium natus dolores beatae, culpa quas totam quia distinctio odit suscipit explicabo dignissimos ut eos tempore eligendi necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit quasi fugiat deserunt magni. Optio, exercitationem! Inventore at reiciendis eum blanditiis enim vel, illo odio aliquam, vitae et, animi cumque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni inventore assumenda accusantium natus dolores beatae, culpa quas totam quia distinctio odit suscipit explicabo dignissimos ut eos tempore eligendi necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit quasi fugiat deserunt magni. Optio, exercitationem! Inventore at reiciendis eum blanditiis enim vel, illo odio aliquam, vitae et, animi cumque!
                  </div>
                </div>
                <div className="add_respone">
                  <form action="">
                    <div className="all_ca">
                    <textarea required placeholder="اكتب له رساله..." name="text" id=""></textarea>
                    <div style={{width: "100%", display: "flex", justifyContent: "end"}}>
                    <button className="send_res" type="submit">إرسال رد</button>
                    </div>
                    </div>
                  </form>
                </div>
          </div>
          <div className="project_details_box">
            <div className="top_box same_sty">
              <div className="task_assignment">
                <div className="task_text">إسناد المهمة</div>
                <div className="task_date"><MdOutlineDateRange />
                  <p>12,july 8:30AM </p>
                </div>

              </div>
              <hr />
              <div className="emplo_details">
                <div className="title_top">
                  <h5>معلومات الموظف</h5>
                </div>
                <div className="employees_content">
                  <div><p>اسم الموظف</p> <span>محمد علي</span></div>
                  <div><p>الوظيفة</p> <span>مهندس فحص مباني</span></div>
                  <div><p>البريد الإلكتروني</p> <span>Info@example.com</span></div>
                  <div><p>رقم الهاتف</p> <span>0000 000 000</span></div>
                </div>
              </div>
            </div>
            <div className="down_box same_sty">
              <div className="all_attachments">
                <div className="title_top">
                  <h5>جميع المرفقات</h5>
                </div>
                <div className="image_videos_box">
                <img src="/images/Illustration-House-investment-growth-Real-estate-Property-value.webp" alt="" />
                <img src="/images/Illustration-House-investment-growth-Real-estate-Property-value.webp" alt="" />
                <img src="/images/Illustration-House-investment-growth-Real-estate-Property-value.webp" alt="" />
                <img src="/images/Illustration-House-investment-growth-Real-estate-Property-value.webp" alt="" />
                <img src="/images/Illustration-House-investment-growth-Real-estate-Property-value.webp" alt="" />
                </div>
                <hr />
                <div className="pdf_file_box">
                  <div className="pdf_file">
                    <div className="download_pdf">
                    <LuDownload />
                    </div>
                    <div className="pdf_details">
                      <div className="txt">
                        <p>office.pdf</p>
                        <span>21 Mp </span>
                      </div>
                      <div className="pdf_icon">
                        <img src="/images/pdf-icon.svg" alt="pdf icon" />
                      </div>
                    </div>
                  </div>
                  <div className="pdf_file">
                    <div className="download_pdf">
                    <LuDownload />
                    </div>
                    <div className="pdf_details">
                      <div className="txt">
                        <p>office.pdf</p>
                        <span>21 Mp </span>
                      </div>
                      <div className="pdf_icon">
                        <img src="/images/pdf-icon.svg" alt="pdf icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default ReportDetails
