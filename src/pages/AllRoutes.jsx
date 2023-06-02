import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AdminPage } from "./AdminPage";
import { LoginPage } from "./LoginPage";
import { PageNotFound } from "./PageNotFound";
import { PrivateRoute } from "../components/PrivateRoute";
import { EditProduct } from "./EditProduct";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route
        path={"/admin"}
        element={
          <PrivateRoute>
            <AdminPage />
          </PrivateRoute>
        }
      />
      <Route
        path={"/edit-product/:id"}
        element={
          <PrivateRoute>
            <EditProduct />
          </PrivateRoute>
        }
      />
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"*"} element={<PageNotFound />} />
    </Routes>
  );
};
