import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="logo-circle"></div>
        <span>Rolling Ring</span>
      </div>
      <ul className="navbar-links">
        <li>Designs</li>
        <li>Features</li>
        <li>How it Works</li>
      </ul>
      <button className="buy-btn">
        Buy Now
      </button>
    </nav>
  );
}

export default Navbar;