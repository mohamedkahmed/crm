import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import "./Login.scss";
const Login = () => {
  return (
    <>
        <section className='login_wrapper'>
        <div className="container">
            <div className="parent_box">

            <div className="x_box">
  <form className="px-4 py-3">
    <div className="form-group">
      <label htmlFor="exampleDropdownFormEmail1">البريد الإلكتروني</label>
      <div className="input_Parent">

      <input type="email" name='email' required className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
      <FaRegUser />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="exampleDropdownFormPassword1">كلمة المرور</label>
      <div className="input_Parent">

      <input type="password" required name='password' className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>

      <FaLock />

      </div>
    </div>
    <div className="form-group">
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
        <label className="form-check-label" htmlFor="dropdownCheck">
          تذكرني
        </label>
      </div>
    </div>
    <div className="btn_par">
    <button type="submit" className="btn btn-primary">تسجيل دخول</button>
    </div>
  </form>
  <div className="dropdown-divider"></div>
  <a className="dropdown-item" href="/forgetPassword">هل نسيت كلمة المرور؟</a>
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

export default Login
