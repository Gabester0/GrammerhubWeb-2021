import React from "react";
import Layout from "../components/MyLayout";
import Services from "../components/Services/Services";
import LastMeetups from "../components/Meetups/LastMeetups";
import Hero from "../components/Home/Hero/Hero2";

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
