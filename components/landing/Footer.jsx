import React, { Fragment } from "react";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = ({ styles }) => {
  const year = new Date().getFullYear();

  return (
    <Fragment>
      <div className={styles.footer}>
        <p>
          Made with{" "}
          <FontAwesomeIcon icon={faHeart} className={styles.heart__icon} /> for
          Suparna & Kenny
        </p>
        <p className={styles.footer__secondary__text}>
          &copy; {year} Suparna & Kenny. All rights reserved.
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
