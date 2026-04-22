import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const arr = ["p1", "p2", "p3", "p4"];

  return (
    <div className="nav">
      {/* <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link> */}

      {/* In NavLink ,we get extra features  
            we
      */}
      <NavLink
        to="/"
        className={(e) => {
          return [e.isActive && "redback", "nav-link"].join(" ");
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={(e) => {
          return [e.isActive && "redback", "nav-link"].join(" ");
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={(e) => {
          console.log(e);
          return [e.isActive && "redback", "nav-link"].join(" ");
        }}
      >
        Contact
      </NavLink>

      <ul className="contact-list">
        {arr.map((val, ind) => {
          return (
            <li key={ind}>
              <NavLink
                to={`/contact/${val}`}
                className={(e) => {
                  console.log(e);
                  return [e.isActive && "redback", "nav-link"].join(" ");
                }}
              >
                {val}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
