import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return <div>

    <div className="nav">
      <NavLink to="/home">
        Home
      </NavLink>
      <NavLink to="/about">
        About
      </NavLink>
      <NavLink to="/contact">
        Contact
      </NavLink>
    </div>
  </div>;
};

export default Navbar;
