import React from "react";
import "./underHeaderFirstBox.css";
import {
  UnderHeaderFirstBoxEnglishData,
  UnderHeaderFirstBoxTurkishData,
} from "./UnderHeaderFirstBoxDatas";
import { useFormData } from "../../../contexts/formDataContext/formDataContext";

export default function UnderHeaderFirstBox() {
  const { FormData, FormDataFn } = useFormData();

  const handleInputChange = (fieldName, event) => {
    const value = event.target.value;
    FormDataFn({ ...FormData, [fieldName]: value });
  };
  return (
    <form className="under-header-first-box-form container">
      {UnderHeaderFirstBoxTurkishData.map((field, index) => (
        <div className="row" key={index}>
          <div className="under-header-first-box-form-label box-borders col-4 d-flex align-items-center p-1">
            <label htmlFor={UnderHeaderFirstBoxEnglishData[index]}>
              {field}
            </label>
          </div>
          <div className="under-header-first-box-form-label-inputs col-8 box-borders p-1">
            {UnderHeaderFirstBoxEnglishData[index] === "address" ? (
              <textarea
                autoComplete="off"
                id={UnderHeaderFirstBoxEnglishData[index]}
                onChange={(e) =>
                  handleInputChange(UnderHeaderFirstBoxEnglishData[index], e)
                }
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
              />
            )}
          </div>
        </div>
      ))}
    </form>
  );
}
