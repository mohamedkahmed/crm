import "./allmeeting.scss"
import {SingleBraedcrumb} from "../../../../components/layout"
import { MdMeetingRoom } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";
import {CoustomeLink} from "../../../../components/common";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import employeesImage from "../../../../assets/images/employees-user.png";
import { Link, NavLink } from "react-router-dom";
import { BiSolidShow } from "react-icons/bi";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import AllmeetingTabel from "./AllmeetingTabel";
import { FaSearch } from "react-icons/fa";
const Allmeeting = () => {
    const columns = [
        {
          name: "عنوان الإجتماع",
          selector: (row) => row.validity,

        },
   
        {
          name: "تفاصيل الإجتماع",
          selector: (row) => row.mission,
        },
        {
          name: " نتائج الإجتماع",
          selector: (row) => row.date,
        },
        {
            name: "تاريخ الإجتماع",
            selector: (row) => row.mission,
      
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
              <Link className="dropdown-item" to="/meeting/123">عرض <BiSolidShow />
              </Link>
                <Link className="dropdown-item" to="/updateMeeting/123">
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
          validity: "مسؤل مالي",
          persons: {
            number: "+20",
            image: employeesImage
          },
          mission: "اسم الصلاحية",
          date: "2024-05-28",
          procedure: <HiOutlineDotsHorizontal />,
        },
        {
          id: 2,
          validity: "مشرف",
          persons: {
            number: "+20",
            image: employeesImage
          },
          mission: "اسم الصلاحية",
          date: "2024-05-28",
          procedure: <HiOutlineDotsHorizontal />,
        },
        {
          id: 3,
          validity: "مسؤول اداري",
          persons: {
            number: "+20",
            image: employeesImage
          },
          mission: "اسم الصلاحية",
          date: "2024-05-28",
          procedure: <HiOutlineDotsHorizontal />,
        },
        {
          id: 4,
          validity: "مشرف",
          persons: {
            number: "+20",
            image: employeesImage
          },
          mission: "اسم الصلاحية",
          date: "2024-05-28",
          procedure: <HiOutlineDotsHorizontal />,
        },
        {
          id: 5,
          validity: "مشرف",
          persons: {
            number: "+20",
            image: employeesImage
          },
          mission: "اسم الصلاحية",
          date: "2024-05-28",
          procedure: <HiOutlineDotsHorizontal />,
        },
        {
          id: 6,
          validity: "مشرف",
          persons: {
            number: "+20",
            image: employeesImage
          },
          mission: "اسم الصلاحية",
          date: "2024-05-28",
          procedure: <HiOutlineDotsHorizontal />,
        },
        {
          id: 7,
          validity: "مسؤل مالي",
          persons: {
            number: "+20",
            image: employeesImage
          },
          mission: "اسم الصلاحية",
          date: "2024-05-28",
          procedure: <HiOutlineDotsHorizontal />,
        },
        {
          id: 8,
          validity: "مسؤل مالي",
          persons: {
            number: "+20",
            image: employeesImage
          },
          mission: "اسم الصلاحية",
          date: "2024-05-28",
          procedure: <HiOutlineDotsHorizontal />,
        },
        {
          id: 9,
          validity: "مسؤل مالي",
          persons: {
            number: "+20",
            image: employeesImage
          },
          mission: "اسم الصلاحية",
          date: "2024-05-28",
          procedure: <HiOutlineDotsHorizontal />,
        },
        {
          id: 10,
          validity: "مسؤل مالي",
          persons: {
            number: "+20",
            image: employeesImage
          },
          mission: "اسم الصلاحية",
          date: "2024-05-28",
          procedure: <HiOutlineDotsHorizontal />,
        },
        {
          id: 11,
          validity: "مسؤل مالي",
          persons: {
            number: "+20",
            image: employeesImage
          },
          mission: "اسم الصلاحية",
          date: "2024-05-28",
          procedure: <HiOutlineDotsHorizontal />,
        },
        {
          id: 12,
          validity: "مسؤل مالي",
          persons: {
            number: "+20",
            image: employeesImage
          },
          mission: "اسم الصلاحية",
          date: "2024-05-28",
          procedure: <HiOutlineDotsHorizontal />,
        },
        {
          id: 13,
          validity: "مسؤل مالي",
          persons: {
            number: "+20",
            image: employeesImage
          },
          mission: "اسم الصلاحية",
          date: "2024-05-28",
          procedure: <HiOutlineDotsHorizontal />,
        },
        {
          id: 14,
          validity: "مسؤل مالي",
          persons: {
            number: "+20",
            image: employeesImage
          },
          mission: "اسم الصلاحية",
          date: "2024-05-28",
          procedure: <HiOutlineDotsHorizontal />,
        },
        {
          id: 15,
          validity: "مسؤل مالي",
          persons: {
            number: "+20",
            image: employeesImage
          },
          mission: "اسم الصلاحية",
          date: "2024-05-28",
          procedure: <HiOutlineDotsHorizontal />,
        }
      ];
  return (
    <div className="all-meeting">
    <div className="container">
    <div className="calendar_top">
                    <div className="m-b-c">
                    <SingleBraedcrumb icon={<MdMeetingRoom />} title="الإجتماعات" />
                    </div>
                    <div className="add-new">
                    {" "}
                    <NavLink to="/meeting">
                    <HiArrowLongRight />
                    عودة
                    </NavLink>{" "}
                </div>
        </div> 
        <div className="meeting-box">
        <div className="box-top">
          <div className="title">
            <p>
              الإجتماعات <span>({data.length})</span>
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

        {/* about  meeting table*/}
        <AllmeetingTabel columns={columns} data={data} />
      </div>
    </div>
</div>
  )
}

export default Allmeeting