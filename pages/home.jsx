import React from "react";
import Layout from "../components/MyLayout";
import Services from "../components/Services/Services";

import Hero from "../components/Home/Hero/Hero";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      
    </Layout>
  );
};

export default Home;
