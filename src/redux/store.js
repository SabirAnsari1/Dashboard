import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./authentication/authReducer";
import { productsReducer } from "./products/productsReducer";

const rootReducer = combineReducers({
  authReducer,
  productsReducer,
});

// const myMiddleWare = (store) => (dispatch) => (action) => {
//   if (typeof dispatch === "function") {
//     return action(dispatch);
//   }
//   return dispatch(action);
// };

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
