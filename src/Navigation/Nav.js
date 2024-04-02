import { NavLink } from "react-router-dom";
import { PiShoppingCartLight } from "react-icons/pi";
import { MdSunny } from "react-icons/md";

function Nav({ size }) {
  return (
    <nav className="main-nav">
      <div className="profile-container">
        <nav className="profile-nav">
          <ul>
            <NavLink className="account-nav" to="/Login">
              Sign In/Guest
            </NavLink>
            <NavLink className="account-nav" to="/Register">
              Create Account
            </NavLink>
          </ul>
        </nav>
      </div>

      <div className="nav-container">
        <nav className="pages-container">
          <NavLink className="home-page" to="/Home">
            C
          </NavLink>
          <NavLink className="nav-pages" to="/Home">
            Home
          </NavLink>
          <NavLink className="nav-pages" to="/About">
            About
          </NavLink>
          <NavLink className="nav-pages" to="/">
            Products
          </NavLink>
          <NavLink className="nav-pages" to="/Cart">
            Cart
          </NavLink>

          <div className="icons-container">
            <MdSunny className="theme-icon" size={24} />
            <NavLink to="/Cart">
              <PiShoppingCartLight className="cart-icon" size={28} />
              <span className="counter">{size}</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </nav>
  );
}

export default Nav;
