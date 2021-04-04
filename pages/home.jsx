import React from "react";
import Layout from "../components/MyLayout";
import Hero from "../components/Hero/Hero";
import Contact from '../components/Contact';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Contact />
    </Layout>
  );
};

export default Home;
