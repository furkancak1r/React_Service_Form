import React from "react";
import MainForm from "../forms/mainForm/mainForm";
import "./home.css";
import DarkModeToggle from "../darkModeToggle/darkModeToggle";
import SetInitialFormDataValues from "../forms/setInitialFormDataValues/setInitialFormDataValues";

export default function Home() {
  SetInitialFormDataValues();

  return (
    <div className="home-container">
      <DarkModeToggle />
      <MainForm />
    </div>
  );
}
