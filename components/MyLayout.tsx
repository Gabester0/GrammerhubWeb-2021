// import Header from "../components/Header";
import HeaderNavbar from "../pages/headerNavbar";
import Footer from "../components/Shared/footer";

// Teporarily disable layoutStyle
// for rendering

// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: "1px solid #DDD"
// };
//
// style={layoutStyle}

const Layout = (props) => (
  <div>
    <HeaderNavbar />
    {/* <Header /> */}
    {props.children}
    <Footer />
  </div>
);

export default Layout;
