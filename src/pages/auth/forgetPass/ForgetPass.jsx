import React from 'react'
import { FaRegUser } from "react-icons/fa";
import "./ForgetPass.scss";
const ForgetPass = () => {
  return (
    <>
        <section className='forget_wrapper'>
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
    <div className="btn_par">
    <button type="submit" className="btn btn-primary">ارسال</button>
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

export default ForgetPass
