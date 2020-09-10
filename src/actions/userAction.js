import Axios from "axios";
import {
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAILED,
} from "../constant/constant";

export const userDataFetchApi = (props) => async (dispatch) => {
  console.log(props, "usernamein action");
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await Axios.get(
      `https://api.github.com/users/${props}`,
      {},
      config
    );
    console.log(res.data, "result%%%");
    dispatch({
      type: FETCH_USER_DATA_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_USER_DATA_FAILED,
      payload: err.message,
    });
  }
};
