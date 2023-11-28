import './cssfiles/footer.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faWhatsapp,
  faGoogle,
  faLinkedinIn,
  faYoutube,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer()
{
  return(
    <div>
        <footer class="footer">
  <div class="footer-container">
    <div class="footer-section">
      <h3>Grigo Grocery</h3>
      <a href='/aboutus' style={{textDecoration:'none',color:'white'}} > <p >  About Us</p></a>
      <a href='/aboutus' style={{textDecoration:'none',color:'white'}} > <p >Contact Us</p></a>
    </div>
    <div class="footer-section">
      <h3>Services</h3>
      <ul>
        <li>Free Shipping</li>
        <li>Secure Payment</li>
        <li>Money Return</li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Follow Us</h3>
      <ul>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Subscribe</h3>
      <p>Stay updated with our latest news and offers.</p>
      <form>
        <input type="email" placeholder="Your Email"/>
        
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </div>
  <div className="container mt-5">
      <div className="text-center rounded-social-icons">
        {/* Facebook */}
        <button className="btn btn-primary rounded-circle m-2" type="button">
          <FontAwesomeIcon icon={faFacebookF} />
        </button>
        {/* Instagram */}
        <button className="btn btn-warning rounded-circle m-2" type="button">
          <FontAwesomeIcon icon={faInstagram} />
        </button>
        {/* Twitter */}
        <button className="btn btn-info rounded-circle m-2" type="button">
          <FontAwesomeIcon icon={faTwitter} />
        </button>
        {/* WhatsApp */}
        <button className="btn btn-success rounded-circle m-2" type="button">
          <FontAwesomeIcon icon={faWhatsapp} />
        </button>
        {/* Google */}
        <button className="btn btn-danger rounded-circle m-2" type="button">
          <FontAwesomeIcon icon={faGoogle} />
        </button>
        {/* YouTube */}
        <button className="btn btn-primary rounded-circle m-2" type="button">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </button>

        <button className="btn btn-danger rounded-circle m-2" type="button">
          <FontAwesomeIcon icon={faYoutube} />
        </button>
        {/* Telegram */}
        <button className="btn btn-primary rounded-circle m-2" type="button">
          <FontAwesomeIcon icon={faTelegram} />
        </button>
      </div>
    </div>
    <div class="footer-bottom">
    <p>&copy; 2023 Grigo Grocery. All Rights Reserved.</p>
  </div>

</footer>


    </div>
  )
};