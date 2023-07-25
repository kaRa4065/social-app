import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setSdata, sdata }) => {
  return (
    <nav className="Nav">
      <form onSubmit={(e) => e.preventDefault()} className="searchForm">
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          value={sdata}
          onChange={(e) => setSdata(e.target.value)}
          placeholder="Search posts"
        ></input>
      </form>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/About">About</Link>
        </li>

        <li>
          <Link to="/NewPost">Newpost</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
