import React, { Fragment } from "react";
import CountUp from "react-countup";
import Link from "next/link";
import calculateDays from "../../helpers/calculateDays";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

const Header = ({ styles }) => {
  let daysToWedding;
  const weddingDate = process.env.NEXT_PUBLIC_WEDDING_DATE;

  daysToWedding = calculateDays(weddingDate);

  return (
    <Fragment>
      <div className={styles.landing}>
        <div className={styles.landing__container}>
          <div className={styles.landing__image}>
            <img
              src="https://res.cloudinary.com/dqgiewxxc/image/upload/v1624729172/gallery/site_images/landing/cover-min_yyix4z.png"
              alt="Suparna & Kenny"
              height="650px"
              width="420px"
            />
          </div>

          <div>
            <div className={styles.landing__nav}>
              <Link href="/messages">
                <a className={`${styles.landing__navlink} styled__link`}>
                  Message{" "}
                  <span className={styles.landing__nav__secondary__decoration}>
                    Us
                  </span>
                </a>
              </Link>

              <Link href="/gallery">
                <a className={`${styles.landing__navlink} styled__link`}>
                  Gallery
                </a>
              </Link>
            </div>
            <div className={styles.landing__text}>
              <h1>Suparna & Kenny</h1>
              <p className={styles.landing__text__info}>
                Are {daysToWedding >= 0 ? "getting" : null}{" "}
                <span
                  className={
                    daysToWedding < 0 ? styles.landing__text__style : null
                  }
                >
                  married
                </span>
              </p>
              {daysToWedding > 0 && (
                <p className={styles.landing__text__info}>in</p>
              )}
              <p className={styles.landing__text__days}>
                {daysToWedding > 0 && (
                  <span className={styles.landing__text__days__info}>
                    <CountUp end={daysToWedding} duration={4} />
                  </span>
                )}
                &nbsp;
                <span className={styles.landing__text__days__unit}>
                  {daysToWedding < 0
                    ? null
                    : daysToWedding === 0
                    ? "today"
                    : daysToWedding === 1
                    ? "day"
                    : "days"}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.landing__navigation__icon__container}>
          <Link href="/#our-story   ">
            <a>
              <FontAwesomeIcon
                icon={faChevronCircleDown}
                className={styles.landing__navigation__icon}
              />
            </a>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
