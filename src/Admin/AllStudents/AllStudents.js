import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./AllStudents.css";
import { useAdminContext } from "./../../Context/AdminContext";

function AllStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ stream: '', batch: '' });
  const [searchRollNo, setSearchRollNo] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null); // Store selected student's details
  const { view } = useAdminContext();

  // Fetch student data when component mounts
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:8087/placement-system/api/students/students');
        setStudents(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching students');
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Handle filter input changes
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Handle RollNo search input change
  const handleSearchChange = (e) => {
    setSearchRollNo(e.target.value);
  };

  // Filter students based on Department, Batch, and Roll No
  const filterStudents = () => {
    let filteredStudents = [...students];

    if (filters.stream) {
      filteredStudents = filteredStudents.filter(student => student.stream.toLowerCase().includes(filters.stream.toLowerCase()));
    }

    if (filters.batch) {
      filteredStudents = filteredStudents.filter(student => student.batch === filters.batch);
    }

    if (searchRollNo) {
      filteredStudents = filteredStudents.filter(student => student.rollNo.toLowerCase().includes(searchRollNo.toLowerCase()));
    }

    return filteredStudents;
  };

  const filteredStudents = filterStudents();

  // Handle View button click
  const handleViewClick = (email) => {
    setSelectedStudent(students.find(student => student.email === email)); // Set selected student data
    view(email); // If needed, call the view function (this could be a navigation function)
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='allstudents-main'>
      <h1>Student List</h1>

      {/* Filters for Department, Batch, Roll No */}
      <div className='sfilters'>
        <label>
          Department:
          <input type="text" name="stream" value={filters.stream} onChange={handleFilterChange} />
        </label>
        <label>
          Batch:
          <input type="text" name="batch" value={filters.batch} onChange={handleFilterChange} />
        </label>
        <label>
          Search Roll No:
          <input type="text" value={searchRollNo} onChange={handleSearchChange} />
        </label>
      </div>

      {/* Display filtered students or a message if no students match the filters */}
      {filteredStudents.length === 0 ? (
        <p>No students found.</p>
      ) : (
        filteredStudents.map((student) => (
          <div className='stud' key={student._id}>
            <div className="stud1">
              <p><div className="sname">Name: </div><div className="sp">{student.username}</div></p>
              <p><div className="sname">Roll No: </div>{student.rollNo}</p>
              <p><div className="sname">Department: </div>{student.stream}</p>
              <p><div className="sname">Batch: </div>{student.batch}</p>
            </div>

            {/* Show contact, email, status, skills, and CGPA if the View button is clicked */}
            {selectedStudent && selectedStudent.email === student.email ? (
              <div className="stud1">
                <p><div className="sname">Contact No: </div>{student.contactNo}</p>
                <p><div className="sname">Email: </div>{student.email}</p>
                <p><div className="sname">Status: </div>{student.status}</p>
                <p><div className="sname">Skills: </div>{student.skills}</p>
                <p><div className="sname">CGPA: </div>{student.cgpa}</p>
              </div>
            ) : null}

            {/* View Button */}
            <button onClick={() => handleViewClick(student.email)} className="viewp">
              View
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default AllStudents;
