import * as Actions from "./actions";
import initialState from "../store/initialState";

export const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SING_IN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
