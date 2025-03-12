import "./Home.css";

const Home = () => {
  return (
    <div className="desktop-1">
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__menuItem">
            <a href="/">Home</a>
          </li>
          <li className="navbar__menuItem">
            <a href="/About">About</a>
          </li>
          <li className="navbar__menuItem">
            <a href="/Contact">Contact</a>
          </li>
        </ul>

        <div className="navbar__title-container">
          <h1 className="navbar__title"> ICON PLACEMENT MANAGEMENT SYSTEM</h1>
        </div>
      </nav>

      <div className="hero-section">
        <img src="images/hero_sec.png" alt="" />
      </div>

      <div className="tail-section">
        <div className="student">
          <img src="images/student.jfif" alt="" />
          <div className="t">Student</div>
          <div className="l1">
            <div className="p1">
              <a href="/Login">Login</a>
            </div>
            <div className="p1">
              <a href="/SignUp">SignUp</a>
            </div>
          </div>
        </div>

        <div className="admin">
          <img src="images/admin.jfif" alt="" />
          <div className="t">Admin</div>
          <div className="l1">
            <div className="p1">
              <a href="/ALogin">Login</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with social media icons */}
      <div className="footer">
        <div className="foot">Developed by ICON team</div>
        <div className="social-media">
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon"
          >
            <img
              src="images/facebook_icon.png"
              alt="Facebook"
              className="social-icon-img"
            />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon"
          >
            <img
              src="images/twitter_icon.png"
              alt="Twitter"
              className="social-icon-img"
            />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon"
          >
            <img
              src="images/instagram_icon.png"
              alt="Instagram"
              className="social-icon-img"
            />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon"
          >
            <img
              src="images/linkedin_icon.png"
              alt="LinkedIn"
              className="social-icon-img"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
