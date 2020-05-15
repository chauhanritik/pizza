import * as actionTypes from "../actions/actions";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DETAILS:
      return {
        ...state,
        ...action.result,
      };
    default:
  }

  return state;
};

export default reducer;
