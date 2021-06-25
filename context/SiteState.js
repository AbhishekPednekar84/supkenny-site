import React, { useReducer } from "react";
import axios from "axios";
import SiteContext from "./siteContext";
import siteReducer from "./siteReducer";

import {
  LOADING,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_FAILURE,
  SUBSCRIPTION_SAVED_SUCCESS,
  SUBSCRIPTION_SAVED_FAILURE,
  FETCH_ALL_MESSAGES_SUCCESS,
  FETCH_ALL_MESSAGES_FAILURE,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
  EMAIL_SENT_SUCCESS,
  EMAIL_SENT_FAILURE,
} from "./Types";

const SiteState = (props) => {
  const initialState = {
    messages: [],
    images: [],
    messageCreated: false,
    subscriptionSaved: false,
    subscriptionMessage: null,
    loading: false,
    errorMessage: null,
  };

  const [state, dispatch] = useReducer(siteReducer, initialState);

  const createNewMessage = async (name, email, message) => {
    const jsonPayload = {
      name: name,
      email: email,
      message: message,
    };

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/message/create`,
        jsonPayload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({ type: CREATE_MESSAGE_SUCCESS });
    } catch (err) {
      dispatch({
        type: CREATE_MESSAGE_FAILURE,
        payload: err.response.data.detail,
      });
    }
  };

  const getAllMessages = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/messages/all`
      );

      dispatch({ type: FETCH_ALL_MESSAGES_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({
        type: FETCH_ALL_MESSAGES_FAILURE,
        payload: err.response.data.detail,
      });
    }
  };

  const eventSubscription = async (email) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/subscribe/${email}`
      );

      dispatch({ type: SUBSCRIPTION_SAVED_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({
        type: SUBSCRIPTION_SAVED_FAILURE,
        payload: err.response.data.detail,
      });
    }
  };

  const getHaldiImages = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/gallery/haldi`
      );

      dispatch({ type: FETCH_IMAGES_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({
        type: FETCH_IMAGES_FAILURE,
        payload: err.response.data.detail,
      });
    }
  };

  const getWeddingImages = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/gallery/wedding`
      );

      dispatch({ type: FETCH_IMAGES_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({
        type: FETCH_IMAGES_FAILURE,
        payload: err.response.data.detail,
      });
    }
  };

  const getReceptionImages = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/gallery/reception`
      );

      dispatch({ type: FETCH_IMAGES_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({
        type: FETCH_IMAGES_FAILURE,
        payload: err.response.data.detail,
      });
    }
  };

  const sendEmailFromCouple = async (recipientName, recipientEmail, year) => {
    const jsonPayload = {
      recipient_name: recipientName,
      recipient_email: recipientEmail,
      year: year,
    };

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/email/couple/from`,
        jsonPayload
      );

      dispatch({ type: EMAIL_SENT_SUCCESS });
    } catch (err) {
      dispatch({
        type: EMAIL_SENT_FAILURE,
        payload: err.response.data.detail,
      });
    }
  };

  const sendEmailToCouple = async (senderName, senderMessage, year) => {
    const jsonPayload = {
      sender_name: senderName,
      sender_message: senderMessage,
      year: year,
    };

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/email/couple/to`,
        jsonPayload
      );

      dispatch({ type: EMAIL_SENT_SUCCESS });
    } catch (err) {
      dispatch({
        type: EMAIL_SENT_FAILURE,
        payload: err.response.data.detail,
      });
    }
  };

  const setLoading = () => {
    dispatch({ type: LOADING });
  };

  return (
    <SiteContext.Provider
      value={{
        messages: state.messages,
        subscriptionSaved: state.subscriptionSaved,
        loading: state.loading,
        images: state.images,
        subscriptionMessage: state.subscriptionMessage,
        createNewMessage,
        getAllMessages,
        eventSubscription,
        getHaldiImages,
        getWeddingImages,
        getReceptionImages,
        sendEmailFromCouple,
        sendEmailToCouple,
        setLoading,
      }}
    >
      {props.children}
    </SiteContext.Provider>
  );
};

export default SiteState;
