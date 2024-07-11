import { useParams } from "react-router-dom"
import { MdMeetingRoom } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { SingleBraedcrumb } from "../../../../components"
import "./Singalemeeting.scss"
const Singalemeeting = () => {
    const {id} = useParams()
  return (
    <div className="sinagle-meeting"> 
    <div className="container">
        <div className="meeting_top">
              <div className="m-b-c">
              <SingleBraedcrumb icon={<MdMeetingRoom />} title="الإجتماعات" />
              </div>
              <div className="add-new">
              {" "}
              <NavLink to="/meeting">
              <HiArrowLongRight />
              عودة
              </NavLink>{" "}
          </div>
    </div>
    <div className="sinagle-meeting-box">
      <h6> {id}تفاصيل الإجتماع </h6>
    </div>
    </div>
    
    </div>
  )
}

export default Singalemeeting