import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // For accessing the state passed via navigate

const JobDetails = () => {
  const { state } = useLocation(); // Access the state passed from ActiveJobs
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (state?.jobs) {
      setJobs(state.jobs); // Set the passed jobs in state
    }
  }, [state]);

  if (!jobs.length) {
    return <div>No job details to display.</div>;
  }

  return (
    <div>
      <h1>Job Details</h1>
      {jobs.map((job) => (
        <div key={job.jobId}>
          <h2>Title: {job.title}</h2>
          <p><strong>Company:</strong> {job.companyName}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
          <p><strong>Last Date:</strong> {job.lastDate}</p>
          {/* Add other job details here */}
        </div>
      ))}
    </div>
  );
};

export default JobDetails;
