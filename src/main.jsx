import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ChakraProvider>
    <BrowserRouter>
      <Provider store={store}>
        <ColorModeScript initialColorMode="light" />
        <App />
      </Provider>
    </BrowserRouter>
  </ChakraProvider>
  // </React.StrictMode>
);
