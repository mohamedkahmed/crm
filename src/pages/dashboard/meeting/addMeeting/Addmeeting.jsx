import { MdMeetingRoom } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";
import "./addmeeting.scss"
import { Link, NavLink , useNavigate} from "react-router-dom";
import { SingleBraedcrumb } from "../../../../components/layout"
const Addmeeting = () => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/meeting", { replace: true });
  };
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
                    <h6><span></span>اضافة إجتماع جديد</h6>
                    <form action="" onSubmit={onSubmit}>
              <div className="main-inputs">
                <div className="chi-in">
                  <div>
                    <label>عنوان الإجتماع</label>
                    <input type="text" name="text" required defaultValue={"اجتماع الرايه "} />
                  </div>
                  <div>
                    <label>تاريخ الإجتماع</label>
                    <input type="date" name="date"  required />
                  </div>
                </div>
                <div className="add_nots">

                  <div>
                  <label>تفاصيل الإجتماع</label>
                  <textarea  name="text" id="" defaultValue={"هذا الاجتماع بخصوص مشروع الرايه"}></textarea>
                  </div>
                </div>

              </div>
              <div className="btn-down">
                <NavLink className="cancel" to="/meeting">
                  الغاء
                </NavLink>
                <button className="save" type="submit">
                  حفظ
                </button>
              </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Addmeeting