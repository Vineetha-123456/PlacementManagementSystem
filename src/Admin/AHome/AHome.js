import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import { ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './AHome.css';
import { useAdminContext } from "../../Context/AdminContext";

const AHome = () => {
  Chart.register(ArcElement);

  const { admin } = useAdminContext();
  const [studentsStats, setStudentsStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://localhost:8087/placement-system/api/students/stats');
        setStudentsStats(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching student data');
        setLoading(false);
      }
    };

    fetchStats();
  }, []); // Fetch stats only on initial load

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const totalStudents = studentsStats.total;
  const placedStudentsCount = studentsStats.placed;
  const unplacedStudentsCount = studentsStats.unplaced;

  // Pie chart data
  const chartData = {
    labels: ['Placed Students', 'Unplaced Students'],
    datasets: [
      {
        data: [placedStudentsCount, unplacedStudentsCount],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <div className='Ahome'>
      <div className="welcome">
        <div className="welcome-text">Welcome Back</div>
        <div className='wela'>
          <div className="wel-name">Admin</div>
          <div className="wel-email">{admin.adminEmail}</div>
        </div>
      </div>

      <div className='ahome-stats'>
        <div className='ahome-numbers'>
          <div className="stats">
            <h1>Student Statistics</h1>
            <p>Total Students: {totalStudents}</p>
            <p>Placed Students: {placedStudentsCount}</p>
            <p>Unplaced Students: {unplacedStudentsCount}</p>
          </div>
        </div>
        <Pie 
  className='Pie' 
  data={chartData} 
  options={{
    responsive: true,
    maintainAspectRatio: false, // This prevents the chart from stretching to the parent container
    plugins: {
      legend: {
        position: 'top',
      },
    },
    aspectRatio: 1, // Ensures the pie chart is a perfect circle
  }}
  width={150} // Set a smaller width for the pie chart
  height={150} // Set a smaller height for the pie chart
/>

      </div>
    </div>
  );
};

export default AHome;
