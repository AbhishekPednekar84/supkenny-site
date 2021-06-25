import "../styles/globals.css";
import SiteState from "../context/SiteState";

// CSS import
import styles from "../styles/Home.module.css";

// Component imports
import Logo from "../components/generic/Logo";
import Footer from "../components/landing/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <SiteState>
      <Logo />
      <Component {...pageProps} />
      <Footer styles={styles} />
    </SiteState>
  );
}

export default MyApp;
