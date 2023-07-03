import {
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCTS_SUCCESS,
  PATCH_PRODUCT_SUCCESS,
  POST_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "../actionTypes";
import axios from "axios";
const URL = `https://odd-necklace-pike.cyclic.app/products`;

export const productRequestAction = () => {
  return { type: PRODUCT_REQUEST };
};

export const productFailureAction = (payload) => {
  return { type: PRODUCT_FAILURE, payload };
};

export const getProductsSuccessAction = (payload) => {
  return { type: GET_PRODUCTS_SUCCESS, payload };
};

export const postProductSuccessAction = () => {
  return { type: POST_PRODUCT_SUCCESS };
};

export const patchProductSuccessAction = () => {
  return { type: PATCH_PRODUCT_SUCCESS };
};

export const deleteProductSuccessAction = () => {
  return { type: DELETE_PRODUCT_SUCCESS };
};

export const getProducts = (queryParams) => async (dispatch) => {
  try {
    dispatch(productRequestAction());
    const res = await axios.get(URL, queryParams);
    dispatch(getProductsSuccessAction(res));
  } catch (err) {
    dispatch(productFailureAction(err.message));
  }
};

export const postProduct = (newProduct) => async (dispatch) => {
  try {
    dispatch(productRequestAction());
    const res = await axios.post(URL, newProduct);
    dispatch(postProductSuccessAction());
  } catch (err) {
    dispatch(productFailureAction(err.message));
  }
};

export const editProduct = (id, newProduct) => async (dispatch) => {
  try {
    dispatch(productRequestAction());
    const res = await axios.patch(`${URL}/${id}`, newProduct);
    dispatch(patchProductSuccessAction());
  } catch (err) {
    dispatch(productFailureAction(err.message));
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch(productRequestAction());
    const res = await axios.delete(`${URL}/${id}`);
    dispatch(deleteProductSuccessAction());
  } catch (err) {
    dispatch(productFailureAction(err.message));
  }
};
