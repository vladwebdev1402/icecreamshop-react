import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./routes";
import Root from "./Root";
import MainPage from "../../pages/MainPage/MainPage";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={routes.main} element={<Root />}>
        <Route index element={<MainPage />} />
        <Route path={routes.catalog} element={<CatalogPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
