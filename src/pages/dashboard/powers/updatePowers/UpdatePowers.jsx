
import { SingleBraedcrumb } from '../../../../components'
import { MdLibraryAddCheck, MdOutlineDateRange  } from 'react-icons/md'
import { FiPlus } from 'react-icons/fi'
import { PiPencilLineThin } from "react-icons/pi";
import PowersUpdateTabel  from "./PowersUpdateTabel"
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import "./UpdatePowers.scss";
const UpdatePowers = () => {
  const columns = [
    {
      name: "صلاحيه",
      selector: (row) => row.validity,
    },
    {
      name: "مشاهده",
      selector: (row) => row.validity,
      cell: (row) => {
        return <input type="checkbox" />;
      },
    },
    {
      name: " إضافه ",
      selector: (row) => row.persons,
      cell: () => {
        return <input type="checkbox" />;
      },
    },
    {
      name: "تعديل",
      selector: (row) => row.mission,
      cell: () => {
        return <input type="checkbox" />;
      },
    },
    {
      name: " حذف",
      cell: () => {
        return <input type="checkbox" />;
      },
    },
  ];
  const data = [
    {
      id: 1,
      validity: "الرئيسيه ",
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    },
    {
      id: 2,
      validity: "المشاريع",
   
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    },
    {
      id: 3,
      validity: "التقارير",
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    },
    {
      id: 4,
      validity: "الفواتير",
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    },
    {
      id: 5,
      validity: "المهام",
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    },
    {
      id: 6,
      validity: "العملاء",
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    },
    {
      id: 7,
      validity: "الموظفين",
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    },
    {
      id: 8,
      validity: "الاداره",
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    }
  ];
  return (
    <section className='updatePermissions_section_wrapper'>
      <div className="container">
      <div className="updatePermissions_top">
            <div className="m-b-c">
              <SingleBraedcrumb
                icon={<MdLibraryAddCheck />}
                title="الصلاحيات"
              />
            </div>
            <div className="add-new">
              <NavLink to="/addPower">
                <FiPlus />
                اضافة صلاحية
              </NavLink>
            </div>
          </div>

          {/* update permissions box */}

          <div className="updatePermissions_box">
            <div className="top_permission">
                <h5>تفاصيل الصلاحية</h5>
                <div className="add_permission_date">
                    <p>تاريخ الانشاء</p>
                    <span><MdOutlineDateRange /> 15 اغسطس, 2024 </span>
                </div>
                <form action="">
                <div className="permission_name">
                    <div className="main_input">
                    <label htmlFor="permissionName">اسم الصلاحية*</label>
                    <div>
                    <input type="text" name='text' id='permissionName' required />
                    <PiPencilLineThin />

                    </div>
                    </div>
                    <div className="main_input">
                    <label htmlFor="permissionName">تفاصيل الصلاحية*</label>
                    <div>
                    <input type="text" name='text' id='permissionName' required />
                    <PiPencilLineThin />

                    </div>
                    </div>
                    </div>
                    <PowersUpdateTabel    data={data}  columns={columns}/>
                    <div className="btn-down">
                <NavLink className="cancel" to="/powers">
                  الغاء
                </NavLink>
                <button className="save" type="submit">
                  حفظ
                </button>
              </div>
                </form>
            </div>
            
          </div>

      </div>
    </section>
  )
}

export default UpdatePowers
