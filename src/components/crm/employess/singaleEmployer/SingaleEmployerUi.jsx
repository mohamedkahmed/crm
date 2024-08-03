import { SingleBraedcrumb } from "../../../layout"
import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import "./singaleEmployer.scss"
import {Row , Col} from "react-bootstrap"
import Details from "./Details";
import ContentProject from "./ContentProject";
import ContentMission from "./ContentMission";
const SingaleEmployerUi = () => {
  return (
    <div className="singalemployer">
      <div className="container">
      <div className="singalemployer_top">
          <div className="m-b-c">
            <SingleBraedcrumb
              icon={<FaUser /> }
              title="إحصائيات الموظف "
            />
          </div>
          <div className="add-new">
            <Link to="/employees">
            <FaArrowRightLong />
              عوده
            </Link>
          </div>
        </div>
        <Row className="mt-4 ">
        <Col xs ={12} md={8} className="mb-3">
                <ContentProject />
            </Col>
            <Col xs ={12} md={4}  className="mb-3">
                <Details />
            </Col>
            <Col xs ={12} md={8}  className="mb-3">
                <ContentMission />
            </Col>
     
        </Row>

      </div>
    </div>
  )
}

export default SingaleEmployerUi
