
import { HiArrowLongRight } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { SingleBraedcrumb } from "../../../../components/layout";
import { BiSolidReport } from "react-icons/bi";

const UpdateReports = () => {
  return (
    <section className="add-invoices">
    <div className="container">
      <div className="add-invoices-top">
        <div className="m-b-c">
          <SingleBraedcrumb icon={<BiSolidReport />} title="التقارير" />
        </div>
        <div className="add-new">
          <NavLink to="/reports">
            <HiArrowLongRight />
            عودة
          </NavLink>
        </div>
      </div>

      <div className="add-invoices-data">
        <div className="add-text">
          <p>التعديل على بيانات التقرير</p>
        </div>
        <form action="">
          <div className="main-inputs">
            <div className="chi-in">
              <div>
                <label>اسم المهمه</label>
                <input type="name" name="mission name" required defaultValue={" الإشراف على مشروع الرايه "} />
              </div>
              <div>
              <label>اسم الموظف</label>
              <input type="text" name="employer name" required  defaultValue={" محمد كامل "}/>
              </div>
           
     
            </div>
            <div className="chi-in">
              <div>
                <label> إسم المشروع</label>
                <input type="text" name="project name"  required  defaultValue={"مشروع الرايه"}/>
              </div>

              <div>
                <label> تاريخ الانشاء</label>
                <input type="date" name="date-start" required  />
              </div>
              <div>
                <label>  أخر تحديث للمهمه</label>
                <input type="date" name="date-start" required  />
              </div>
            </div>
        
          </div>
          <div className="btn-down">
            <NavLink className="cancel" to="/reports">
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

export default UpdateReports
