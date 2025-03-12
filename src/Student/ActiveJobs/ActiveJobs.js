import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // useNavigate hook for navigation
import './ActiveJobs.css';

const ActiveJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSalary, setSelectedSalary] = useState('');

  const navigate = useNavigate();  // useNavigate hook for navigation

  // Fetch jobs data from the backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:8084/placement-system/api/jobs/Alljobs');
        const currentDate = new Date();

        // Filter out the jobs that are past the last date
        const activeJobs = response.data.filter(job => new Date(job.lastDate) >= currentDate);

        // Set the job state
        setJobs(activeJobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs(); // Fetch the job data on component mount
  }, []);

  // Handle location filter input
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  // Handle salary filter input
  const handleSalaryChange = (event) => {
    setSelectedSalary(event.target.value);
  };

  // Filter jobs based on location and salary
  const filterJobs = () => {
    let filtered = [...jobs]; // Start with all jobs

    // Filter by location (case-insensitive)
    if (selectedLocation) {
      filtered = filtered.filter((job) =>
        job.location.toLowerCase().includes(selectedLocation.toLowerCase()) // Case-insensitive match
      );
    }

    // Filter by salary if selected
    if (selectedSalary) {
      const salaryThreshold = Number(selectedSalary); // Convert selected salary to number

      filtered = filtered.filter((job) => job.salary >= salaryThreshold); // Filter based on salary
    }

    return filtered;
  };

  // Handle the submit button to filter jobs
  const handleSubmit = () => {
    const filteredJobs = filterJobs();

    // If filtered jobs are found, navigate to the job details page with the filtered jobs
    if (filteredJobs.length > 0) {
      navigate('/Common/JobDetails', { state: { jobs: filteredJobs } });
    } else {
      alert('No jobs found with the selected filters.');
    }
  };

  return (
    <div className='actj-main'>
      <h1 className='h1a'>Jobs List</h1>
      <div className="jFilters">
        <div>
          <label htmlFor="locationFilter">Filter by Location:</label>
          <input
            type="text"
            id="locationFilter"
            value={selectedLocation}
            onChange={handleLocationChange}
            placeholder="Enter Location"
          />
        </div>

        <div>
          <label htmlFor="salaryFilter">Filter by Salary:</label>
          <select id="salaryFilter" value={selectedSalary} onChange={handleSalaryChange}>
            <option value="">All Salaries</option>
            <option value="4">4 LPA</option>
            <option value="5">5 LPA</option>
            <option value="7">7 LPA</option>
            <option value="9">9 LPA</option>
          </select>
        </div>
      </div>

      <button
        className="submitButton"
        onClick={handleSubmit}
        disabled={!selectedLocation && !selectedSalary}  // Disable button if no filter is selected
      >
        Submit
      </button>

      <ul className='actj-outer'>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <li className='actj-inner' key={job.jobId}>
              <h2 className='h2a'>Title: {job.title}</h2>
              <div className="actj1">
                <p className='actj-p'>Company Name: {job.companyName}</p>
                <p className='actj-p'>Location: {job.location}</p>
                <p className='actj-p'>Job Id: {job.jobId}</p>
              </div>
              <div className="actj1">
                <p className='actj-p'>Salary: {job.salary}  </p>
                <p className='actj-p'>Last Date: {job.lastDate}</p>
              </div>
            </li>
          ))
        ) : (
          <p>No jobs found with the selected filters.</p>
        )}
      </ul>
    </div>
  );
};

export default ActiveJobs;
