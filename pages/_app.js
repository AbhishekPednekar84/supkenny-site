import React, { useEffect } from "react";
import SiteState from "../context/SiteState";
import smoothScroll from "smoothscroll-polyfill";

// CSS import
import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import galleryStyles from "../styles/Gallery.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Component imports
import Logo from "../components/generic/Logo";
import Footer from "../components/landing/Footer";
import ScrollToTop from "../components/venue/ScrollToTop";
import Banner from "../components/generic/Banner";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      smoothScroll.polyfill();
    }
  }, []);

  return (
    <SiteState>
      <Banner styles={galleryStyles} />
      <Logo />
      <Component {...pageProps} />
      <Footer styles={styles} />
      <ScrollToTop />
    </SiteState>
  );
}

export default MyApp;
