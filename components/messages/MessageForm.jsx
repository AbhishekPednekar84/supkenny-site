import React, { useContext, createRef } from "react";
import SiteContext from "../../context/siteContext";
import Image from "next/image";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faTimes,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const validationSchema = Yup.object({
  name: Yup.string().required("Please enter your name").trim(),
  email: Yup.string()
    .required("Please enter your email")
    .email("Please enter a valid email")
    .trim(),
  message: Yup.string().required("Please enter your message").trim(),
});

const variants = {
  tap: { y: "2px" },
};

const MessageForm = ({ styles, setOpenModal }) => {
  const siteContext = useContext(SiteContext);

  const {
    createNewMessage,
    getAllMessages,
    sendEmailFromCouple,
    sendEmailToCouple,
  } = siteContext;

  const recaptchaRef = createRef();

  const year = new Date().getFullYear();

  return (
    <div className="message__form__container">
      <FontAwesomeIcon
        icon={faTimes}
        className="close__icon"
        onClick={() => setOpenModal(false)}
      />
      <span className="esc__icon">ESC</span>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          recaptchaRef.current.execute();
          createNewMessage(values.name, values.email, values.message);
          sendEmailFromCouple(values.name, values.email, year);
          sendEmailToCouple(values.name, values.message, year);
          setTimeout(() => {
            setSubmitting(false);
            getAllMessages();
            setOpenModal(false);
          }, 3000);
        }}
      >
        {(props) => (
          <Form id="message__form" autoComplete="off">
            <div>
              <h2 className="message__form__heading">Post Your Message</h2>
              <div className="no__spam">
                <FontAwesomeIcon icon={faHeart} />
                &nbsp; We ask for your email to send a thank you note. <br />
                <span className="no__spam__highlight">NO SPAM</span>, we
                promise!
              </div>
              <div>
                <Field
                  name="name"
                  placeholder="Name*"
                  maxLength={50}
                  className={`message__form__input ${
                    props.touched.name && props.errors.name
                      ? "message__form__input__error"
                      : "message__form__input__normal"
                  }`}
                />

                {props.touched.name && props.errors.name ? (
                  <div className="input__error">
                    <FontAwesomeIcon icon={faExclamationTriangle} />
                    &nbsp;
                    {props.errors.name}
                  </div>
                ) : null}
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

              <div>
                <Field
                  name="message"
                  placeholder="Message*"
                  as="textarea"
                  type="text"
                  maxLength={1000}
                  className={`message__form__textarea ${
                    props.touched.message && props.errors.message
                      ? "message__form__textarea__error"
                      : "message__form__textarea__normal"
                  }`}
                  rows={5}
                />

                {props.touched.message && props.errors.message ? (
                  <div className="input__error">
                    <FontAwesomeIcon icon={faExclamationTriangle} />
                    &nbsp;{props.errors.message}
                  </div>
                ) : null}
              </div>

              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              />

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
                      src="/gallery/site_images/loader_rmmrqd.svg"
                      alt="Loading..."
                      height={25}
                      width={25}
                    />
                  ) : (
                    "Post Your Message"
                  )}
                </motion.button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MessageForm;
