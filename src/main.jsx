import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-multi-carousel/lib/styles.css";
import "./Style/style.css";
import CurrentProvider from "./Components/Common/currentContext.jsx";
import UserProvider from "./Components/Common/userContext.jsx";

import { routers } from "./utils/router.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter(routers);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CurrentProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </CurrentProvider>
  </React.StrictMode>
);
