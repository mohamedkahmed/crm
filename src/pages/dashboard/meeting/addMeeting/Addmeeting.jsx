import { MdMeetingRoom } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";
import "./addmeeting.scss"
import { NavLink } from "react-router-dom";
import { SingleBraedcrumb } from "../../../../components"
const Addmeeting = () => {
  return (
    <div className="add-meeting">
    <div className="container">
            <div className="calendar_top">
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
        <div className="add-meeting-box">
                    <h6>اضافه إجتماع جديد</h6>
        </div>
    </div>
    </div>
  )
}

export default Addmeeting