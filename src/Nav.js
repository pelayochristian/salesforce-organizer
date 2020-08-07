import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to={"/about"}>
        <button type="submit" class="btn btn-primary mr-3">
          About
        </button>
      </Link>
      <Link to={"/"}>
        <button type="submit" class="btn btn-primary mr-3">
          Home
        </button>
      </Link>
    </div>
  );
}

export default Nav;
