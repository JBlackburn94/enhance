import Link from "next/link";
import "./footer.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div></div>
        <div></div>
      </div>
      <div className="footer-links">
        <hr />
        <div className="footer-lower">
          <div className="footer-info">
            <p>© 2025 Enhance Technical Consulting. All rights reserved.</p>
            <p>Website Design & Development by Jason Blackburn</p>
          </div>
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
      </div>
    </footer>
  );
}
