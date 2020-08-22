import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <Link to={"/"}>
        <a class="navbar-brand">Saleforce Oranizer</a>
      </Link>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <Link to={"/organization"}>
            <a className="nav-link">
              Add <span class="sr-only">(current)</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
