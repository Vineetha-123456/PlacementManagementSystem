import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact1">
      <div className="contact-child" />
      
      <div className="icon-placement-container">
        <b className="nsec">
          <span className="nsec-txt">
            <span>Icon</span>
            <span className="e"></span>
          </span>
        </b>
        {<b className="placement">
          <span className="nsec-txt">
            <span>placement</span>
            <span className="span">.</span>
          </span>
        </b>}

        <div className="contact-item" />
        
        {/* Home Link - should be top-right inside the "Icon Placement" section */}
        <b className="home1">
          <a href="/">Home</a>
        </b>
      </div>

      <div className="contact-inner" />
      <div className="contact-us">Contact us</div>
      <div className="need-assistancewe-are">
        Need assistance? We are here to help you.
      </div>

      <div className="address-container">
        <span className="nsec-txt">
          <p className="address">Icon Placement Management System, Hitech City,</p>
          <p className="address">Telangana-500081, Hyderabad</p>
          <p className="address">INDIA</p>
        </span>
      </div>

      <div className="div">040 23013409</div>
      <div className="div1">040 24361286</div>

      <a className="iconpmsacin" href="mailto:icon@pms.ac.in" target="_blank" rel="noreferrer">
        icon@pms.ac.in
      </a>

      <div className="wwwnsecacin">www.iconpms.ac.in</div>
    </div>
  );
};

export default Contact;
