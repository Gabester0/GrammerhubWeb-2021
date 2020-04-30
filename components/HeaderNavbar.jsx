import LogoNavbar from "./navbar/LogoNavbar";
import ToggleButton from "./navbar/ToggleButton";
import CollapseNavbar from "./navbar/CollapseNavbar";

// import css from "./HeaderNavbar.scss";

const HeaderNavbar = () => (
  <header className="header-navbar sticky">
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <LogoNavbar />
        <ToggleButton />
        <CollapseNavbar />
      </div>
    </nav>
    <style jsx>{`
      .header-navbar {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        z-index: 9;
      }

      .navbar {
        background: #f0f0f0;
        padding: 15px 0;
        position: relative;
        z-index: 9;
      }

      .navbar:before {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: #171c62;
      }

      .navbar.navbar-expand-lg .nav-item {
        margin-right: 46px;
      }

      .navbar.navbar.navbar-expand-lg li a {
        color: #311569;
        font-size: 18px;
        font-weight: 400;
        text-transform: 400;
        text-transform: capitalize;
        padding: 30px 0 !important;
        display: inline-block;

        transition: all linear 0.3s;
        -webkit-transition: all linear 0.3s;
        -moz-transition: all linear 0.3s;
        -ms-transition: all linear 0.3s;
        -o-transition: all linear 0.3s;
      }

      .navbar.navbar-expand-lg li:hover > a {
        color: #ffe169;
      }

      .navbar-expand-lg .navbar-nav .dropdown-menu {
        background: #f0f0f0;
        left: 50%;
        transform: translate(-50%);
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
      }

      .navbar-expand-lg .navbar-nav .dropdown-menu a {
        display: block;
        padding: 10px 20px !important;

        transition: all linear 0.3s;
        -webkit-transition: all linear 0.3s;
        -moz-transition: all linear 0.3s;
        -ms-transition: all linear 0.3s;
        -o-transition: all linear 0.3s;
      }

      .navbar-expand-lg .navbar-nav .dropdown-menu a:hover {
        color: #ffe169;
      }

      .dropdown-item:hover {
        background-color: transparent;
      }
    `}</style>
  </header>
);

export default HeaderNavbar;
