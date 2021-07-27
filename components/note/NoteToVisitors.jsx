import React from "react";
import Link from "next/link";

const NoteToVisitors = ({ styles }) => {
  return (
    <div className={styles.note__container}>
      <div className={styles.note__text}>
        Dear all, we understand that most of you will be unable to grace our
        special day in person due to the current restriction on the number of
        allowed guests. We will have a live stream for the{" "}
        <Link href="https://youtu.be/EdiEUnJvWU4" passHref={true}>
          <a className="unstyled__link" target="_blank">
            <span className="text__decorate__secondary styled__link">
              Wedding
            </span>
          </a>
        </Link>{" "}
        & the{" "}
        <Link href="https://youtu.be/HplPwykix6g" passHref={true}>
          <a className="unstyled__link" target="_blank">
            <span className="text__decorate__secondary styled__link">
              Reception
            </span>
          </a>
        </Link>{" "}
        and a{" "}
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
        . We promise to read and cherish every single one!
      </div>
    </div>
  );
};

export default NoteToVisitors;
