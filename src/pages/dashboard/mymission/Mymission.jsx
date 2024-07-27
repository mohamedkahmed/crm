import { useState } from "react";
import { SingleBraedcrumb } from "../../../components/layout";
import { FaHome, FaSearch } from "react-icons/fa";
import { MdContentPasteGo } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BiSolidShow } from "react-icons/bi";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import "./Mymission.scss";
import MymissionTabel from "./MymissionTabel";
 const Mymission = () => {
  const columns = [
    {
      name: "عنوان المهمة",
      selector: (row) => row.address,
/*       cell: (row) => (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={row.name.image}
            alt={row.name.text}
            style={{ width: "auto", height: "auto", marginRight: "10px" }}
          />
          <span>{row.name.text}</span>
        </div>
      ), */
    },
    {
      name: "اسم المشروع",
      selector: (row) => row.projectName,
    },
    {
      name: "تفاصيل المهمة",
      selector: (row) => row.missionDetails,
    },
    {
      name: "حاله المهمة",
      selector: (row) => row.missionState,
    },
    {
      name: "مضافه من قبل",
      selector: (row) => row.addBefore,
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
          <Link className="dropdown-item" to="/reportDetails/123">عرض المهمة <BiSolidShow />
          </Link>
            <Link className="dropdown-item" to="">
              اكتمال المهمة <MdContentPasteGo />
            </Link>
            <Link className="dropdown-item" to="/projects/1">
              عرض المشروع <TbListDetails  />
            </Link>
            <Link className="dropdown-item" to="/update-project/67">
              تعديل بيانات المشروع <GrEdit />
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
      address: "عنوان",
      projectName: "اسم المشروع",
      missionDetails: "تفاصيل المهمة",
      missionState: "حاله المهمة",
      procedure: <HiOutlineDotsHorizontal />,
      addBefore: "مضافه"
    },
    {
      id: 2,
      address: "عنوان",
      projectName: "اسم المشروع",
      missionDetails: "تفاصيل المهمة",
      missionState: "حاله المهمة",
      procedure: <HiOutlineDotsHorizontal />,
      addBefore: "مضافه"
    },
    {
      id: 3,
      address: "عنوان",
      projectName: "اسم المشروع",
      missionDetails: "تفاصيل المهمة",
      missionState: "حاله المهمة",
      procedure: <HiOutlineDotsHorizontal />,
      addBefore: "مضافه"
    },
    {
      id: 4,
      address: "عنوان",
      projectName: "اسم المشروع",
      missionDetails: "تفاصيل المهمة",
      missionState: "حاله المهمة",
      procedure: <HiOutlineDotsHorizontal />,
      addBefore: "مضافه"
    },
    {
      id: 5,
      address: "عنوان",
      projectName: "اسم المشروع",
      missionDetails: "تفاصيل المهمة",
      missionState: "حاله المهمة",
      procedure: <HiOutlineDotsHorizontal />,
      addBefore: "مضافه"
    },
    {
      id: 6,
      address: "عنوان",
      projectName: "اسم المشروع",
      missionDetails: "تفاصيل المهمة",
      missionState: "حاله المهمة",
      procedure: <HiOutlineDotsHorizontal />,
      addBefore: "مضافه"
    },
    {
      id: 7,
      address: "عنوان",
      projectName: "اسم المشروع",
      missionDetails: "تفاصيل المهمة",
      missionState: "حاله المهمة",
      procedure: <HiOutlineDotsHorizontal />,
      addBefore: "مضافه"
    },
    {
      id: 8,
      address: "عنوان",
      projectName: "اسم المشروع",
      missionDetails: "تفاصيل المهمة",
      missionState: "حاله المهمة",
      procedure: <HiOutlineDotsHorizontal />,
      addBefore: "مضافه"
    },
    {
      id: 9,
      address: "عنوان",
      projectName: "اسم المشروع",
      missionDetails: "تفاصيل المهمة",
      missionState: "حاله المهمة",
      procedure: <HiOutlineDotsHorizontal />,
      addBefore: "مضافه"
    },
    {
      id: 10,
      address: "عنوان",
      projectName: "اسم المشروع",
      missionDetails: "تفاصيل المهمة",
      missionState: "حاله المهمة",
      procedure: <HiOutlineDotsHorizontal />,
      addBefore: "مضافه"
    },
    {
      id: 11,
      address: "عنوان",
      projectName: "اسم المشروع",
      missionDetails: "تفاصيل المهمة",
      missionState: "حاله المهمة",
      procedure: <HiOutlineDotsHorizontal />,
      addBefore: "مضافه"
    },
    {
      id: 12,
      address: "عنوان",
      projectName: "اسم المشروع",
      missionDetails: "تفاصيل المهمة",
      missionState: "حاله المهمة",
      procedure: <HiOutlineDotsHorizontal />,
      addBefore: "مضافه"
    },
    {
      id: 13,
      address: "عنوان",
      projectName: "اسم المشروع",
      missionDetails: "تفاصيل المهمة",
      missionState: "حاله المهمة",
      procedure: <HiOutlineDotsHorizontal />,
      addBefore: "مضافه"
    },
    {
      id: 14,
      address: "عنوان",
      projectName: "اسم المشروع",
      missionDetails: "تفاصيل المهمة",
      missionState: "حاله المهمة",
      procedure: <HiOutlineDotsHorizontal />,
      addBefore: "مضافه"
    },
    {
      id: 15,
      address: "عنوان",
      projectName: "اسم المشروع",
      missionDetails: "تفاصيل المهمة",
      missionState: "حاله المهمة",
      procedure: <HiOutlineDotsHorizontal />,
      addBefore: "مضافه"
    }
  ];
  const [records, setRecords] = useState(data);
  const [selectedDate, setSelectedDate] = useState("");
  const handleFilter = (event) => {
    const newData = data.filter((row) => {
      return row.address
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
    <section className="myMission_section_wrapper">
      <div className="container">
      <div className="myMission_top">
            <div className="m-b-c">
              <SingleBraedcrumb
                icon={<FaHome />}
                title="المهام التي حصلت عليها"
              />
            </div>
{/*             <div className="add-new">
      
               <NavLink to="/addPower">
              <FiPlus />
              اضافة صلاحية
            </NavLink>
           
            </div>  */}
           
          </div>
          <div className="myMission_box">
          <div className="box-top">
              <div className="title">
                {" "}
                <p>
                  {" "}
                  عدد المهمات <span>({data.length})</span>
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

            {/* powers table*/}
            <MymissionTabel columns={columns} data={records} />
          </div>
      </div>
    </section>
    </>
  )
}
export default Mymission