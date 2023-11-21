import React from "react";
import "./underHeaderFirstBox.css";
import {
  UnderHeaderFirstBoxEnglishData,
  UnderHeaderFirstBoxTurkishData,
} from "./UnderHeaderFirstBoxDatas";
import { useFormData } from "../../../contexts/formDataContext/formDataContext";

export default function UnderHeaderFirstBox() {
  const { formData, FormDataFn } = useFormData();

  const handleInputChange = (fieldName, event) => {
    const value = event.target.value;
    FormDataFn({ ...formData, [fieldName]: value });
  };

  return (
    <div className="under-header-first-box-container container">
      {UnderHeaderFirstBoxTurkishData.map((field, index) => (
        <div className="row" key={index}>
          <div
            className={`under-header-first-box-form-label col-4 d-flex align-items-center ${
              index === UnderHeaderFirstBoxTurkishData.length - 1
                ? `box-borders`
                : `box-borders-left box-borders-right box-borders-top`
            }`}
          >
            <label htmlFor={UnderHeaderFirstBoxEnglishData[index]}>
              {field}
            </label>
          </div>
          <div
            className={`under-header-first-box-form-label-inputs col-8 ${
              index === UnderHeaderFirstBoxTurkishData.length - 1
                ? `box-borders-right box-borders-top box-borders-bottom`
                : `box-borders-right box-borders-top`
            }`}
          >
            {UnderHeaderFirstBoxEnglishData[index] === "address" ? (
              <textarea
                style={{ resize: "none" }}
                autoComplete="off"
                id={UnderHeaderFirstBoxEnglishData[index]}
                readOnly
                value={formData[UnderHeaderFirstBoxEnglishData[index]] || ""}
              />
            ) : (
              <input
                autoComplete="off"
                id={UnderHeaderFirstBoxEnglishData[index]}
                name={UnderHeaderFirstBoxEnglishData[index]}
                type="text"
                onChange={(e) =>
                  handleInputChange(UnderHeaderFirstBoxEnglishData[index], e)
                }
                value={formData[UnderHeaderFirstBoxEnglishData[index]] || ""}
                readOnly={[
                  "customerTitle",
                  "relatedPerson",
                  "address",
                  "branch",
                ].includes(UnderHeaderFirstBoxEnglishData[index])} // Make the input read-only for specified fields
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
