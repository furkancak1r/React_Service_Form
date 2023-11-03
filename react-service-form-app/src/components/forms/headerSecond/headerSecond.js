import React, { useState, useEffect } from "react";
import "./headerSecond.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HeaderSecond() {
  const [todaysDate, setTodaysDate] = useState("");

  useEffect(() => {
    const getFormattedDate = () => {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, "0");
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const year = today.getFullYear();
      setTodaysDate(`${day}/${month}/${year}`);
    };

    getFormattedDate();
  }, []);
  const getHeaderFirstRowClassName = () => {
    if (window.innerWidth <= 620) {
      return "header-second-first-row box-borders-bottom box-borders-top row d-flex justify-content-center align-items-center";
    } else {
      return "header-second-first-row box-borders-left box-borders-bottom row d-flex justify-content-center align-items-center";
    }
  };
  const getHeaderSecondRowClassName = () => {
    if (window.innerWidth <= 620) {
      return "header-second-second-row row d-flex justify-content-center align-items-center";
    } else {
      return "header-second-second-row box-borders-left row d-flex justify-content-center align-items-center";
    }
  };
  return (
    <div className="header-second-container container box-borders">
      <div className="row-container row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <h2 className=" text-center">SERVİS RAPORU</h2>
        </div>
        <div className="col-md-6">
          <div className={getHeaderFirstRowClassName()}>
            <h5 className="text-center">RAPOR NO: 1234567</h5>
          </div>
          <div className={getHeaderSecondRowClassName()}>
            <h5 className="text-center">Tarih: {todaysDate}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
