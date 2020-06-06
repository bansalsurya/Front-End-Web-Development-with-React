import * as ActionTypes from './ActionTypes';

export const InitialFeedback = (
  state = {
    firstname: null,
    lastname: null,
    telnum: null,
    email: null,
    agree: false,
    contactType: 'Tel.',
    message: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACK:
      return {
        ...state,
        firstname: action.payload,
        lastname: action.payload,
        telnum: action.payload,
        email: action.payload,
        agree: action.payload,
        contactType: action.payload,
        message: action.payload,
      };
    default:
      return state;
  }
};
