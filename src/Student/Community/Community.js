import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Community.css"
const Community = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchAnnouncements = async () => {
          try {
            const response = await axios.get('http://localhost:8088/placement-system/api/announcements/announcements'); 
            setAnnouncements(response.data);
            setLoading(false);
          } catch (error) {
            setError('Error fetching announcements');
            setLoading(false);
          }
        };
    
        fetchAnnouncements();
      }, []);

      
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div className="announce-main gg">

<h2>All Announcements</h2>

{announcements.length === 0 ? (
  <p>No announcements found.</p>
) : (
  <ul className="ul">
    {announcements.map((announcement) => (
      <li className="li" key={announcement.id}>
        <h3>{announcement.title}</h3>

        <p>{announcement.description}</p>
       
      </li>
    ))}
  </ul>
  
)}
</div>
    </div>
  )
}

export default Community
