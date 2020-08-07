import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <a class="navbar-brand" href="#">
        Navbar
      </a>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <div class="navbar-nav ml-auto">
          <Link to={"/organization"}>
            <button type="button" class="btn btn-primary">
              Primary
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
