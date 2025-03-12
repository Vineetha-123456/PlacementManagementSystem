import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import "./AppJobs.css"

const AppJobs = ({ rollNo }) => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  // Memoize the fetchJobs function using useCallback
  const fetchJobs = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8087/placement-system/api/jobs/${rollNo}`);
      setJobs(response.data);
    } catch (e) {
      setError('Error fetching jobs');
    }
  }, [rollNo]);  // Include rollNo as a dependency to fetch jobs based on the rollNo.

  useEffect(() => {
    if (rollNo) {
      fetchJobs();  // Call the fetchJobs function
    }
  }, [fetchJobs]);  // Add fetchJobs as a dependency

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Jobs for {rollNo}</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AppJobs;
