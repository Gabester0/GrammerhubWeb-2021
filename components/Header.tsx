import Link from "next/link";
import Router from 'next/router'
// import css from "./Header.scss";

const linkStyle = {
  marginRight: 15
};

const Header = () => {
  Router.events.on('routeChangeStart', () => {
    console.log('CHANGE STARTING')
  })
  Router.events.on('routeChangeComplete', () => {
    console.log('CHANGE COMPLETED')
  })
  return (
    <ul className="navbar-nav ml-auto">
      <li>
        <Link href="/">
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
      <li>
        <Link href="/about">
          <a className="nav-link" style={linkStyle}>
            About Us
          </a>
        </Link>
      </li>
      <li>
        <Link href="/showcase">
          <a className="nav-link" style={linkStyle}>
            Showcase
          </a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a className="nav-link" style={linkStyle}>
            Blog
          </a>
        </Link>
      </li>
      <li>
        <Link href="/calendar">
          <a href="/calendar" className="nav-link" style={linkStyle}>
            Media
          </a>
        </Link>
      </li>
      <li>
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
