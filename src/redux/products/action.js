import {
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCTS_SUCCESS,
  PATCH_PRODUCT_SUCCESS,
  POST_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "../actionTypes";
import axios from "axios";
const URL = `https://dashboard-json-server-sabiransari1.onrender.com`;

export const getProducts = (queryParams) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });
    const res = await axios.get(`${URL}/products`, queryParams);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res });
  } catch (err) {
    dispatch({ type: PRODUCT_FAILURE, payload: err.message });
  }
};

export const postProduct = (newProduct) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });
    const res = await axios.post(`${URL}/products`, newProduct);
    dispatch({ type: POST_PRODUCT_SUCCESS });
  } catch (err) {
    dispatch({ type: PRODUCT_FAILURE, payload: err.message });
  }
};

export const editProduct = (id, newProduct) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });
    const res = await axios.patch(`${URL}/products/${id}`, newProduct);
    dispatch({ type: PATCH_PRODUCT_SUCCESS });
  } catch (err) {
    dispatch({ type: PRODUCT_FAILURE, payload: err.message });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });
    const res = await axios.delete(`${URL}/products/${id}`);
    dispatch({ type: DELETE_PRODUCT_SUCCESS });
  } catch (err) {
    dispatch({ type: PRODUCT_FAILURE, payload: err.message });
  }
};
