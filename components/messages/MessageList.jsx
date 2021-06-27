import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import SiteContext from "../../context/siteContext";
import Modal from "react-modal";
import Masonry from "react-masonry-css";

//Component imports
import AddMessageButton from "./AddMessageButton";
import MessageForm from "./MessageForm";

Modal.setAppElement("#__next");

const breakpoints = {
  default: 4,
  1100: 3,
  900: 2,
  500: 1,
};

const MessageList = ({ styles }) => {
  const [openModal, setOpenModal] = useState(false);
  const siteContext = useContext(SiteContext);
  const { getAllMessages, loading, setLoading, messages, messageCreated } =
    siteContext;

  useEffect(() => {
    setLoading();
    getAllMessages();
  }, []);

  // if (loading) {
  //   return (
  //     <div className="loader__container">
  //       <Image src="/loader.svg" alt="Loading..." height={100} width={100} />
  //     </div>
  //   );
  // }

  return (
    <div>
      <AddMessageButton
        styles={styles}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

      {messages && messages.length === 0 && (
        <div className={styles.no__messages__container}>
          <div className={styles.no__messages__text__container}>
            <p className={styles.no__messages__text}>No messages yet!</p>
            <p className={styles.no__messages__text__secondary}>
              You can get that ball rolling...
            </p>
          </div>
        </div>
      )}
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {messages &&
          messages.length !== 0 &&
          messages.map((message, index) => {
            return (
              <div key={index} className={styles.sender__message__container}>
                <div className={styles.sender__message__name__container}>
                  <span
                    className={styles.sender__message__initial}
                    style={{ background: message.color }}
                  >
                    {message.name[0].toUpperCase()}
                  </span>
                  <span className={styles.sender__message__name}>
                    {message.name}
                  </span>
                </div>

                <p className={styles.sender__message__msg}>{message.message}</p>
              </div>
            );
          })}
      </Masonry>

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
        onRequestClose={() => setOpenModal(false)}
        className="modal__style"
      >
        <MessageForm styles={styles} setOpenModal={setOpenModal} />
      </Modal>
    </div>
  );
};

export default MessageList;
