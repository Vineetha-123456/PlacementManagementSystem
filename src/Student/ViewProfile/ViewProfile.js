import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ViewProfile.css"; // Import CSS file for styling
import { useUserContext } from "./../../Context/UserContext";
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function ViewProfile() {
  const [studentDetails, setStudentDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { update } = useUserContext();
  const studentUsername = localStorage.getItem("studentUsername"); // Username stored after login

  useEffect(
    () => {
      const fetchStudentDetails = async () => {
        await axios
          .get(
            `http://localhost:8087/placement-system/api/students/username/${studentUsername}`
          )
          .then(res => {
            setStudentDetails(res.data);
            console.log(res.data);
            setLoading(false);
          })
          .catch(e => {
            console.log(e);
          });
      };
      fetchStudentDetails();
    },
    [studentUsername]
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  const Update = id => {
    return () => {
      update(id);
    };
  };
  return (
    <div className="student-profile">
      <h1>Student Profile</h1>
      <div className="f1">
        <div className="f2">
          <p>
            Name : {studentDetails.username}
          </p>
          <p>
            Batch: {studentDetails.batch}
          </p>
          <p>
            Email: {studentDetails.email}
          </p>
          <p>
            Roll No: {studentDetails.rollNo}
          </p>
          <p>
            Department: {studentDetails.stream}
          </p>
          <p>
            contact No: {studentDetails.contactNo}
          </p>
          <p>
            Status: {studentDetails.status}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ViewProfile;
