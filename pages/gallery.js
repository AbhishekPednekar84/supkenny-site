import React from "react";
import styles from "../styles/Gallery.module.css";

// Component import
import GalleryHeadLayout from "../components/head/GalleryHeadLayout";
import Tabs from "../components/gallery/Tabs";
import Banner from "../components/gallery/Banner";

const gallery = () => {
  return (
    <GalleryHeadLayout>
      <Banner styles={styles} />
      <div className={styles.gallery__heading__container}>
        <h1 className={styles.gallery__heading}>Photos</h1>
      </div>
      <Tabs styles={styles} />
    </GalleryHeadLayout>
  );
};

export default gallery;
