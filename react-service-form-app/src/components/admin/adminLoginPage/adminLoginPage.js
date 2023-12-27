import React, { useState } from "react";
import LoginAdmin from "../../../api/loginAdmin";
import "./adminLoginPage.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/authContext/authContext";
import { toast } from "react-toastify";

export default function AdminLoginPage() {
  const navigate = useNavigate();

  const { login, logout, setLoginInfoFn } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      const isMatch = await LoginAdmin(username, password);

      if (isMatch) {
        login();
        setLoginInfoFn(username);
        toast.success("Giriş Başarılı, Yönlendiriliyorsunuz!", {
          draggable: false,
        });

        setTimeout(() => {
          navigate("/");
        }, 1800);
      } else {
        console.log("kullanıcı adı veya şifre yanlış");
        toast.error("Kullanıcı adı veya şifre yanlış", {
          draggable: false,
        });
        logout();
        setPassword("");
      }
    } catch (error) {
      console.error("Giriş hatası:", error);
    }
  };

  return (
    <div className="admin-login-page-container">
      <div className="admin-login-container">
        <h2 className="admin-title">Admin Panel</h2>
        <div className="admin-input-container">
          <input
            type="text"
            name="Kullanıcı Adı"
            className="admin-input"
            placeholder="Kullanıcı Adı"
            value={username}
            onChange={handleUsernameChange}
          />
          <i className="zmdi zmdi-account zmdi-hc-lg admin-icon"></i>
        </div>

        <div className="admin-input-container">
          <input
            type="password"
            name="Şifre"
            className="admin-input"
            placeholder="Şifre"
            value={password}
            onChange={handlePasswordChange}
            onKeyDown={handleKeyPress}
          />
          <i className="zmdi zmdi-lock zmdi-hc-lg admin-icon"></i>
        </div>
        <button type="submit" onClick={handleSubmit} className="admin-button">
          Giriş Yap
        </button>
      </div>
    </div>
  );
}
