import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Before toggle:", isOpen);
    setIsOpen(!isOpen);
    console.log("After toggle:", !isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar-container")) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="header">
      <div className="navbar-container">
        <img src="images/logo.svg" alt="logo"></img>
        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li onClick={closeMenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/development">Development</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/contractor">Contractor</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/partner">Partner</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/contactUs">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;