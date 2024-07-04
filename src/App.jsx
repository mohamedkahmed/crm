import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/error/Error";
import {Home,Mediator, Updateemployeer,UpdateProject ,Client, Administration, Calendar, Employees, Expenses, Invoices, Mission, Powers, Projects, Reports, SharedLayout, SingleProject, ReportDetails} from "./pages/dashboard";
import { AddEmployees ,AddProject, AddPower, AddClient, AddMediator } from "./components";
import Login from "./pages/auth/login/Login";
import ForgetPass from "./pages/auth/forgetPass/forgetPass";
import ResetPass from "./pages/auth/resetPass/ResetPass";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
<Route path="/" element={<SharedLayout/>}>
<Route index element={<Home/>}/>
<Route path="administration" element={<Administration/>}/>
<Route path="calendar" element={<Calendar/>}/>
<Route path="employees" element={<Employees/>}/>
<Route path="expenses" element={<Expenses/>}/>
<Route path="invoices" element={<Invoices/>}/>
<Route path="mission" element={<Mission/>}/>
<Route path="powers" element={<Powers/>}/>
<Route path="projects" element={<Projects/>}/>
<Route path="client" element={<Client/>}/>
<Route path="mediator" element={<Mediator/>}/>
<Route path="reports" element={<Reports/>}/>
<Route path="addemployees" element={<AddEmployees/>}/>
<Route path="AddProject" element={<AddProject/>}/>
<Route path="addPower" element={<AddPower/>}/>
<Route path="addClient" element={<AddClient/>}/>
<Route path="addMediator" element={<AddMediator/>}/>
<Route path="reportDetails" element={<ReportDetails/>}/>
<Route path="SingleProject/:id" element={<SingleProject/>}/>
<Route path="update-project/:id" element={<UpdateProject/>}/>
<Route path="update-employeer/:id" element={<Updateemployeer/>}/>
</Route>
     <Route path="*" element={<Error/>}/>
     <Route path="login" element={<Login/>}/>
     <Route path="forgetPassword" element={<ForgetPass/>}/>
     <Route path="resetPassword/:token" element={<ResetPass/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App