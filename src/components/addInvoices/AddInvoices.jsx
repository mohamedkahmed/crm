import { HiArrowLongRight } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { SingleBraedcrumb } from "../../components";
import "./AddInvoices.scss";
const AddInvoices = () => {
    const navigate = useNavigate();
    const onSubmit = (e) => {
      e.preventDefault();
      navigate("/invoices", { replace: true });
    };
    return (
      <section className="add-invoices">
        <div className="container">
          <div className="add-invoices-top">
            <div className="m-b-c">
              <SingleBraedcrumb icon={<FaFileInvoice />} title="الفواتير" />
            </div>
            <div className="add-new">
              <NavLink to="/invoices">
                <HiArrowLongRight />
                عودة
              </NavLink>
            </div>
          </div>
  
          <div className="add-invoices-data">
            <div className="add-text">
              <p>ادخل بيانات الفاتورة</p>
            </div>
            <form action="" onSubmit={onSubmit}>
              <div className="main-inputs">
                <div className="chi-in">
                  <div>
                    <label>اسم العميل</label>
                    <input type="name" name="name" required />
                  </div>
                  <div>
                  <label>اسم المشروع</label>
                  <input type="text" name="text" required />
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
                    <input type="date" name="date" locale="ar" required />
                  </div>
                  <div>
                    <label>حاله الفاتورة</label>
                    <select required>
                      <option value="">تم الانشاء</option>
                      <option value="">تم الدفع</option>
                      <option value="">لم يتم الدفع</option>
                      <option value="">فانورة ملغية</option>
                    </select>
                  </div>
                  <div>
                    <label>اجمالي الفاتورة</label>
                    <input type="number" name="number" required />
                  </div>
                </div>
                <div className="add_nots">
                    <div>
                    <label>اضافه ملاحطات</label>
                    <textarea name="text" id=""></textarea>
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
    );
  };

export default AddInvoices
