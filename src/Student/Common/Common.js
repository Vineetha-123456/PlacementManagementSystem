import "./Common.css";
import Navbar from "../Navbar/Navbar"
import { Outlet } from "react-router-dom";

const Common = () => {
  return (
    <>
   
    
        <Navbar/>
      
       <div className="main1">

<div className="Sidebar1">
    <div className="Side-links1">
       
        <a href="/Common/SHome" className="Dlinks1">Dashboard</a>
         <div className="line"></div>
        
        <a href="/Common/ViewProfile" className="Dlinks1">Profile</a>
        <div className="line"></div>
        <a href="/Common/ActiveJobs" className="Dlinks1">Active Drives</a>
        <div className="line"></div>
    
        <a href="/Common/Community" className="Dlinks1">Community </a>
        
    </div>
    </div>
   
  
   <div className="other-side1">
    <Outlet/>
    </div>
    </div>
    </>

  );
};

export default Common;
