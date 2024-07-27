/* eslint-disable no-unused-vars */
import { HiArrowLongRight } from "react-icons/hi2";
import { SingleBraedcrumb } from "../../../../components/layout";
import { Link, NavLink , useNavigate} from "react-router-dom";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import "./UpdateExp.scss"
const UpdateExp = () => {
    const navigate = useNavigate();
    const onSubmit = (e) => {
      e.preventDefault();
      navigate("/invoices", { replace: true });
    };
  return (
    <section className='updateExp_section_wrapper'>
      <div className="container">
      <div className="updateExp_top">
          <div className="m-b-c">
            <SingleBraedcrumb icon={<FaMoneyCheckDollar />} title="المصروفات" />
          </div>
          <div className="add-new">
            <NavLink to="/expenses">
              <HiArrowLongRight />
              عوده
            </NavLink>
          </div>
        </div>
        <div className="updateExp_box">
        <div className="add-text">
              <p><span></span>تعديل مصروف </p>
            </div>
            <form action="" onSubmit={onSubmit}>
              <div className="main-inputs">
                <div className="chi-in">
                  <div>
                    <label>اسم المصروف</label>
                    <input type="name" name="name" required defaultValue={"محمد كمال "} />
                  </div>
                  <div>
                  <label>اسم المشروع</label>
                  <input type="text" name="text" required  defaultValue={"مشروع الرايه"}/>
                  </div>
                  <div>
                    <label>نوع العقار</label>
                    <select required>
                      <option value="">فيلا</option>
                      <option value="">شقة</option>
                      <option value="">مخزن</option>
                    </select>
                  </div>
                </div>
                <div className="chi-in">
                  <div>
                    <label>تاريخ الاٍنشاء</label>
                    <input type="date" name="date"  required />
                  </div>
                  <div>
                    <label>اجمالي المصروفات</label>
                    <input type="number" name="number" required  defaultValue={"15000"}/>
                  </div>
                </div>
                <div className="add_nots">
                    <div>
                    <label>اضافه ملاحطات</label>
                    <textarea  name="text" id="" defaultValue={"هذه المصروف الي الموظف محمد"}></textarea>
                    </div>
                  </div>
              </div>
              <div className="btn-down">
                <NavLink className="cancel" to="/expenses">
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

export default UpdateExp
