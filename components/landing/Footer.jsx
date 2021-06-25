import React, { Fragment } from "react";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = ({ styles }) => {
  return (
    <Fragment>
      <div className={styles.footer}>
        Made with{" "}
        <FontAwesomeIcon icon={faHeart} className={styles.heart__icon} /> for
        Suparna & Kenny
      </div>
    </Fragment>
  );
};

export default Footer;
