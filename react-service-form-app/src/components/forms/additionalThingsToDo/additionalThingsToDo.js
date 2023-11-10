import React from "react";
import "./additionalThingsToDo.css";
import { useFormData } from "../../../contexts/formDataContext/formDataContext";

export default function AdditionalThingsToDo() {
  const { FormData, FormDataFn } = useFormData();

  const handleInputChange = (fieldName, event) => {
    const value = event.target.value;
    FormDataFn({ ...FormData, [fieldName]: value });
  };
  return (
    <div className="additional-things-to-do-container">
      <div className="row">
        <div className="col-12">
          <div className="box-borders d-flex justify-content-center align-items-center">
            <h5 className="text-center" htmlFor="additionalThingsToDo">
              İlave Yapılması Gerekenler
            </h5>
          </div>
          <div className="col-12 box-borders-left box-borders-right box-borders-bottom">
            <textarea
              autoComplete="off"
              id="additionalThingsToDo"
              onChange={(e) => handleInputChange("additionalThingsToDo", e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
