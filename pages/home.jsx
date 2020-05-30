import React from "react";
import Layout from "../components/MyLayout";
import Services from "../components/Services/services";
import LastMeetups from "../components/Meetups/lastMeetups";
import Hero from "../components/Home/Hero/hero";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <LastMeetups />
    </Layout>
  );
};

export default Home;
