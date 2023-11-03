import React from 'react';
import MainForm from '../forms/mainForm/mainForm';
import "./home.css";
import DarkModeToggle from '../darkModeToggle/darkModeToggle';
export default function Home() {
  return (
    <div className='home-container'>
      <DarkModeToggle/>
      <MainForm/>
    </div>
  )
}
