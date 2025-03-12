import React from 'react'
import "./Navbar.css"
import { useUserContext } from "./../../Context/UserContext";
import {Link} from 'react-router-dom'

function Navbar() {
  const { logOut } = useUserContext();
  return (
    <>
    <div className="navi">
    <div className="ansec">
    <span className="ansec-txt">
      <span>ICON</span>
      <span className="E"></span>
      <span></span>
    </span>
    </div>
    <div className="links">
         <a href="/Common/SHome" className="hom">Home</a>
         {/* <a href="/Common/Community" className="Com">Community</a> */}
         <button className="logout-btn" onClick={logOut}  ><Link to="/Login">LogOut</Link></button>
    </div>


    
  </div>

  </>
  )
}

export default Navbar;