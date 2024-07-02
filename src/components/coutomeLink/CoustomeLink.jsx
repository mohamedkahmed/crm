/* eslint-disable react/prop-types */
import React from 'react'
import { FiPlus } from "react-icons/fi";
import {Link} from "react-router-dom"
import "./link.scss"
const CoustomeLink = ({url , text}) => {
  return (
    <div className="add-new">
    {" "}
    <Link className='url' to={url}>
      <FiPlus />
      {text}
    </Link>{" "}
   
  </div>
  )
}

export default CoustomeLink