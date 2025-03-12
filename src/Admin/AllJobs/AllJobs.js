import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "./AllJobs.css"
const AllJobs = () => {
  
    const [jobs, setJobs] = useState([]);
    
  
    useEffect(() => {
      const fetchJobs = async () => {
        try {
          const response = await axios.get('http://localhost:8084/placement-system/api/jobs/Alljobs'); 
       
          setJobs(response.data);
        
        } catch (error) {
          console.error('Error fetching jobs:', error);
        }
      };
  
      fetchJobs();
    }, []);
    return (
      <div>
        <h1>Jobs List</h1>
  
  
        <ul className='actj-outer'>
          {jobs.map((job) => (
            <li className='actj-inner' key={job.jobId}>
              <h2 className='h2a'>Title :{job.title}</h2>
              <div className="actj1">
              <p className='actj-p'>Company Name: {job.companyName}</p>
              <p className='actj-p'>Location: {job.location}</p>
              <p className='actj-p'>Job Id: {job.jobId}</p>
              <p className='actj-p'>Description: {job.description}</p>
              {/* <div className="actj1"> */}
              <p className='actj-p'>Salary: {job.salary}</p>
              {/* <p className='actj-p1'>Last Date: {job.LastDate.substring(0,10)}</p>
             */}
              </div>
              
        
       
            </li>
          ))}
        </ul>

      </div>
    );
  
 
}

export default AllJobs
