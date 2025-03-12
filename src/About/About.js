import "./About.css";

const About = () => 
  {
  return (
    <div className="about-us">
      <nav className="navbar">
      
        <div className="navbar_title-container">
          <h1 className="navbar__title">About Us</h1>
        </div>
         
        <div className="navbar__home-link">
          <b><a href="/" className="home-link">Home</a></b>
        </div>
      </nav>

     
      <div className="welcome-to-our-container">
        <p className="welcome-to-our"><br></br>
         We are a team of passionate and dedicated students who have come
          together to develop a cutting-edge software solution for managing
          placements at our college. Our project aims to streamline the entire
          placement process, from registration to job offers, by providing a
          user-friendly platform for both students and recruiters.
        </p>
      </div>
    </div>
  );
};

export default About;
