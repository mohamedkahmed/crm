import { HiArrowLongRight } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";
import { MdLibraryAddCheck } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { PiPencilLineThin } from "react-icons/pi";
import PowersTabel from "../PowersTabel"
import { SingleBraedcrumb } from "../../../../components";
import "./AddPower.scss"
const AddPower = () => {
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
    <section className="add-power-section">
    <div className="container">
      <div className="add-power-top">
        <div className="m-b-c">
          <SingleBraedcrumb icon={<MdLibraryAddCheck />} title="اضافه صلاحية" />
        </div>
        <div className="add-new">
          <NavLink to="/powers">
            <HiArrowLongRight />
            عودة
          </NavLink>
        </div>
      </div>

      <div className="add_permissions_box">
      <form action="">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        اضافه صلاحية
                      </h5>
                    </div>

               

<div className="main_parent_in">
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
</div>
                
                <PowersTabel data={data}  columns={columns}/>

                     
                  
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
  </section>
  )
}

export default AddPower