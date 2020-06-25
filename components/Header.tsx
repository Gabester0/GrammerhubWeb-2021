import Link from "next/link";
import Router from "next/router";
// import css from "./Header.scss";
import css from "../components/Navbar/Navbar.scss";

const linkStyle = {
  marginRight: 15,
};

const Header = () => {
  Router.events.on("routeChangeStart", () => {
    console.log("CHANGE STARTING");
  });
  Router.events.on("routeChangeComplete", () => {
    console.log("CHANGE COMPLETED");
  });
  return (
    <ul className="navbar-nav ml-auto">
      <li className={css.navItem}>
        <Link href="/home">
          <a className="nav-link" style={linkStyle}>
            Home
          </a>
        </Link>
      </li>
      {/* <Link  href="/calendar">
        <a className="nav-link" style={linkStyle}>
          Calendar
        </a>
      </Link> */}
      <li className={css.navItem}>
        <Link href="/about">
          <a className="nav-link" style={linkStyle}>
            About Us
          </a>
        </Link>
      </li>
      <li className={css.navItem}>
        <Link href="/media">
          <a className="nav-link" style={linkStyle}>
            Last Meetups
          </a>
        </Link>
      </li>
      <li className={css.navItem}>
        <Link href="/blog">
          <a className="nav-link" style={linkStyle}>
            Blog
          </a>
        </Link>
      </li>
      <li className={css.navItem}>
        <Link href="/calendar">
          <a className="nav-link" style={linkStyle}>
            Calendar
          </a>
        </Link>
      </li>
      <li className={css.navItem}>
        <Link href="/contact">
          <a className="nav-link" style={linkStyle}>
            Contact
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Header;
