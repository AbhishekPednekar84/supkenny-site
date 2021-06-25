import React from "react";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddMessageButton = ({ styles, openModal, setOpenModal }) => {
  return (
    <div>
      <button
        className={styles.add__message__button}
        onClick={() => setOpenModal(true)}
      >
        <FontAwesomeIcon
          icon={faPlus}
          className={styles.add__message__button__text}
        />
      </button>
    </div>
  );
};

export default AddMessageButton;
