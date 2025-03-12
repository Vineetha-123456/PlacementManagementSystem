import "./ACommon.css";
import Navb from "../Navb/Navb"
import { Outlet } from "react-router-dom";

const ACommon = () => {
  return (
    <>
    
        <Navb/>
 <div className="main">

    <div className="Sidebar">
        <div className="Side-links">
           
            <a href="/ACommon/AHome" className="Dlinks">Dashboard</a>
             <div className="line"></div>
            
            <a href="/ACommon/AllStudents" className="Dlinks">Student Profile</a>
            <div className="line"></div>
            <a href="/ACommon/AllJobs" className="Dlinks">All Drives</a>
            <div className="line"></div>
            <a href="/ACommon/Announcements" className="Dlinks">Announcement </a>
            <div className="line"></div>
        </div>
      
    </div>
    <div className="other-side">
    <Outlet/>
    </div>
    </div>
    </>

  );
};

export default ACommon;