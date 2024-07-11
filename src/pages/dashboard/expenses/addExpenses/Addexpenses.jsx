import "./addexpenses.scss"
import { HiArrowLongRight } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { SingleBraedcrumb } from "../../../../components";
const Addexpenses = () => {
    const navigate = useNavigate();
    const onSubmit = (e) => {
      e.preventDefault();
      navigate("/invoices", { replace: true });
    };
  return (
    <section className="add-expenses">
    <div className="container">
      <div className="add-expenses-top">
        <div className="m-b-c">
          <SingleBraedcrumb icon={<FaMoneyCheckDollar />} title="المصروفات" />
        </div>
        <div className="add-new">
          <NavLink to="/expenses">
            <HiArrowLongRight />
            عودة
          </NavLink>
        </div>
      </div>

      <div className="add-expenses-data">
        <div className="add-text">
          <p>ادخل بيانات المصروف</p>
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
                <label>تاريخ الاستحقاق</label>
                <input type="date" name="date"  required />
              </div>
    
              <div>
                <label>اجمالي المصروف</label>
                <input type="number" name="number" required  defaultValue={"10000"}/>
              </div>
            </div>
            <div className="add_nots">
                <div>
                <label>اضافه ملاحطات</label>
                <textarea name="text" id="" defaultValue={"هذه الفاتوره من قبل الموظف احمد"}></textarea>
                </div>
              </div>
          </div>
          <div className="btn-down">
            <NavLink className="cancel" to="/invoices">
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

export default Addexpenses