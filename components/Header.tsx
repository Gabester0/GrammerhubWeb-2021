import Link from 'next/link'
import css from './Header.scss'
 
const linkStyle = {
  marginRight: 15
}

const Header = () => {
  return (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home Page</a>
        </Link>
        <Link href="/about">
          <a className={css.blue} style={linkStyle}>About</a>
        </Link>
    </div>
)}

export default Header