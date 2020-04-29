import Link from "next/link";
// import css from "./Header.scss";

const linkStyle = {
  marginRight: 15
};

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home Page</a>
      </Link>
      <Link href="/about">
        <a className="test" style={linkStyle}>
          About
        </a>
      </Link>
      <Link href="/navbar">
        <a style={linkStyle}>Navbar</a>
      </Link>
    </div>
  );
};

export default Header;
