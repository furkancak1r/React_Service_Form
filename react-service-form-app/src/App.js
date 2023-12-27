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
import { VisualDataProvider } from "./contexts/visualDataContext/visualDataContext";
import "react-toastify/dist/ReactToastify.css";
import PreLoader from "./components/preLoader/preLoader";
import { PreLoaderProvider } from "./contexts/preLoaderContext/preLoaderContext";
import AdminLoginPage from "./components/admin/adminLoginPage/adminLoginPage";
import { AuthProvider } from "./contexts/authContext/authContext";
export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <PreLoaderProvider>
          <PreLoader />
          <FormDataProvider>
            <ListItemDataProvider>
              <VisualDataProvider>
                <ToastContainer />
                <Routes>
                  <Route path="/admin-login" element={<AdminLoginPage />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/not-found" element={<NotFound />} />
                  <Route
                    path="/internal-error"
                    element={<HandleServerError />}
                  />
                  <Route path="*" element={<Navigate to="/not-found" />} />
                </Routes>
              </VisualDataProvider>
            </ListItemDataProvider>
          </FormDataProvider>
        </PreLoaderProvider>
      </AuthProvider>
    </div>
  );
}
