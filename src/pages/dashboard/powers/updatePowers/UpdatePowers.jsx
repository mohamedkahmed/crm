
import { SingleBraedcrumb } from '../../../../components'
import { MdLibraryAddCheck, MdOutlineDateRange  } from 'react-icons/md'
import { FiPlus } from 'react-icons/fi'
import { PiPencilLineThin } from "react-icons/pi";

import { NavLink } from 'react-router-dom'
import "./UpdatePowers.scss";
const UpdatePowers = () => {
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
                اضافة جديد
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
                    <div className="btn-down">
                <NavLink className="cancel" to="/invoices">
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
