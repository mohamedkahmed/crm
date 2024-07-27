import { Outlet, useNavigate } from 'react-router-dom'
import {Sidebar, Topbar} from "../../components/layout"
import "./SharedLayout.scss"
const SharedLayout = () => {
  const user = true;
  const navigate = useNavigate();
  return (
    <>
    {user ?    <main className='dashboard'>
      <Sidebar/>
      <div>
        <Topbar/>
        <div className="dashboard-page">
        <Outlet/>
        </div>
      </div>
    </main> : navigate('/login')}

    </>
  )
}

export default SharedLayout