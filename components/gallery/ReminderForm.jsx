import React, { useState, useContext } from "react";
import SiteContext from "../../context/siteContext";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Modal from "react-modal";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faTimes,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Please enter your email")
    .email("Please enter a valid email")
    .trim(),
});

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
  tap: { y: "2px" },
};

const ReminderForm = ({ styles, openModal, setOpenModal }) => {
  const [showForm, setShowForm] = useState(true);
  const siteContext = useContext(SiteContext);

  const { eventSubscription, subscriptionMessage } = siteContext;

  const handleClose = () => {
    setShowForm(true);
    setOpenModal(false);
  };

  return (
    <Modal
      style={{
        overlay: {
          zIndex: 99999,
          opacity: 1,
          backgroundColor: "rgba(255, 255, 255, 0.97)",
        },
        width: "100px",
      }}
      isOpen={openModal}
      shouldFocusAfterRender={true}
      onRequestClose={handleClose}
      className="modal__style"
    >
      <AnimatePresence exitBeforeEnter>
        {showForm ? (
          <motion.div
            key="form"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="message__form__container"
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="close__icon"
              onClick={handleClose}
            />
            <span className="esc__icon">ESC</span>
            <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                eventSubscription(values.email);
                setTimeout(() => {
                  setSubmitting(false);
                  setShowForm(false);
                }, 3000);
              }}
            >
              {(props) => (
                <Form id="message__form" autoComplete="off">
                  <div>
                    <h2 className="message__form__heading">Set Reminder</h2>
                    <div className="no__spam">
                      <FontAwesomeIcon icon={faHeart} />
                      &nbsp; Your email will only be used to send a reminder.{" "}
                      <br />
                      <span className="no__spam__highlight">NO SPAM</span>, we
                      promise!
                    </div>
                    <div>
                      <Field
                        name="email"
                        placeholder="Email*"
                        maxLength={50}
                        className={`message__form__input ${
                          props.touched.email && props.errors.email
                            ? "message__form__input__error"
                            : "message__form__input__normal"
                        }`}
                      />

                      {props.touched.email && props.errors.email ? (
                        <div className="input__error">
                          <FontAwesomeIcon icon={faExclamationTriangle} />
                          &nbsp;{props.errors.email}
                        </div>
                      ) : null}
                    </div>

                    <div className="message__button__container">
                      <motion.button
                        type="submit"
                        disabled={props.isSubmitting}
                        variants={variants}
                        whileTap="tap"
                        className="message__button"
                      >
                        {props.isSubmitting ? (
                          <Image
                            src="/loader.svg"
                            alt="Loading..."
                            height={25}
                            width={25}
                          />
                        ) : (
                          "Remind Me"
                        )}
                      </motion.button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </motion.div>
        ) : (
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            className="message__form__container"
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="close__icon"
              onClick={handleClose}
            />
            <span className="esc__icon">ESC</span>
            <div className={styles.subscription__message}>
              {subscriptionMessage.message &&
              subscriptionMessage.message.includes("Thanks") ? (
                <div className={styles.subscription__message__container}>
                  <h2 className={styles.subscription__message__heading}>
                    Woohoo!
                  </h2>
                  <Image
                    src="/images/gallery/sadhya.png"
                    alt="Subscription"
                    height={256}
                    width={256}
                  />
                  <p className={styles.subscription__message__text}>
                    {subscriptionMessage.message}
                  </p>
                  <p className={styles.subscription__message__text}>
                    Hang tight!
                  </p>
                </div>
              ) : (
                <div className={styles.subscription__message__container}>
                  <h2 className={styles.subscription__message__heading}>
                    Hey there!
                  </h2>
                  <Image
                    src="/images/gallery/thumbs.png"
                    alt="Subscription"
                    height={200}
                    width={200}
                  />
                  <p className={styles.subscription__message__text}>
                    {subscriptionMessage.message}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
};

export default ReminderForm;
