/* eslint-disable no-unused-vars */
import React from 'react'
import {SingleBraedcrumb} from "../../../components";
import { FaSearch } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import employeesImage from "../../../assets/images/employees-user.png";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BiSolidShow } from "react-icons/bi";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import ExpensesTable from './ExpensesTable';
import { FaMoneyCheckDollar } from "react-icons/fa6";
const Expenses = () => {
  const columns = [
    {
      name: "رقم المصروف",
      selector: (row) => row.invoices,
    },
    {
      name: "اسم المصروف",
      selector: (row) => row.name,
      cell: (row) => (
        <div style={{ display: "flex", alignItems: "center", gap: "5px"}}>
          <img
            src={row.name.image}
            alt={row.name.text}
            style={{ width: "auto", height: "auto", marginRight: "0" }}
          />
          <span>{row.name.text}</span>
        </div>
      ),
    },
    {
      name: "اسم المشروع",
      selector: (row) => row.projectName,
    },
    {
      name: "تاريخ الانشاء",
      selector: (row) => row.date,
    },
    {
      name: "نوع العقار",
      selector: (row) => row.realName,
    },
    {
      name: "اجمالي المصروفات",
      selector: (row) => row.totalInvoice,
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
            <Link className="dropdown-item" to="/expenses/234">
              عرض <BiSolidShow />
            </Link>
            <Link className="dropdown-item" to="/update-expenses/123">
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
        text: "اسم العميل",
        image: employeesImage,
      },
      invoices: "515151",
      projectName: "مشروع الراية",
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      invoiceStatus: "تم الدفع",
      totalInvoice: "180 الف",
      date: "15 اغسطس, 2024",
    },
    {
      id: 2,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      invoices: "515151",
      projectName: "مشروع الراية",
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      invoiceStatus: "تم الدفع",
      totalInvoice: "180 الف",
      date: "15 اغسطس, 2024",
    },
    {
      id: 3,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      invoices: "515151",
      projectName: "مشروع الراية",
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      invoiceStatus: "لم يتم الدفع",
      totalInvoice: "180 الف",
      date: "15 اغسطس, 2024",
    },
    {
      id: 4,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      invoices: "515151",
      projectName: "مشروع الراية",
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      invoiceStatus: "تم الدفع",
      totalInvoice: "180 الف",
      date: "15 اغسطس, 2024",
    },
    {
      id: 5,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      invoices: "515151",
      projectName: "مشروع الراية",
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      invoiceStatus: "تم الدفع",
      totalInvoice: "180 الف",
      date: "15 اغسطس, 2024",
    },
    {
      id: 6,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      invoices: "515151",
      projectName: "مشروع الراية",
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      invoiceStatus: "فاتورة ملغية",
      totalInvoice: "180 الف",
      date: "15 اغسطس, 2024",
    },
    {
      id: 7,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      invoices: "515151",
      projectName: "مشروع الراية",
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      invoiceStatus: "تم الانشاء",
      totalInvoice: "180 الف",
      date: "15 اغسطس, 2024",
    },
    {
      id: 8,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      invoices: "515151",
      projectName: "مشروع الراية",
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      invoiceStatus: "فاتورة ملغية",
      totalInvoice: "180 الف",
      date: "15 اغسطس, 2024",
    },
    {
      id: 9,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      invoices: "515151",
      projectName: "مشروع الراية",
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      invoiceStatus: "تم الدفع",
      totalInvoice: "180 الف",
      date: "15 اغسطس, 2024",
    },
    {
      id: 10,
      name: {
        text: "محمد كمال",
        image: employeesImage,
      },
      invoices: "515151",
      projectName: "مشروع الراية",
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      invoiceStatus: "تم الدفع",
      totalInvoice: "180 الف",
      date: "15 اغسطس, 2024",
    },
    {
      id: 11,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      invoices: "515151",
      projectName: "مشروع الراية",
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      invoiceStatus: "تم الدفع",
      totalInvoice: "180 الف",
      date: "15 اغسطس, 2024",
    },
    {
      id: 12,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      invoices: "515151",
      projectName: "مشروع الراية",
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      invoiceStatus: "تم الدفع",
      totalInvoice: "180 الف",
      date: "15 اغسطس, 2024",
    },
    {
      id: 13,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      invoices: "515151",
      projectName: "مشروع الراية",
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      invoiceStatus: "تم الدفع",
      totalInvoice: "180 الف",
      date: "15 اغسطس, 2024",
    },
    {
      id: 14,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      invoices: "515151",
      projectName: "مشروع الراية",
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      invoiceStatus: "تم الدفع",
      totalInvoice: "180 الف",
      date: "15 اغسطس, 2024",
    },
    {
      id: 15,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      invoices: "515151",
      projectName: "مشروع الراية",
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      invoiceStatus: "تم الدفع",
      totalInvoice: "180 الف",
      date: "15 اغسطس, 2024",
    }
  ];
  return (
    <div>

<section className='main_invoices_wrapper'>
      <div className="container">
      <div className="invoices_top">
            <div className="m-b-c">
              <SingleBraedcrumb icon={<FaMoneyCheckDollar />} title="المصروفات" />
            </div>
            <div className="add-new">
              <NavLink to="/Addexpenses">
                <FiPlus />
                اضافة جديد
              </NavLink>
            </div>
          </div>
                  {/* invoices table */}

        <div className="invoices_box">
          <div className="box-top">
            <div className="title">
              <p>
                المصروفات <span>({data.length})</span>
              </p>{" "}
            </div>
            <div className="search-date">
              <div className="search">
                <input
                  type="text"
                  placeholder="البحث..."
            
                ></input>
                <FaSearch />
              </div>
              <div className="date">
                <form>
                  <input
                    type="date"
                    name="date"
                
                  />
                </form>
              </div>
            </div>
          </div>

          {/* about  invoices table*/}
          <ExpensesTable columns={columns} data={data} />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Expenses