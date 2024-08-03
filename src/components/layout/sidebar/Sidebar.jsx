/* eslint-disable no-unused-vars */
import  { useState } from "react";
/* import {SideBar} from "../../assets/Data/Data"; */
import logo from "../../../assets/images/logo.png";
import { FaHome } from "react-icons/fa";
import { PiBuildingsFill } from "react-icons/pi";
import { MdMeetingRoom } from "react-icons/md";
import { GiStabbedNote } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { FaFileInvoice } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { MdLibraryAddCheck } from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaAngleLeft, FaChevronDown } from "react-icons/fa6";
import { MdAdminPanelSettings } from "react-icons/md";
import { useLocation } from "react-router-dom";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const [showDropdown, setShowDrobdown] = useState(false);
  const [showDropdown2, setShowDrobdown2] = useState(false);
  const location = useLocation();
  const pathName = location.pathname;
  const closeClick = (() => {
    if (showDropdown === true){
      setShowDrobdown(false)
    } else if (showDropdown2 === true) {
      setShowDrobdown2(false)
    } else {
      setShowDrobdown2(false)
      setShowDrobdown(false)
    }
    console.log(showDropdown)
  })
  return (
    <section className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <NavLink onClick={closeClick} to="/">
              <FaHome /> <p>مهامى</p>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeClick} to="/projects" className={pathName === "/AddProject" || pathName === "/SingleProject/1" ? "active" : null}>
              <PiBuildingsFill /> <p>المشاريع</p>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeClick} to="/mission">
              {" "}
              <GiStabbedNote /> <p>المهام</p>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeClick} to="/reports" className={ pathName === "/reportDetails/123" ? "active" : null}>
              {" "}
              <TbReportSearch /> <p>التقارير</p>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeClick} to="/invoices" className={pathName === "/addInvoices" ? "active" : null}>
              {" "}
              <FaFileInvoice />
              <p>الفواتير</p>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeClick} to="/calendar" className={pathName === "/addCalendar" ? "active" : null}>
              {" "}
              <FaCalendarAlt />
              <p>التقويم</p>{" "}
            </NavLink>
          </li>
          <li>
          <NavLink onClick={closeClick} to="/meeting" className={pathName === "/addmeeting" || pathName === "/updateMeeting/123" || pathName === "/all-meeting" || pathName === "/addMeeting" ? "active" : null}>
            {" "}
            <MdMeetingRoom />
            <p>الإجتماعات</p>{" "}
          </NavLink>
        </li>
          <li>
            <NavLink
            onClick={() => setShowDrobdown(!showDropdown)}
              className={pathName === "/mediator" || pathName === "/addClient" || pathName === "/addMediator" || pathName === "/update-medtiator/56" || pathName === "/update-client/123"  ? "active" : ""}
              to="/client"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {" "}
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <FaUsers />
                <p>العملاء</p>{" "}
              </div>
              <div>{showDropdown ? <FaChevronDown /> : <FaAngleLeft />}</div>
            </NavLink>
            <div className={showDropdown ? "show-dropdown" : "drobdown-menu"}>
              <NavLink to="/client" className={pathName === "/addClient" || pathName === "/update-client/123" ? "active" : null}>
                {" "}
                <p>- عميل</p>{" "}
              </NavLink>
              <NavLink to="/mediator" className={pathName === "/addMediator" || pathName === "/update-medtiator/56" ? "active" : null}>
                {" "}
                <p>- وسيط</p>{" "}
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink onClick={closeClick}
              to="/employees"
              className={pathName === "/addemployees" ? "active" : null}
            >
              {" "}
              <HiUsers />
              <p>الموظفين</p>{" "}
            </NavLink>
          </li>
          <li>
          <NavLink  to="/expenses">
          <FaMoneyCheckDollar />
          <p>المصروفات</p>{" "}
        </NavLink>
            <NavLink
              className={pathName === "/expenses" || pathName === "/update-power/123" || pathName === "/addPower" || pathName === "/addExpenses"  ? "active" : ""}
              to="/powers"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onClick={() => setShowDrobdown2(!showDropdown2)}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
                
              >
                <FaUsers />
                <p>الادارة</p>{" "}
              </div>
              <div>{showDropdown2 ? <FaChevronDown /> : <FaAngleLeft />}</div>
            </NavLink>
            <div className={showDropdown2 ? "show-dropdown" : "drobdown-menu"}>
            <NavLink to="/powers" className={pathName === "/update-power/123" || pathName === "/addPower" ? "active" : null}>
              {" "}
              <MdLibraryAddCheck />
              <p>الصلاحيات</p>{" "}
            </NavLink>
           
              <NavLink  to="/admin" >
              <MdAdminPanelSettings />
              <p>ادمن</p>{" "}
            </NavLink>
            <NavLink  to="/all-users" >
            <FaUsers />
              <p>جميع مستخدمين</p>{" "}
            </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
