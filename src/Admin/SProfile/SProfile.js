import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAdminContext } from "./../../Context/AdminContext";
import "./SProfile.css";
const SProfile = () => {
  const { Student} = useAdminContext();
  const [studentDetails, setStudentDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const fetchStudentDetails = async () => {
        await axios.get(`http://localhost:8087/api/students/email/${Student.email}`
        ).then(res=>{
          setStudentDetails(res.data);
          console.log(res.data);
          setLoading(false);
          })
          .catch(e=>{
            console.log(e)
          }
          )
    };

    fetchStudentDetails();
  }, [Student.email]);

  if (loading) {
    return <p>Loading...</p>;
  }
  const sendMail = async() => {
    const email= studentDetails.email;
    await axios.post(`http://localhost:3001/Students/sendMail`,{email}
    ).then(res=>{
      
      console.log(res);
      
      if(res.status===200){
        alert("Email sent Succesfully");
      }
    
      })
      .catch(e=>{
        console.log(e)
      }
      )
  };
  const MarkPlaced = async() => {
    const rollNo= studentDetails.rollNo;
    await axios.put(`http://localhost:3001/Students/placed/${rollNo}`
    ).then(res=>{
      
      console.log(res);
      if(res.status===200){
        alert("Update Succesfull");
      }
      
      })
      .catch(e=>{
        console.log(e)
      }
      )
  };
  const del = async() => {
    const rollNo= studentDetails.rollNo;
    await axios.delete(`http://localhost:3001/Students/students/${rollNo}`
    ).then(res=>{
      
      console.log(res);
      if(res.status===200){
        alert("Update Succesfull");
      }
      
  
    
      })
      .catch(e=>{
        console.log(e)
      }
      )
  };
  return (
    
      
       <div className="student-profile1">
      <h1>Student Profile</h1>
      <div className="f1">
      <div className="vp-img1">
      {/* <img  className='stud-pic11'  height={132} width={132} src= { `http://localhost:3001/Uploads/${studentDetails.photo}`} alt='' /> */}
      </div>
      <div className="f2">
      <h3>Name : {studentDetails.name}</h3>
      <p>Batch: {studentDetails.batch}</p>
      <p>Email: {studentDetails.email}</p>
      <p>Roll No: {studentDetails.rollNo}</p>
      <p>Department: {studentDetails.stream}</p>
      <p>contact No: {studentDetails.contactNo}</p>
      <p>Status: {studentDetails.status}</p>
      {/* <p> Updated Resume: <a className="a1" href={`http://localhost:3001/Uploads/${studentDetails.resumeFile}`}>Resume.pdf</a></p> */}
      {/* <p> Updated Marksheets: <a className="a1" href={`http://localhost:3001/Uploads/${studentDetails.marksheetFile}`}>Marksheet.pdf</a></p> */}
      </div>
      
      </div>
      <div className="btn-f">
        <button onClick={sendMail}>Email regarding Profile Update</button>
        <button onClick={MarkPlaced}>Mark as Placed</button>
        <button onClick={del}>Delete Profile</button>
      </div>
   
    </div>
    
  )
}

export default SProfile
