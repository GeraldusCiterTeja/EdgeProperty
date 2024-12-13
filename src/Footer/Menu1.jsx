import React from "react";
import { Link } from "react-router-dom";

function Menu1() {
  return (
    <ul className="menu1">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/development">Development</Link>
      </li>
      <li>
        <Link to="/contractor">Contractor</Link>
      </li>
      <li>
        <Link to="/partner">Partner</Link>
      </li>
      <li>
        <Link to="/contactUs">Contact Us</Link>
      </li>
    </ul>
  );
}

export default Menu1;
