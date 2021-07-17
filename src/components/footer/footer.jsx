import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./footer.scss";

function Footer() {
  return (
    <footer>
      <div className="column">
        <a className="footer_title">ProX</a>
        <a>
          ProX lets customers match their style and class with easy online shopping using luxury, comfort, and authentic
          products.
        </a>
        <a href="#" title="Facebook">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a href="#" title="Instagram">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a href="#" title="Twitter">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
      </div>
      <div className="column">
        <a className="footer_title">OTHER LINKS</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Ticket</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="column">
        <a className="footer_title">SHORT CUT</a>
        <a href="">Our Services</a>
        <a href="">Our Blog</a>
        <a href="">Our Projects</a>
        <a href="">About Us</a>
      </div>
      <div className="column">
        <a className="footer_title">LATEST NEWS</a>
        <a href="" title="Lorem ipsum dolor sit amet">
          <img alt="img" src="https://source.unsplash.com/50x50/?green,trees" />
        </a>
        <a href="" title="Lorem ipsum dolor sit amet">
          <img alt="img" src="https://source.unsplash.com/50x50/?green,tree" />
        </a>
        <a href="" title="Lorem ipsum dolor sit amet">
          <img alt="img" src="https://source.unsplash.com/50x50/?green,plant" />
        </a>
        <a href="" title="Lorem ipsum dolor sit amet">
          <img alt="img" src="https://source.unsplash.com/50x50/?green,forest" />
        </a>
      </div>
      <div className="column">
        <a className="footer_title">GET IN TOUCH</a>
        <a title="Address">
          <i className="fa fa-map-marker"></i> 007, street, province/state, country - zipcode
        </a>
        <a href="emailto:" title="Email">
          <i className="fa fa-envelope"></i> email@serviceprovider.domain
        </a>
        <a href="tel:" title="Contact">
          <i className="fa fa-phone"></i> +(x)-xxxx-xxxxx
        </a>
      </div>

      <div className="sub-footer">© CopyRights 2021 ProX || All rights reserved</div>
    </footer>
  );
}

export default Footer;
