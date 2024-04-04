import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <>
      <header className="header header-custom header-fixed header-one">
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <a id="mobile_btn" href="">
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </a>
              <a href="index.html" className="navbar-brand logo">
                <img
                  src={logo}
                  className="img-fluid"
                  alt="Logo"
                  style={{ width: "100px" }}
                />
              </a>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <a href="index.html" className="menu-logo">
                  <img
                    src={logo}
                    className="img-fluid"
                    alt="Logo"
                    style={{ width: "100px" }}
                  />
                </a>
                <a id="menu_close" className="menu-close" href="">
                  <i className="fas fa-times" />
                </a>
              </div>
              <ul className="main-nav">
                <li className="has-submenu megamenu active">
                  <Link to="/">Home</Link>
                </li>
                <li className="searchbar">
                  <a href="">
                    <i className="feather-search" />
                  </a>
                  <div className="togglesearch">
                    <form action="search.html">
                      <div className="input-group">
                        <input type="text" className="form-control" />
                        <button className="btn">Search</button>
                      </div>
                    </form>
                  </div>
                </li>

                {location.pathname == "/dashboard" ? (
                  " "
                ) : (
                  <>
                    <li className="register-btn">
                      <Link to="/register" className="btn reg-btn">
                        <i className="feather-user" />
                        Register
                      </Link>
                    </li>

                    <li className="register-btn">
                      <Link to="/login" className="btn btn-primary log-btn">
                        <i className="feather-lock" />
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
