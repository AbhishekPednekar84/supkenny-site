import React from "react";
import Image from "next/image";

const Venue = ({ styles }) => {
  return (
    <div className={styles.venue__container}>
      <h2 className={styles.venue__header}>The Venue</h2>
      <div className={styles.venue__addresss__container}>
        <div className={styles.venue__addresss}>
          <p className={styles.venue__addresss1}>RECCAA Club</p>
          <p className={styles.venue__addresss2}>
            Recca Valley Rd, Thrikkakara, Kakkanad, Kerala 682030
          </p>
        </div>
      </div>

      <div className={styles.venue__cards_container}>
        <div
          className={` ${styles.venue__card__mehendi} ${styles.venue__card}`}
        >
          <h3 className={styles.venue__card__heading}>
            <span className={styles.venue__heading_style}>Mehendi</span>
          </h3>
          <div className={styles.venue__card__text__container}>
            <p
              className={`${styles.venue__card__text} ${styles.venue__card__text__spacer}`}
            >
              Sunday, 22nd August 2021
            </p>
            <p className={styles.venue__card__text}>5 PM IST onwards</p>
          </div>
        </div>

        <div
          className={` ${styles.venue__card__wedding} ${styles.venue__card}`}
        >
          <h3 className={styles.venue__card__heading}>
            The <span className={styles.venue__heading_style}>Wedding</span>{" "}
            Ceremony
          </h3>

          <div className={styles.venue__card__text__container}>
            <p
              className={`${styles.venue__card__text} ${styles.venue__card__text__spacer}`}
            >
              Monday,{" "}
              <span className={styles.venue__card__text__style}>
                23rd August 2021
              </span>
            </p>
            <p className={styles.venue__card__text}>11:45 AM to 12:15 PM IST</p>
          </div>
        </div>
        <div
          className={` ${styles.venue__card__reception} ${styles.venue__card}`}
        >
          <h3 className={styles.venue__card__heading}>
            <span className={styles.venue__heading_style}>Reception</span>
          </h3>
          <div className={styles.venue__card__text__container}>
            <p
              className={`${styles.venue__card__text} ${styles.venue__card__text__spacer}`}
            >
              Monday, 23rd August 2021
            </p>
            <p className={styles.venue__card__text}>5 PM IST onwards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
