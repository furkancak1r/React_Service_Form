import React from "react";
import "./headerSecond.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HeaderSecond() {
  const getFormattedDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="header-second-container container box-borders">
      <div className="row-container d-flex align-items-center row">
        <div className="col-md-6 text-center">
          <h2>SERVİS RAPORU</h2>
        </div>
        <div className="col-md-6">
          <div className="first-row row d-flex align-items-center text-left">
            <h5>RAPOR NO:</h5>
          </div>
          <div className="second-row row  d-flex align-items-center text-center">
            <h6>Tarih: {getFormattedDate()}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
