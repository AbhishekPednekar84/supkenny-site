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

const siteReducer = (state, action) => {
  switch (action.type) {
    case CREATE_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        messageCreated: true,
      };
    case CREATE_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        messageCreated: false,
        errorMessage: action.payload,
      };
    case FETCH_ALL_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: action.payload,
      };
    case FETCH_ALL_MESSAGES_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    case SUBSCRIPTION_SAVED_SUCCESS:
      return {
        ...state,
        subscriptionMessage: action.payload,
        subscriptionSaved: true,
        loading: false,
      };
    case SUBSCRIPTION_SAVED_FAILURE:
      return {
        ...state,
        subscriptionSaved: false,
        errorMessage: action.payload,
        loading: false,
      };
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        images: action.payload,
      };
    case EMAIL_SENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case FETCH_IMAGES_FAILURE:
    case EMAIL_SENT_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default siteReducer;
