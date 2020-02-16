import {
  FETCH_SMURFS_DATA_START,
  FETCH_SMURFS_DATA_SUCCESS,
  FETCH_SMURFS_DATA_FAILURE
} from "../actions";

const initialState = {
  smurfs: [],
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_DATA_START:
      return {
        ...state,
        error: ""
      };
    case FETCH_SMURFS_DATA_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        error: ""
      };
    case FETCH_SMURFS_DATA_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
