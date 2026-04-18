import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">GoldSkin</h2>

      <ul className="nav-links">
        <li className="active">Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>

      <button className="contact-btn">Contact Us</button>
    </nav>
  );
}