import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "../actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  errMessage: "",
  token: "",
  isLogout: false,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isLogout: false,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errMessage: payload,
      };
    }
    case LOGIN_SUCCESS: {
      return { ...state, isLoading: false, isAuth: true, token: payload };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: "",
        isLogout: true,
      };
    }
    default:
      return state;
  }
};
