// components/Footer.tsx
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import "@/app/styles/footer.css"; // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Shape<span>Shift.</span></h2>
          </div>
          <div className="footer-social">
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 ShapeShift, created by hashim khan</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
