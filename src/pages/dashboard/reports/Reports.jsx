import { BiSolidReport } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { SingleBraedcrumb } from "../../../components/layout";
import { FaSearch } from "react-icons/fa";
import employeesImage from "../../../assets/images/employees-user.png";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import "./Reports.scss";
import ReportTable from "./ReportTable";
import { Link } from "react-router-dom";
const Reports = () => {
  const columns = [
    {
      name: "رقم المهمة",
      selector: (row) => row.id,
    },
    {
      name: " عنوان المهمة",
      selector: (row) => row.name.text,
    },
    {
      name: " إسم الموظف ",
      selector: (row) => row.name.text,
    },

    {
      name: " إسم المشروع ",
      selector: (row) => row.name.text,
    },

    {
      name: "  تاريخ المهمة ",
      selector: (row) => row.name.text,
    },
    {
      name: "  أخر تحديث للمهمة  ",
      selector: (row) => row.name.text,
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
            <Link className="dropdown-item" to="/reportDetails/123">
              عرض <BiSolidShow />
            </Link>
            <Link className="dropdown-item" to="/update-report/34">
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
        image: employeesImage,
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02",
    },
    {
      id: 2,
      name: {
        text: "اسم الموظف",
        image: employeesImage,
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02",
    },
    {
      id: 3,
      name: {
        text: "اسم الموظف",
        image: employeesImage,
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02",
    },
    {
      id: 4,
      name: {
        text: "اسم الموظف",
        image: employeesImage,
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02",
    },
    {
      id: 5,
      name: {
        text: "اسم الموظف",
        image: employeesImage,
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-01-01",
    },
    {
      id: 6,
      name: {
        text: "اسم الموظف",
        image: employeesImage,
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02",
    },
    {
      id: 7,
      name: {
        text: "اسم الموظف",
        image: employeesImage,
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02",
    },
    {
      id: 8,
      name: {
        text: "اسم الموظف",
        image: employeesImage,
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02",
    },
    {
      id: 9,
      name: {
        text: "اسم الموظف",
        image: employeesImage,
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02",
    },
    {
      id: 10,
      name: {
        text: "محمد كمال",
        image: employeesImage,
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02",
    },
    {
      id: 11,
      name: {
        text: "اسم الموظف",
        image: employeesImage,
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02",
    },
    {
      id: 12,
      name: {
        text: "اسم الموظف",
        image: employeesImage,
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02",
    },
    {
      id: 13,
      name: {
        text: "اسم الموظف",
        image: employeesImage,
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02",
    },
    {
      id: 14,
      name: {
        text: "اسم الموظف",
        image: employeesImage,
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02",
    },
    {
      id: 15,
      name: {
        text: "اسم الموظف",
        image: employeesImage,
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02",
    },
    {
      id: 16,
      name: {
        text: "اسم الموظف",
        image: employeesImage,
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02",
    },
    {
      id: 17,
      name: {
        text: "اسم الموظف",
        image: employeesImage,
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02",
    },
    {
      id: 18,
      name: {
        text: "اسم الموظف",
        image: employeesImage,
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02",
    },
    {
      id: 19,
      name: {
        text: "اسم الموظف",
        image: employeesImage,
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02",
    },
    {
      id: 20,
      name: {
        text: "اسم الموظف",
        image: employeesImage,
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02",
    },
    {
      id: 21,
      name: {
        text: "اسم الموظف",
        image: employeesImage,
      },
      email: "email@gmail.com",
      phone: "021057769423",
      validity: "مسؤل مالي",
      procedure: <HiOutlineDotsHorizontal />,
      date: "2024-02-02",
    },
  ];
  return (
    <div className="reports">
      <div className="container">
        <div className="head-section">
          <SingleBraedcrumb icon={<BiSolidReport />} title="التقارير" />
        </div>
        {/* reports box */}
        <div className="report-box">
          <div className="box-top">
            <div className="title">
              {" "}
              <p>
                {" "}
                التقارير <span>({data.length})</span>
              </p>{" "}
            </div>
            <div className="search-date">
              <div className="search">
                <input type="text" placeholder="البحث..."></input>
                <FaSearch />
              </div>
              <div className="date">
                <form>
                  <input type="date" name="date" />
                </form>
              </div>
            </div>
          </div>

          {/*reports  table*/}
          <ReportTable data={data} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default Reports;
