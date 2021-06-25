import React, { useState, Fragment } from "react";
import Modal from "react-modal";

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
            <p>
              Check back here for the link to the{" "}
              <span className={styles.banner__text__style}>live stream</span>.
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
