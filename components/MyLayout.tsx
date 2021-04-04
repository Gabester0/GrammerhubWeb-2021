// import Header from "../components/Header";
import Head from 'next/head'

const layoutStyle = {
  // margin: 20,
  // padding: 20,
  // border: "1px solid #DDD",
};

const Layout = (props) => (
  <div style={layoutStyle}>
    <Head>
      {process.env.NODE_ENV !== 'production' && (
        <link rel="stylesheet" type="text/css" href={'/_next/static/css/styles.chunk.css?v=' + Date.now()} />
      )}
    </Head>
    {/* <Header /> */}
      {props.children}
  </div>
);

export default Layout;
