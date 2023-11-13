import React from "react";
import "./defectivePartSerialNumber.css";
import { useFormData } from "../../../contexts/formDataContext/formDataContext";

export default function DefectivePartSerialNumber() {
  const { FormData, FormDataFn } = useFormData();

  const handleInputChange = (fieldName, event) => {
    const value = event.target.value;
    FormDataFn({ ...FormData, [fieldName]: value });
  };
  return (
    <div className="row render-defective-part-serial-number-label-and-input">
      <div className="col-3 defective-part-serial-number-container-below">
        <div className="defective-part-serial-number-container box-borders-left box-borders-bottom box-borders-top">
          <h6
            htmlFor="defectivePartSerialNumber"
            className="defective-part-serial-number text-left"
          >
            Arızalı Parça Seri Numarası
          </h6>
        </div>
      </div>
      <div className="col-9 defective-part-serial-number-input-container-all">
        <div className="defective-part-serial-number-input-container box-borders">
          <input
            autoComplete="off"
            id="defectivePartSerialNumber"
            name="defectivePartSerialNumber"
            type="text"
            onChange={(e) => handleInputChange("defectivePartSerialNumber", e)}
          />
        </div>
      </div>
    </div>
  );
}
