/* eslint-disable no-unused-vars */

import "./singalexpenses.scss"
import {SingleBraedcrumb} from "../../../../components";
import { Link, NavLink } from "react-router-dom";
import { FaFileInvoice } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import logo from "../../../../assets/images/logo.png"
import CoustomeLink from "../../../../components/coutomeLink/CoustomeLink";
const Singalexpenses = () => {
  return (
    <div className="singaleinvoice">
        <div className="container">
        <div className="invoices_top">
            <div className="m-b-c">
              <SingleBraedcrumb icon={<FaFileInvoice />} title="الفواتير" />
            </div>
     
            <CoustomeLink  url={"/expenses"} text={"عوده"}/>
         
        </div>
        <div className="center-invoice">
              <div className="invoice">
                <div className="invoice-header">
                  <div className="info-company">
                    <h5>invoice F_123</h5>
                    <p>تاريخ الإنشاء 15 اغسطس 2024</p>
                    <p className="date-gate">تاريخ الإستحقاق 10 مايو 2024</p>
                  </div>
                  
                  <img  className= "image-invoice"src={logo} alt="ivoice" />
                 
                
                </div>
                <div className="compare-deatils-company-client">
                  <div className="company-deatils">
                    <h6>معلومات عن الشركه</h6>
                    <p>الرايه للتطوير العقارى</p>
                    <p>  الرمز البريدى 000</p>
                    <p>رقم الجوال 0112877226</p>
                    <p>سجل التجارى 0000</p>
                    <p>سجل ضريبى 00000</p>
                  </div>
                <div className="client-details">
                  <h6>معلومات العميل </h6>
                  <p>اسم العميل: يوسف رواج </p>
                  <p>رقم الجوال :0112877226</p>
                  <p>البريد الالكترونى :yousefrawag908@gamil.com</p>
                  <p>العنوان : المنصوره الدقهليه </p>
                </div>
                </div>
                <div className="price-section">
                  <h6>الخدمه</h6>
                  <h6>المبلغ</h6>
                </div>
                <div className="invoice-details">
                  <h6>ملاحظات</h6>
                  <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                  </p>
                </div>
                <div className="esatte-info">
                  <h6>معلومات عن العقار</h6>
                  <p>محافظه الدقهليه</p>
                </div>

              </div>
            </div>
          </div>
    </div>
  )
}

export default Singalexpenses