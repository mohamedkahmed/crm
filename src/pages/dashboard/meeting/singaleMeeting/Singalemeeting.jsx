import { useParams } from "react-router-dom"
import { MdMeetingRoom } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";
import { SingleBraedcrumb } from "../../../../components/layout"
import "./Singalemeeting.scss"
const Singalemeeting = () => {

  return (
    <div className="sinagle-meeting"> 
    <div className="container">
        <div className="meeting_top">
              <div className="m-b-c">
              <SingleBraedcrumb icon={<MdMeetingRoom />} title="الإجتماعات" />
              </div>
              <div className="add-new">
              {" "}
              <NavLink to="/all-meeting">
              <HiArrowLongRight />
              عودة
              </NavLink>{" "}
          </div>
    </div>
    <div className="sinagle-meeting-box">
      <h6><span></span>تفاصيل الإجتماع </h6>
              <div className="main-inputs">
                <div className="chi-in">
                  <div>
                    <h6>عنوان الإجتماع</h6>
                    <span>اجتماع الرايه </span>
                  </div>
                  <div>
                    <h6>تاريخ الإجتماع</h6>
                    <span>12, اغسطس 2024</span>
                  </div>
                </div>
                <div className="add_nots">
                  <div>
                  <h6>تفاصيل الإجتماع</h6>
                  <span>هذا الاجتماع بخصوص مشروع الرايه Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cupiditate animi hic reiciendis voluptates dicta atque voluptatibus voluptate odio veniam qui nulla odit quos alias, facilis illo? Repudiandae, dolorum perspiciatis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis neque earum adipisci officiis tempore sequi quaerat tenetur deleniti dolorum in, possimus atque at quia suscipit eligendi non. Ex, sed laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga perspiciatis odit porro voluptates. Facere, delectus! Aut odit, voluptate eligendi beatae quibusdam incidunt accusantium assumenda consectetur commodi nihil, doloribus impedit nulla?</span>
                  </div>
                  <div>
                    <h6>نتائج الإجتماع</h6>
                    <span>نتائج الاجتماع</span>
                    </div>
                </div>

              </div>
    </div>
    </div>
    
    </div>
  )
}

export default Singalemeeting