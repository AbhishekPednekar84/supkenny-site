import React, { useState, Fragment } from "react";
import Modal from "react-modal";
import Link from "next/link";

//Component imports
import ReminderForm from "./ReminderForm";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

Modal.setAppElement("#__next");

const Banner = ({ styles }) => {
  const [showBanner, setShowBanner] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  return (
    <Fragment>
      {showBanner && (
        <div className={styles.banner__container}>
          <div className={styles.banner__text__container}>
            {/* <p>
              Check back here for the link to the{" "}
              <span className={styles.banner__text__style}>live stream</span>.
            </p> */}
            <p>
              Here are the live streaming links for the{" "}
              <Link href="https://youtu.be/EdiEUnJvWU4" passHref={true}>
                <a className={styles.banner__text__style} target="_blank">
                  Wedding
                </a>
              </Link>{" "}
              &{" "}
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

      <ReminderForm
        styles={styles}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </Fragment>
  );
};

export default Banner;
