import React, { useState } from "react";
import calculateDays from "../../helpers/calculateDays";

// Component imports
import ReminderForm from "./ReminderForm";

const AltGalleryMessage = ({ styles, eventDate }) => {
  const [openModal, setOpenModal] = useState(false);
  let daysToEvent;

  daysToEvent = calculateDays(eventDate);

  const days = daysToEvent <= 0 ? null : daysToEvent === 1 ? "day" : "days";

  return (
    <div className={styles.altmessage__container}>
      <div className={styles.altmessage__text}>
        This event{" "}
        <span className="text__underline">
          {daysToEvent > 0
            ? `is in ${daysToEvent}`
            : daysToEvent === 0
            ? "is today"
            : "has already taken place"}{" "}
          {days}
        </span>
      </div>
      <div>
        {daysToEvent > 0 && (
          <span
            className={styles.banner__link__style}
            onClick={() => setOpenModal(true)}
          >
            Set a reminder
          </span>
        )}
      </div>

      <ReminderForm
        styles={styles}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
};

export default AltGalleryMessage;
