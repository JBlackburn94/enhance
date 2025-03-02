import Link from "next/link";
import "./footer.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content-container">
        <div className="footer-content">
          <h3>Contact</h3>
          <p>Telephone: 07908 941301</p>
          <p>Email: hollie@enhancetechconsulting.co.uk</p>
          <h3>Social Media</h3>
          <div className="social-icons">
            <Link href={"#"}>
              <FaFacebook size={48} />
            </Link>
            <Link href={"#"}>
              <FaInstagram size={48} />
            </Link>
            <Link href={"#"}>
              <FaLinkedin size={48} />
            </Link>
          </div>
        </div>
        <div className="footer-content footer-right">
          <p>Enhance Technical Consulting Ltd</p>
          <p>Company Number: 16110113</p>
          <p className="address">
            4 Gordon Drive <br />
            Leeds <br />
            LS6 4HJ
          </p>
        </div>
      </div>
      <div className="footer-links">
        <hr />
        <div className="footer-lower">
          <div className="footer-info">
            <p>© 2025 Enhance Technical Consulting. All rights reserved.</p>
            <p>Website Design & Development by Jason Blackburn</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
