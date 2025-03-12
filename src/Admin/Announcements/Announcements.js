import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Announcements.css";

function Announcements() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [lastDate, setLastDate] = useState('');
  const [address, setAddress] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newAnnouncement = {
      title,
      description,
      lastDate,
      address,
    };

    try {
      const response = await axios.post('http://localhost:8088/placement-system/api/announcements', newAnnouncement);

      const addedAnnouncement = response.data;
      setAnnouncements((prevAnnouncements) => [...prevAnnouncements, addedAnnouncement]);

      // Reset form fields after submission
      setTitle('');
      setDescription('');
      setLastDate('');
      setAddress('');
    } catch (error) {
      setError('Error posting announcement');
      console.error('Error posting announcement:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="ann-main">

      <h1 className=" ann">Make a new Announcement</h1>
      <div className="aff">
        {/* <img src="/public/images/announcement.png" alt="" className="aff1" /> */}
        <form className="aform-main" onSubmit={handleSubmit}>
          <div>
            
            <label className="ek" htmlFor="title">Title:</label>
            <input
              className="int1"
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="ek1">
            <label className="ek" htmlFor="description">Description:</label>
            <textarea
              className="int2"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="ek1">
            <label className="ek" htmlFor="lastDate">Last Date to Apply:</label>
            <input
              className="int1"
              type="date"
              id="lastDate"
              value={lastDate}
              onChange={(e) => setLastDate(e.target.value)}
            />
          </div>
          <div className="ek1">
            <label className="ek" htmlFor="address">Address:</label>
            <input
              className="int1"
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button className="btn-ann" type="submit">Post Announcement</button>
        </form>
      </div>

      <div className="announce-main">
        <h2>All Announcements</h2>
        {announcements.length === 0 ? (
          <p>No announcements found.</p>
        ) : (
          <ul className="ul">
            {announcements.map((announcement) => (
              <li className="li" key={announcement.id}>
                <h3>{announcement.title}</h3>
                <p><strong>Description: </strong>{announcement.description}</p>
                <p><strong>Last Date to Apply: </strong>{announcement.lastDate}</p>
                <p><strong>Address: </strong>{announcement.address}</p>
               
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Announcements;
