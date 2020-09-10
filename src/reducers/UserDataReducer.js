import {
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAILED,
} from "../constant/constant";

const initialState = {
  isDataLoading: true,
  data: [],
  error: null,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        isDataLoading: false,
        data: state.data.concat(payload),
        error: null,
      };
    case FETCH_USER_DATA_FAILED:
      return {
        ...state,
        isDataLoading: false,
        data: state.data,
        error: payload,
      };
    default:
      return state;
  }
}
// state.customers.concat(action.data.customers)
