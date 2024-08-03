import "./allusers.scss"
import { FaUsers } from "react-icons/fa6";
import {SingleBraedcrumb} from './../../../components/layout';
const Allusers = () => {

  return (
    <div>
        <div className="container">

        <div className="calendar_top">
            <div className="m-b-c">
            <SingleBraedcrumb  icon ={<FaUsers />} title = "جميع المستخدمين " />   
             
            </div>
          </div>
          
        </div>
      
    
    </div>
  )
}

export default Allusers
