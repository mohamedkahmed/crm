import  { useState } from "react";
import {SingleBraedcrumb} from "../../../components";
import { FaSearch } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import employeesImage from "../../../assets/images/employees-user.png";
import { NavLink, Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import MediatoeTaple from "./MediatoeTaple";
import { BiSolidShow } from "react-icons/bi";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import "./Mediator.scss"
const Mediator = () => {
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
      name: "محافظة",
      selector: (row) => row.city,
    },
    {
      name: "رقم الهاتف",
      selector: (row) => row.phone,
    },
    {
      name: "تاريخ الانشاء",
      selector: (row) => row.date,
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
            <Link className="dropdown-item" to="/update-medtiator/56">
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
        text: "اسم الوسيط",
        image: employeesImage,
      },
      email: "email@gmail.com",
      city: "القاهره",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 2,
      name: {
        text: "اسم الوسيط",
        image: employeesImage,
      },
      email: "email@gmail.com",
      city: "الغربية",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 3,
      name: {
        text: "اسم الوسيط",
        image: employeesImage,
      },
      email: "email@gmail.com",
      city: "الدقهلية",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 4,
      name: {
        text: "اسم الوسيط",
        image: employeesImage,
      },
      email: "email@gmail.com",
      city: "الغربية",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 5,
      name: {
        text: "اسم الوسيط",
        image: employeesImage,
      },
      email: "email@gmail.com",
      city: "المنصوره",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 6,
      name: {
        text: "اسم الوسيط",
        image: employeesImage,
      },
      email: "email@gmail.com",
      city: "القاهره",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 7,
      name: {
        text: "اسم الوسيط",
        image: employeesImage,
      },
      email: "email@gmail.com",
      city: "القاهره",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 8,
      name: {
        text: "اسم الوسيط",
        image: employeesImage,
      },
      email: "email@gmail.com",
      city: "القاهره",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 9,
      name: {
        text: "اسم الوسيط",
        image: employeesImage,
      },
      email: "email@gmail.com",
      city: "القاهره",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 10,
      name: {
        text: "محمد كمال",
        image: employeesImage,
      },
      email: "email@gmail.com",
      city: "القاهره",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 11,
      name: {
        text: "اسم الوسيط",
        image: employeesImage,
      },
      email: "email@gmail.com",
      city: "القاهره",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 12,
      name: {
        text: "اسم الوسيط",
        image: employeesImage,
      },
      email: "email@gmail.com",
      city: "القاهره",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 13,
      name: {
        text: "اسم الوسيط",
        image: employeesImage,
      },
      email: "email@gmail.com",
      city: "القاهره",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 14,
      name: {
        text: "اسم الوسيط",
        image: employeesImage,
      },
      email: "email@gmail.com",
      city: "القاهره",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 15,
      name: {
        text: "اسم الوسيط",
        image: employeesImage,
      },
      email: "email@gmail.com",
      city: "القاهره",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 16,
      name: {
        text: "اسم الوسيط",
        image: employeesImage,
      },
      email: "email@gmail.com",
      city: "القاهره",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 17,
      name: {
        text: "اسم الوسيط",
        image: employeesImage,
      },
      email: "email@gmail.com",
      city: "القاهره",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 18,
      name: {
        text: "اسم الوسيط",
        image: employeesImage,
      },
      email: "email@gmail.com",
      city: "القاهره",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 19,
      name: {
        text: "اسم الوسيط",
        image: employeesImage,
      },
      email: "email@gmail.com",
      city: "القاهره",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 20,
      name: {
        text: "اسم الوسيط",
        image: employeesImage,
      },
      email: "email@gmail.com",
      city: "القاهره",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 21,
      name: {
        text: "اسم الوسيط",
        image: employeesImage,
      },
      email: "email@gmail.com",
      city: "القاهره",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
  ];
  const [records, setRecords] = useState(data);
  const [selectedDate, setSelectedDate] = useState("");
  const handleFilter = (event) => {
    const newData = data.filter((row) => {
      return row.name.text
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
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
    <section className="main_mediator_wrapper">
      <div className="container">
      <div className="mediator_top">
            <div className="m-b-c">
              <SingleBraedcrumb icon={<FaUsers />} title="الوسطاء" />
            </div>
            <div className="add-new">
              <NavLink to="/addMediator">
                <FiPlus />
                اضافة جديد
              </NavLink>
            </div>
          </div>
                  {/* medaitor table */}

        <div className="medaitor_box">
          <div className="box-top">
            <div className="title">
              {" "}
              <p>
                {" "}
                الوسطاء <span>({data.length})</span>
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
                    locale="ar"
                  />
                </form>
              </div>
            </div>
          </div>

          {/* about  client table*/}
          <MediatoeTaple columns={columns} data={records} />
        </div>
      </div>
    </section>
    </>
  )
}

export default Mediator