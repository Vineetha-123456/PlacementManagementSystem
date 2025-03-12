import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For redirection
import './UpdateProfile.css';

function UpdateProfile() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    stream: '',
    batch: '',
    contactNo: '',
    cgpa: '',
  });

  const studentId = localStorage.getItem('id');
  const navigate = useNavigate(); // Hook for redirecting after successful update

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8087/placement-system/api/students/students/${studentId}`
        );
        setLoading(false);
        setFormData({
          name: response.data.name,
          rollNo: response.data.rollNo,
          stream: response.data.stream,
          batch: response.data.batch,
          contactNo: response.data.contactNo,
          cgpa: response.data.cgpa,
        });
      } catch (error) {
        setError('Error fetching student details');
        setLoading(false);
      }
    };

    fetchStudent();
  }, [studentId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8087/placement-system/api/students/student/${studentId}`,
        formData
      );

      if (response.status === 200) {
        navigate(`/StudentProfile/${studentId}`);  // Navigate to the profile page after update
      } else {
        setError('Error updating student details');
      }
    } catch (error) {
      setError('Error updating student details');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Update Student Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Roll No:</label>
          <input
            type="text"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Stream:</label>
          <input
            type="text"
            name="stream"
            value={formData.stream}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Batch:</label>
          <input
            type="text"
            name="batch"
            value={formData.batch}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contact No:</label>
          <input
            type="text"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>CGPA:</label>
          <input
            type="text"
            name="cgpa"
            value={formData.cgpa}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateProfile;
