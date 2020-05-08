// import HeaderNavbar from "./HeaderNavbar";
import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    {/* <HeaderNavbar /> */}
    <Header />
    {props.children}
  </div>
);

export default Layout;
