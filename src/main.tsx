import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globals.scss";
import { Provider } from "react-redux";
import { store } from "../redux/store.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
