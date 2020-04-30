import HeaderNavbar from "./HeaderNavbar";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    <HeaderNavbar />
    {props.children}
  </div>
);

export default Layout;
