import React from "react";
import Layout from "../components/MyLayout";
import Services from "../components/Services/Services";

import Hero from "../components/Home/Hero/Hero";
import Meetups from "../components/Meetups/Meetups";
import Charts from "../components/Home/Charts/Charts";
import Games from "../components/Home/Games/Games";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      
      <Meetups />
      <Games />
      <Charts />
    </Layout>
  );
};

export default Home;
