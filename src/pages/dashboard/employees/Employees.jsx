/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { SingleBraedcrumb } from "../../../components/layout";
import { FaSearch } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import employeesImage from "../../../assets/images/employees-user.png";
import { NavLink, Link } from "react-router-dom";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import EmployessTapel from "./EmployeesTable";
import { BiSolidShow } from "react-icons/bi";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import "./Employees.scss";
import {CoustomeLink} from "../../../components/common";
const Employees = () => {
  const columns = [
    {
      name: "الاسم",
      selector: (row) => row.name,
      cell: (row) => (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={row.name.image}
            alt={row.name.text}
            style={{ width: "auto", height: "auto", marginRight: "10px" }}
          />
          <span>{row.name.text}</span>
        </div>
      ),
    },
    {
      name: "الايميل",
      selector: (row) => row.email,
    },
    {
      name: "رقم الهاتف",
      selector: (row) => row.phone,
    },
    {
      name: "الصلاحية",
      selector: (row) => row.validity,
    },
    {
      name: "اجراء",
      selector: (row) => row.procedure,
      cell: (row) => (
        <div className="dropdown">
          <button type="button" data-toggle="dropdown" aria-expanded="false">
            {row.procedure}
          </button>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="#">
              عرض <BiSolidShow />
            </Link>
            <Link className="dropdown-item" to="/employees/78">
              تعديل <GrEdit />
            </Link>
            <Link className="dropdown-item" style={{ color: "red" }} href="#">
              حذف <MdDelete style={{ color: "red" }} />
            </Link>
          </div>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: {
        text: "اسم الموظف",
        image: employeesImage
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02"
    },
    {
      id: 2,
      name: {
        text: "اسم الموظف",
        image: employeesImage
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02"
    },
    {
      id: 3,
      name: {
        text: "اسم الموظف",
        image: employeesImage
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02"
    },
    {
      id: 4,
      name: {
        text: "اسم الموظف",
        image: employeesImage
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02"
    },
    {
      id: 5,
      name: {
        text: "اسم الموظف",
        image: employeesImage
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-01-01"
    },
    {
      id: 6,
      name: {
        text: "اسم الموظف",
        image: employeesImage
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02"
    },
    {
      id: 7,
      name: {
        text: "اسم الموظف",
        image: employeesImage
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02"
    },
    {
      id: 8,
      name: {
        text: "اسم الموظف",
        image: employeesImage
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02"
    },
    {
      id: 9,
      name: {
        text: "اسم الموظف",
        image: employeesImage
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02"
    },
    {
      id: 10,
      name: {
        text: "محمد كمال",
        image: employeesImage
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02"
    },
    {
      id: 11,
      name: {
        text: "اسم الموظف",
        image: employeesImage
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02"
    },
    {
      id: 12,
      name: {
        text: "اسم الموظف",
        image: employeesImage
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02"
    },
    {
      id: 13,
      name: {
        text: "اسم الموظف",
        image: employeesImage
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02"
    },
    {
      id: 14,
      name: {
        text: "اسم الموظف",
        image: employeesImage
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02"
    },
    {
      id: 15,
      name: {
        text: "اسم الموظف",
        image: employeesImage
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02"
    },
    {
      id: 16,
      name: {
        text: "اسم الموظف",
        image: employeesImage
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02"
    },
    {
      id: 17,
      name: {
        text: "اسم الموظف",
        image: employeesImage
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02"
    },
    {
      id: 18,
      name: {
        text: "اسم الموظف",
        image: employeesImage
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02"
    },
    {
      id: 19,
      name: {
        text: "اسم الموظف",
        image: employeesImage
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02"
    },
    {
      id: 20,
      name: {
        text: "اسم الموظف",
        image: employeesImage
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02"
    },
       {
      id: 21,
      name: {
        text: "اسم الموظف",
        image: employeesImage
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02"
    },
  ];
  const [records, setRecords] = useState(data);
  const [selectedDate, setSelectedDate] = useState("");
  const handleFilter = (event) => {
    const newData = data.filter((row) => {
      return row.name.text.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  };
  const handleDate = (event) => {
    const selectedDate = event.target.value;
    const newData = data.filter((row) => {
      return row.date === selectedDate;
    });
    setRecords(newData);
    setSelectedDate(selectedDate);
  };
  return (
    <>
      <div className="employees-wrapper">
        <div className="container">
          <div className="employees-top">
            <div className="m-b-c">
              <SingleBraedcrumb icon={<HiUsers />} title="الموظفين" />
            </div>
          
            <CoustomeLink url={"/addemployees"} text={"إضاف جديد"}/>
          </div>

          {/* employees box */}

          <div className="employees-box">
            <div className="box-top">
              <div className="title">
                {" "}
                <p>
                  {" "}
                  الموظفين <span>({data.length})</span>
                </p>{" "}
              </div>
              <div className="search-date">
                <div className="search">
                  <input
                    type="text"
                    placeholder="البحث..."
                    onChange={handleFilter}
                  ></input>
                  <FaSearch />
                </div>
                <div className="date">
                  <form>
                    <input
                      type="date"
                      name="date"
                      onChange={handleDate}
                      value={selectedDate}
                      
                    />
                  </form>
                </div>
              </div>
            </div>

            {/*employees table*/}
            <EmployessTapel columns={columns} data={records} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Employees;
