import React from "react";

export default function SignatureTitles() {
  return (
    <div className="name-surname-title-container row">
      <div className="name-title-1 col-6">
        <div className="name-h6-container box-borders d-flex justify-content-center align-items-center">
          <h6 className="text-center">Proso Mühendis / Teknisyen</h6>
        </div>
      </div>
      <div className="name-title-2 col-6">
        <div className="name-h6-container box-borders-bottom box-borders-top box-borders-right d-flex justify-content-center align-items-center">
          <h6 className="text-center">Müşteri</h6>
        </div>
      </div>
    </div>
  );
}
