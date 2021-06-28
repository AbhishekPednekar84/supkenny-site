import React, { useEffect } from "react";
import SiteState from "../context/SiteState";
import smoothScroll from "smoothscroll-polyfill";

// CSS import
import "../styles/globals.css";
import styles from "../styles/Home.module.css";

// Component imports
import Logo from "../components/generic/Logo";
import Footer from "../components/landing/Footer";
import ScrollToTop from "../components/venue/ScrollToTop";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      smoothScroll.polyfill();
    }
  }, []);

  return (
    <SiteState>
      <Logo />
      <Component {...pageProps} />
      <Footer styles={styles} />
      <ScrollToTop />
    </SiteState>
  );
}

export default MyApp;
