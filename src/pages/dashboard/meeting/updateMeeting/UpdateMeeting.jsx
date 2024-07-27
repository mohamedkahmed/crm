import { HiArrowLongRight } from "react-icons/hi2";
import { SingleBraedcrumb } from "../../../../components/layout";
import { MdMeetingRoom } from "react-icons/md";
import { Link, NavLink , useNavigate} from "react-router-dom";
import "./UpdateMeeting.scss";
const UpdateMeeting = () => {
    const navigate = useNavigate();
    const onSubmit = (e) => {
      e.preventDefault();
      navigate("/all-meeting", { replace: true });
    };
  return (
    <section className='updateMeeting_section_wrapper'>
      <div className="container">
      <div className="updateMeeting_top">
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
        <div className="updateMeeting-box">
                    <h6> <span></span>تعديل إجتماع </h6>
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
                  <div>
                    <label>نتائج الإجتماع</label>
                    <textarea  name="text" id="" defaultValue={"نتائج الاجتماع"}></textarea>
                    </div>
                </div>

              </div>
              <div className="btn-down">
                <NavLink className="cancel" to="/all-meeting">
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

export default UpdateMeeting
