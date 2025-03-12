import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from "./Login/Login";
import Home from "./Home/Home";
import Common from "./Student/Common/Common"
import SignUp from "./SignUp/SignUp"
import SHome from "./Student/SHome/SHome";
import ALogin from "./Admin/ALogin/ALogin";
import ACommon from "./Admin/ACommon/ACommon";
import AHome from "./Admin/AHome/AHome";
import ViewProfile from "./Student/ViewProfile/ViewProfile"
import ActiveJobs from "./Student/ActiveJobs/ActiveJobs"
import AllStudents from "./Admin/AllStudents/AllStudents";
import SProfile from "./Admin/SProfile/SProfile";
import AllJobs from "./Admin/AllJobs/AllJobs";
import JobDetails from "./Student/JobDetails/JobDetails";
import UpdateProfile from "./Student/UpdateProfile/UpdateProfile";
import Announcements from "./Admin/Announcements/Announcements";
import Community from "./Student/Community/Community";
import About from "./About/About";
import Contact from "./Contact/Contact";
import StudentProfile from "./Student/StudentProfile/StudentProfile";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/Login" element= {<Login/>} />
      <Route path="/SignUp" element= {<SignUp/>} />
      <Route path="/About" element= {<About/>} />
      <Route path="/Contact" element= {<Contact/>} />
      <Route path="/Common" element= {<Common/>} >
      
           <Route path="/Common/SHome" element= {<SHome/>} />
           <Route path="/Common/ViewProfile" element= {<ViewProfile/>} />
           <Route path="/Common/UpdateProfile" element= {<UpdateProfile/>} />
           <Route path="/Common/ActiveJobs" element= {<ActiveJobs/>} />
           <Route path="/Common/JobDetails" element= {<JobDetails/>} />
           <Route path="UpdateProfile/:studentId" element={<UpdateProfile />}/>
           {/* <Route path="/Common/StudentProfile" element= {<StudentProfile/>} /> */}
           
           <Route path="StudentProfile/:studentId" element={<StudentProfile />} />
           <Route path="/Common/Community" element= {<Community/>} />
      </Route>
      <Route path="/ALogin" element= {<ALogin/>} />
      <Route path="/ACommon" element= {<ACommon/>} >
            <Route path="/ACommon/AHome" element= {<AHome/>} />
           
            <Route path="/ACommon/AllStudents" element= {<AllStudents/>} />
            <Route path="/ACommon/SProfile" element= {<SProfile/>} />
            

            <Route path="/ACommon/AllJobs" element= {<AllJobs/>} />
            <Route path="/ACommon/Announcements" element= {<Announcements/>} />
      </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
