import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // to get the studentId from the URL
import "./StudentProfile.css";

const StudentProfile = () => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { studentId } = useParams(); // Get studentId from the URL

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:8087/placement-system/api/students/students/${studentId}`);
        setStudent(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching student details');
        setLoading(false);
      }
    };

    fetchStudent();
  }, [studentId]); // Re-run when studentId changes

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="profile-container">
      <h1> Updated Student Profile</h1>
      {student ? (
        <div>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Roll No:</strong> {student.rollNo}</p>
          <p><strong>Stream:</strong> {student.stream}</p>
          <p><strong>Batch:</strong> {student.batch}</p>
          <p><strong>Contact No:</strong> {student.contactNo}</p>
          <p><strong>CGPA:</strong> {student.cgpa}</p>
        </div>
      ) : (
        <p>Student details not found.</p>
      )}
    </div>
  );
};

export default StudentProfile;
