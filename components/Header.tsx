import Link from "next/link";
// import css from "./Header.scss";

const linkStyle = {
  marginRight: 15
};

const Header = () => {
  return (
    <ul className="navbar-nav ml-auto">
      <Link className="nav-item" href="/">
        <a className="nav-link" style={linkStyle}>
          Home
        </a>
      </Link>
      <Link className="nav-item" href="/about">
        <a className="nav-link" style={linkStyle}>
          About Us
        </a>
      </Link>
      <Link className="nav-item" href="/contact">
        <a className="nav-link" style={linkStyle}>
          Showcase
        </a>
      </Link>
      <Link className="nav-item" href="/contact">
        <a className="nav-link" style={linkStyle}>
          Blog
        </a>
      </Link>
      <Link className="nav-item" href="/calendar" passHref>
        <a className="nav-link" style={linkStyle}>
          Media
        </a>
      </Link>
      <Link className="nav-item" href="/contact">
        <a className="nav-link" style={linkStyle}>
          Contact
        </a>
      </Link>
    </ul>
  );
};

export default Header;
