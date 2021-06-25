import React from "react";
import styles from "../styles/Messages.module.css";
import axios from "axios";

// Component imports
import MessageHeadLayout from "../components/head/MessageHeadLayout";
import MessageList from "../components/messages/MessageList";

const messages = (props) => {
  return (
    <MessageHeadLayout>
      <div className={styles.messages__container}>
        <div className={styles.messages__heading__container}>
          <h1 className={styles.messages__heading}>Your messages</h1>
        </div>
        {/* <MessageList styles={styles} messages={props.messages} /> */}
        <MessageList styles={styles} />
      </div>
    </MessageHeadLayout>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/messages/all`
  );

  if (!res.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      messages: res.data || null,
    },
  };
};

export default messages;
