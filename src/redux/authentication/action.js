import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actionTypes";
import axios from "axios";
const URL = `https://reqres.in/api/login`;

export const loginRequestAction = () => {
  return { type: LOGIN_REQUEST };
};

export const loginFailureAction = (payload) => {
  return { type: LOGIN_FAILURE, payload };
};

export const loginSuccessAction = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};

export const logoutSuccessAction = () => {
  return { type: LOGOUT_SUCCESS };
};

export const login = (user) => async (dispatch) => {
  try {
    dispatch(loginRequestAction());
    const res = await axios.post(URL, user);
    dispatch(loginSuccessAction(res.data.token));
  } catch (err) {
    dispatch(loginFailureAction(err.message));
  }
};

export const logout = (dispatch) => {
  dispatch(logoutSuccessAction());
};
