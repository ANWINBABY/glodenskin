import React from "react";
import "../styles/footer.css";
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function FooterSection() {
  return (
    <>
      {/* ================= NEWSLETTER ================= */}
      <section className="newsletter">
          <h2 className="newsletter-title">Subscribe Newsletter</h2>        
          <p>
          Li Europan lingues es membres del sam familie. Lor separat es un myth.
          Por scientie, musica etc
        </p>

        <div className="newsletter-input">
          <input type="email" placeholder="Enter email address" />
          <button>Subscribe</button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-container">

          {/* Column 1 */}
          <div className="footer-col">
            <h3>Sitemap</h3>
            <ul>
              <li>About us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h3>Product</h3>
            <ul>
              <li>Powder</li>
              <li>Skin Gel</li>
              <li>Cosmetics</li>
              <li>Toning</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h3>Help</h3>
            <ul>
              <li>Guide</li>
              <li>Tips & Trick</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h3>Subscribe</h3>

            <div className="footer-input">
              <input type="email" placeholder="Enter email address" />
              <button>Send</button>
            </div>

            <div className="socials">
              <span><FaTwitter /></span>
              <span><FaInstagram /></span>
              <span><FaFacebookF /></span>
              <span><FaYoutube /></span>
            </div>
          </div>

        </div>

        <div className="copyright">
          © 2023 All rights reserved. This is Your Company
        </div>
      </footer>
    </>
  );
}