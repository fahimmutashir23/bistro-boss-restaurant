import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import Provider from "./Provider/Provider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <RouterProvider router={Routes}></RouterProvider>
        </Provider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
