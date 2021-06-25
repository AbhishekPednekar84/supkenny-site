import React from "react";

// CSS import
import styles from "../styles/Home.module.css";

// Component import
import HomeHeadLayout from "../components/head/HomeHeadLayout";
import Header from "../components/landing/Header";
import OurStory from "../components/our-story/OurStory";
import Venue from "../components/venue/Venue";
import NoteToVisitors from "../components/note/NoteToVisitors";
import Footer from "../components/landing/Footer";

const index = () => {
  return (
    <HomeHeadLayout>
      <section id="header">
        <Header styles={styles} />
      </section>
      <section id="our-story">
        <OurStory styles={styles} />
      </section>
      <section id="venue">
        <Venue styles={styles} />
      </section>
      <section id="note">
        <NoteToVisitors styles={styles} />
      </section>
    </HomeHeadLayout>
  );
};

export default index;
