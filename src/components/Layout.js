import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";

const Layout = (props) => (
  <div>
    <Head>
      <title>Salesforce Laucher</title>
      <link rel="stylesheet" href="static/css/bootstrap.min.css" />
    </Head>
    <Navbar />
    <main>{props.children}</main>
  </div>
);

export default Layout;
