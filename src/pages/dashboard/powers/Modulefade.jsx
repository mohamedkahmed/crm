/* eslint-disable no-unused-vars */
import PowersTabel from "./PowersTabel"
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import employeesImage from "../../../assets/images/employees-user.png";
const Modulefade = () => {
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
    <div
              className="modal fade"
              id="staticBackdrop"
              data-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <form action="">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        اضافه صلاحيه
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

               

                    <div className="project_price">
                    <label htmlFor="exampleFormControlSelect10">  اسم الصلاحيه*</label>
                    <input type="text" name="estate-measure" id="exampleFormControlSelect10" />
                    </div>
                    <div className="project_price">
                        <label htmlFor="exampleFormControlSelect10"> تفاصيل الصلاحيه*</label>
                        <input type="text" name="estate-measure" id="exampleFormControlSelect10" />
                    </div>
                
                <PowersTabel data={data}  columns={columns}/>

                     
                  
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        الغاء
                      </button>
                      <button type="button" className="btn btn-primary">
                        حفظ
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
  )
}

export default Modulefade
