import React from "react";

const EventReminder = ({ styles, event }) => {
  return (
    <div className={styles.event__reminder__text}>
      Date of event:{" "}
      <span className={styles.event__date__style}>
        {event === "haldi" ? "August 22, 2021" : "August 23, 2021"}
      </span>
    </div>
  );
};

export default EventReminder;
