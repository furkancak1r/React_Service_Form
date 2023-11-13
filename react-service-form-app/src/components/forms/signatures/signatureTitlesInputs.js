import React from "react";

export default function SignatureTitlesInputs({ handleInputChange }) {
  return (
    <div className="name-surname-input-container row">
      <div className="name-h6-container-1 col-2">
        <div className="box-borders-left box-borders-bottom">
          <h6
            htmlFor="prosoEngineerTechnicianNameSurname"
            className="text-left"
          >
            Ad Soyad
          </h6>
        </div>
      </div>
      <div className="name-input-container-1-above col-4">
        <div className="name-input-container-1 box-borders-left box-borders-bottom box-borders-right">
          <input
            autoComplete="off"
            id="prosoEngineerTechnicianNameSurname"
            name="prosoEngineerTechnicianNameSurname"
            type="text"
            onChange={(e) =>
              handleInputChange("prosoEngineerTechnicianNameSurname", e)
            }
          />
        </div>
      </div>
      <div className="name-h6-container-2 col-2">
        <div className="box-borders-bottom">
          <h6 htmlFor="customerNameSurname" className="text-left">
            Ad Soyad
          </h6>
        </div>
      </div>
      <div className="name-input-container-2-above col-4">
        <div className="name-input-container-2 box-borders-left box-borders-bottom box-borders-right">
          <input
            autoComplete="off"
            id="customerNameSurname"
            name="customerNameSurname"
            type="text"
            onChange={(e) => handleInputChange("customerNameSurname", e)}
          />
        </div>
      </div>
    </div>
  );
}
