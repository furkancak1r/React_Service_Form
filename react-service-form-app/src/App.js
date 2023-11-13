import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/home/home";
import NotFound from "./components/notFound/notFound";
import { ToastContainer } from "react-toastify";
import HandleServerError from "./components/handleServerError/handleServerError";
import { FormDataProvider } from "./contexts/formDataContext/formDataContext";
import { ListItemDataProvider } from "./contexts/listItemsContext/listItemsContext";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="App">
      <FormDataProvider>
        <ListItemDataProvider>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/internal-error" element={<HandleServerError />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </ListItemDataProvider>
      </FormDataProvider>
    </div>
  );
}
