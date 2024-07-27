import { SingleBraedcrumb } from '../../../../components/layout'
import { MdLibraryAddCheck  } from 'react-icons/md'
import employeesImage from "../../../../assets/images/employees-user.png";
// import { FiPlus } from 'react-icons/fi'
// import { PiPencilLineThin } from "react-icons/pi";
// import { NavLink } from 'react-router-dom'
import {CoustomeLink} from '../../../../components/common';
import "./sinaglepower.scss"
import SingaleTabel from './SingaleTabel';
const Singalepower = () => {
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
      validity:"مشرف",

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
      validity:"مشرف",

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
      validity:"مشرف",
   
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
      validity:"مشرف",

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
      validity:"مشرف",
     
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
      validity:"مشرف",

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
      validity:"مشرف",

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
      validity:"مشرف",
  
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
      validity:"مشرف",
 
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
      validity:"مشرف",

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
      validity:"مشرف",

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
      validity:"مشرف",
     
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
      validity:"مشرف",
    
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
      validity:"مشرف",
 
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
      validity:"مشرف",

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
      validity:"مشرف",

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
      validity:"مشرف",
      
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
        validity:"مشرف",
  
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
             validity:"مشرف",
       
          date: "2024-02-02"
        },
      ];
  return (
    <div className="sinagelpower">
        <div className="container">
        <div className="sinaglePermissions_top">
            <div className="m-b-c">
              <SingleBraedcrumb
                icon={<MdLibraryAddCheck />}
                title="الصلاحيات"
              />
            </div>
          <CoustomeLink  url={"/powers"} text={"عوده"} />
          </div>
          <div className="sinagleprmaion-box">
                
                  <div className="emplyers">
                  <SingleBraedcrumb
                icon={<MdLibraryAddCheck />}
                title="موظفين بصلاحيه مشرف "
              />
              <SingaleTabel data={data} columns={columns} />
                  </div>
          </div>
        </div>
    </div>
  )
}

export default Singalepower
