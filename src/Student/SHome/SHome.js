import { React, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './SHome.css';  // Your custom CSS file

const SHome = () => {
  const [student, setStudent] = useState(null); // Store student data
  const [loading, setLoading] = useState(true);  // Loading state to handle async fetch

  // Get the logged-in student's username from localStorage
  const studentUsername = localStorage.getItem("studentUsername"); // Username stored after login

  // Function to fetch the student's data based on username
  const getStudentDetails = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8087/placement-system/api/students/username/${studentUsername}`);
      setStudent(response.data); // Set student data in state
      setLoading(false); // Set loading state to false
    } catch (error) {
      console.error("Error fetching student data:", error);
      setLoading(false); // Set loading state to false even on error
    }
  }, [studentUsername]); // `studentUsername` is a dependency because it can change

  useEffect(() => {
    getStudentDetails(); // Fetch student details on component mount
  }, [getStudentDetails]); // Now the warning should be resolved

  if (loading) {
    return <p>Loading...</p>; // Show loading state until data is fetched
  }

  if (!student) {
    return <p>Student data not found. Please log in again.</p>;
  }

  return (
    <div className="main-container">
      {/* Welcome section */}
      <div className="welcome-section">
        <h1>Welcome Back, {student.username}!</h1>
        <p>Roll No: {student.rollNo}</p>
        <p>Email: {student.email}</p>
      </div>
      {/* Add any other relevant information or sections */}
    </div>
  );
};

export default SHome;
