import {
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCTS_SUCCESS,
  POST_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  PATCH_PRODUCT_SUCCESS,
} from "../actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  errMessage: "",
  products: new Array(),
  totalPage: "",
};

export const productsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case PRODUCT_FAILURE: {
      return { ...state, isLoading: false, isError: true, errMessage: payload };
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload.data,
        totalPage: payload.headers.get("x-total-count"),
      };
    }
    case POST_PRODUCT_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case PATCH_PRODUCT_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case DELETE_PRODUCT_SUCCESS: {
      return { ...state, isLoading: false };
    }
    default:
      return state;
  }
};
