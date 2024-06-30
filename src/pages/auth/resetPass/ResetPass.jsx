import React from 'react'
import { FaLock } from "react-icons/fa";
import "./ResetPass.scss";
import { useNavigate } from 'react-router-dom';
const ResetPass = () => {
    const navigate = useNavigate();
    const onSubmit = (() => {
        navigate('/login')
    })
  return (
    <>
              <section className='resetPass_wrapper'>
        <div className="container">
            <div className="parent_box">

            <div className="x_box">
                <h5>اعاده تعيين كلمه المرور <FaLock />
                </h5>
  <form className="px-4 py-3" onSubmit={onSubmit}>
  <div className="form-group">
      <label htmlFor="exampleDropdownFormPassword1">كلمة المرور</label>
      <div className="input_Parent">

      <input type="password" required name='password' className="form-control" id="exampleDropdownFormPassword1"/>

      <FaLock />

      </div>
    </div>
    <div className="form-group">
      <label htmlFor="exampleDropdownFormPassword2">كلمة المرور</label>
      <div className="input_Parent">

      <input type="password" required name='password' className="form-control" id="exampleDropdownFormPassword2" />

      <FaLock />

      </div>
    </div>
    <div className="btn_par">
    <button type="submit" className="btn btn-primary" >تاكيد</button>
    </div>
  </form>
</div>
<div className="main_logo">
                    <img src="/images/logo.svg" alt="logo" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ResetPass
