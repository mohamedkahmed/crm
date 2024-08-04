import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import store from "../store";
import { Loader } from "../hooks/LoaderMidelware";
import Error from "../pages/error/Error";
import {Home, AddInvoices, Mymission, Allusers, SingaleEmployer, UpdateExp, UpdateInvoices, UserProfile, UpdateMeeting, Allmeeting, AddExpenses, AddPower, Meeting, Addmeeting, Singalemeeting, Singalexpenses, Singaleinvoice, Singalepower, Mediator, UpdatePowers, Updateclient, Updateemployeer, UpdateProject, Updatemediator, Client, Administration, Calendar, Employees, Expenses, Invoices, Mission, Powers, Projects, Reports, SharedLayout, SingleProject, ReportDetails} from "../pages/dashboard";
import { AddEmployees, AddProject, AddClient, AddMediator } from "../components/crm";
import Login from "../pages/auth/login/Login";
import ForgetPass from "../pages/auth/forgetPass/forgetPass";
import ResetPass from "../pages/auth/resetPass/ResetPass";

const routes = [
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      { index: true, element: <Mymission /> },
      { path: "administration", element: <Administration /> },
      { path: "calendar", element: <Calendar /> },
      { path: "employees", element: <Employees /> },
      { path: "expenses", element: <Expenses /> },
      { path: "invoices", element: <Invoices /> },
      { path: "mission", element: <Mission /> },
      { path: "powers", element: <Powers /> },
      { path: "projects", element: <Projects /> },
      { path: "client", element: <Client /> },
      { path: "mediator", element: <Mediator /> },
      { path: "reports", element: <Reports /> },
      { path: "addemployees", element: <AddEmployees /> },
      { path: "AddProject", element: <AddProject /> },
      { path: "addPower", element: <AddPower /> },
      { path: "addClient", element: <AddClient /> },
      { path: "addMediator", element: <AddMediator /> },
      { path: "addExpenses", element: <AddExpenses /> },
      { path: "reportDetails/:id", element: <ReportDetails /> },
      { path: "projects/:id", element: <SingleProject /> },
      { path: "update-project/:id", element: <UpdateProject /> },
      { path: "employees-update/:id", element: <Updateemployeer /> },
      { path: "employees/:id", element: <SingaleEmployer /> },
      { path: "update-client/:id", element: <Updateclient /> },
      { path: "updateInvoices/:id", element: <UpdateInvoices /> },
      { path: "update-medtiator/:id", element: <Updatemediator /> },
      { path: "update-power/:id", element: <UpdatePowers /> },
      { path: "updateExp/:id", element: <UpdateExp /> },
      { path: "updateMeeting/:id", element: <UpdateMeeting /> },
      { path: "addInvoices", element: <AddInvoices /> },
      { path: "powers/:id", element: <Singalepower /> },
      { path: "invoices/:id", element: <Singaleinvoice /> },
      { path: "expenses/:id", element: <Singalexpenses /> },
      { path: "meeting", element: <Meeting /> },
      { path: "meeting/:id", element: <Singalemeeting /> },
      { path: "AddMeeting", element: <Addmeeting /> },
      { path: "all-meeting", element: <Allmeeting /> },
      { path: "userProfile", element: <UserProfile /> },
      { path: "admin", element: <Home /> },
      { path: "all-users", element: <Allusers />, loader: Loader(store , "/all-users") },
    ],
  },
  { path: "*", element: <Error /> },
  { path: "login", element: <Login /> },
  { path: "forgetPassword", element: <ForgetPass /> },
  { path: "resetPassword/:token", element: <ResetPass /> },
];

const router = createBrowserRouter(routes);

const AppRoutes = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default AppRoutes;




// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Error from "../pages/error/Error";
// import {Home,AddInvoices,Mymission,Allusers,SingaleEmployer ,UpdateExp,UpdateInvoices, UserProfile ,UpdateMeeting,Allmeeting,AddExpenses ,AddPower,Meeting,Addmeeting,Singalemeeting ,Singalexpenses,Singaleinvoice,Singalepower,Mediator,UpdatePowers, Updateclient,Updateemployeer,UpdateProject ,Updatemediator,Client, Administration, Calendar, Employees, Expenses, Invoices, Mission, Powers, Projects, Reports, SharedLayout, SingleProject, ReportDetails} from "../pages/dashboard";
// import { AddEmployees ,AddProject, AddClient, AddMediator } from "../components/crm";
// import Login from "../pages/auth/login/Login";
// import ForgetPass from "../pages/auth/forgetPass/forgetPass";
// import ResetPass from "../pages/auth/resetPass/ResetPass";
// import {Loader} from "../hooks/LoaderMidelware";
// import store from "../store";
// const AppRoutes = () => {
//   return (
//     <BrowserRouter>
//     <Routes>
// <Route path="/" element={<SharedLayout/>}>
// <Route index element={<Mymission/>}/>
// <Route path="administration" element={<Administration/>}/>
// <Route path="calendar" element={<Calendar/>}/>
// <Route path="employees" element={<Employees/>}/>
// <Route path="expenses" element={<Expenses/>}/>
// <Route path="invoices" element={<Invoices/>}/>
// <Route path="mission" element={<Mission/>}/>
// <Route path="powers" element={<Powers/>}/>
// <Route path="projects" element={<Projects/>}/>
// <Route path="client" element={<Client/>}/>
// <Route path="mediator" element={<Mediator/>}/>
// <Route path="reports" element={<Reports/>}/>
// <Route path="addemployees" element={<AddEmployees/>}/>
// <Route path="AddProject" element={<AddProject/>}/>
// <Route path="addPower" element={<AddPower/>}/>
// <Route path="addClient" element={<AddClient/>}/>
// <Route path="addMediator" element={<AddMediator/>}/>
// <Route path="addExpenses" element={<AddExpenses/>}/>
// <Route path="reportDetails/:id" element={<ReportDetails/>}/>
// <Route path="projects/:id" element={<SingleProject/>}/>
// <Route path="update-project/:id" element={<UpdateProject/>}/>
// <Route path="employees-update/:id" element={<Updateemployeer/>}/>
// <Route path="employees/:id" element={<SingaleEmployer/>}/>
// <Route path="update-client/:id" element={<Updateclient/>}/>
// <Route path="updateInvoices/:id" element={<UpdateInvoices/>}/>
// <Route path="update-medtiator/:id" element={<Updatemediator/>}/>
// <Route path="update-power/:id" element={<UpdatePowers/>}/>
// <Route path="updateExp/:id" element={<UpdateExp/>}/>
// <Route path="updateMeeting/:id" element={<UpdateMeeting/>}/>
// <Route path="addInvoices" element={<AddInvoices/>}/>
// <Route path="powers/:id" element={<Singalepower/>}/>
// <Route path="invoices/:id" element={<Singaleinvoice/>}/>
// <Route path="expenses/:id" element={<Singalexpenses/>}/>
// <Route path="meeting" element={<Meeting/>}/>
// <Route  path="meeting/:id" element={<Singalemeeting/>}/>
// <Route  path="AddMeeting" element={<Addmeeting/>}/>
// <Route path="all-meeting" element={<Allmeeting/>}/>
// <Route path="userProfile" element={<UserProfile/>}/>
// <Route path="admin" element={<Home/>}/>
// <Route  path="all-users" element={<Allusers/>} loader={Loader (store)}/>
// </Route>

//      <Route path="*" element={<Error/>}/>
//      <Route path="login" element={<Login/>}/>
//      <Route path="forgetPassword" element={<ForgetPass/>}/>
//      <Route path="resetPassword/:token" element={<ResetPass/>}/>

//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default AppRoutes
