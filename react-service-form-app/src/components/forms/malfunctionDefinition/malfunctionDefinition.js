import React from "react";
import "./malfunctionDefinition.css";
import { useFormData } from "../../../contexts/formDataContext/formDataContext";

export default function MalfunctionDefinition() {
  const { formData, FormDataFn } = useFormData();

  const handleInputChange = (fieldName, event) => {
    const value = event.target.value;
    FormDataFn({ ...formData, [fieldName]: value });
  };
  return (
    <div className="malfunction-definition-container">
      <div className="row">
        <div className="col-12">
          <div className="box-borders d-flex justify-content-center align-items-center">
            <h5 className="text-center" htmlFor="malfunctionDefinition">
              Arıza Tanımı / Servis Açıklaması
            </h5>
          </div>
          <div className="col-12 box-borders-left box-borders-right box-borders-bottom">
            <textarea
              autoComplete="off"
              id="malfunctionDefinition"
              onChange={(e) => handleInputChange("malfunctionDefinition", e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
