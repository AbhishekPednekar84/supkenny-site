import React from "react";
import Link from "next/link";

const NoteToVisitors = ({ styles }) => {
  return (
    <div className={styles.note__container}>
      <div className={styles.note__text}>
        Dear all, we understand that most of you will be unable to grace our
        special day in person due to the current restriction on the number of
        allowed guests. However, we will have a{" "}
        <span className="text__decorate__secondary">live stream</span> and a{" "}
        <Link href="/gallery">
          <a className="unstyled__link">
            <span className="text__decorate__secondary styled__link">
              gallery
            </span>
          </a>
        </Link>{" "}
        for those of you who would like to make our day extra special from the
        safe comfort of your home :).
        <br />
        <br />
        You can also{" "}
        <Link href="/messages">
          <a className="unstyled__link">
            <span className="text__decorate__secondary styled__link">
              leave us a message
            </span>
          </a>
        </Link>
        . We promise to read them all!
      </div>
    </div>
  );
};

export default NoteToVisitors;
