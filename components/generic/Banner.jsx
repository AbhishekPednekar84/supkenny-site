import React, { useState, Fragment } from "react";
import Link from "next/link";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Banner = ({ styles }) => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <Fragment>
      {showBanner && (
        <div className={styles.banner__container}>
          <div className={styles.banner__text__container}>
            <p>
              Here are the live streaming links for the{" "}
              <Link href="https://youtu.be/EdiEUnJvWU4" passHref={true}>
                <a className={styles.banner__text__style} target="_blank">
                  Wedding
                </a>
              </Link>{" "}
              & the{" "}
              <Link href="https://youtu.be/HplPwykix6g" passHref={true}>
                <a className={styles.banner__text__style} target="_blank">
                  Reception
                </a>
              </Link>
              .
            </p>
            <FontAwesomeIcon
              icon={faTimes}
              className={styles.banner__close__icon}
              onClick={() => setShowBanner(false)}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Banner;
