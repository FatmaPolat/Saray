import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";


export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <h1 className="Saray">
              SARAY
        </h1>

        <ul className="nav-links">

          <li>
            <NavLink to="/shop" className="nav-link">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/ShoppingCart" className="nav-link">
            <FaShoppingCart />
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="nav-link">
              Contact
            </NavLink>
          </li>

        </ul>

      </div>
    </div>
  );
};