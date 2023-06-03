import {
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCTS_SUCCESS,
  PATCH_PRODUCT_SUCCESS,
  POST_PRODUCT_SUCCESS,
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
} from "../actionTypes";
import axios from "axios";

export const productsRequestAction = () => {
  return { type: PRODUCTS_REQUEST };
};

export const productsFailureAction = (payload) => {
  return { type: PRODUCTS_FAILURE, payload };
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
  return { type: PATCH_PRODUCT_SUCCESS };
};

export const getProducts = (queryParams) => async (dispatch) => {
  try {
    dispatch(productsRequestAction());
    const res = await axios.get(
      `https://odd-necklace-pike.cyclic.app/products`,
      queryParams
    );
    dispatch(getProductsSuccessAction(res));
  } catch (err) {
    dispatch(productsFailureAction(err.message));
  }
};

export const postProduct = (newProduct) => async (dispatch) => {
  try {
    dispatch(productsRequestAction());
    const res = await axios.post(
      `https://odd-necklace-pike.cyclic.app/products`,
      newProduct
    );
    dispatch(postProductSuccessAction());
  } catch (err) {
    dispatch(productsFailureAction(err.message));
  }
};

export const editProduct = (id, newProduct) => async (dispatch) => {
  try {
    dispatch(productsRequestAction());
    const res = await axios.patch(
      `https://odd-necklace-pike.cyclic.app/products/${id}`,
      newProduct
    );
    dispatch(patchProductSuccessAction());
  } catch (err) {
    dispatch(productsFailureAction(err.message));
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch(productsRequestAction());
    const res = await axios.delete(
      `https://odd-necklace-pike.cyclic.app/products/${id}`
    );
    dispatch(deleteProductSuccessAction());
  } catch (err) {
    dispatch(productsFailureAction(err.message));
  }
};
