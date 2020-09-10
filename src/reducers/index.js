import { combineReducers } from "redux";
import UserDataReducer from "./UserDataReducer";

export default combineReducers({
  userDetails: UserDataReducer,
});
