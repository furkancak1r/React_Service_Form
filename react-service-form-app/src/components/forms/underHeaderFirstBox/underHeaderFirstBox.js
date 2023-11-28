import React from "react";
import "./underHeaderFirstBox.css";
import {
  UnderHeaderFirstBoxEnglishData,
  UnderHeaderFirstBoxTurkishData,
} from "./UnderHeaderFirstBoxDatas";
import { useFormData } from "../../../contexts/formDataContext/formDataContext";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import { handleCameraEnhanceIcon } from "./underHeaderFirstBoxHelpers";
import { useVisualData } from "../../../contexts/visualDataContext/visualDataContext";

export default function UnderHeaderFirstBox() {
  const { formData, FormDataFn } = useFormData();
  const { visualData, updateVisualData } = useVisualData();

  const handleInputChange = (fieldName, event) => {
    const value = event.target.value;
    FormDataFn({ ...formData, [fieldName]: value });
  };
  const handleCameraEnhanceIconFn = async () => {
    try {
      const { updatedVisualData, serialNo } = await handleCameraEnhanceIcon();
      const serialNumber = "serialNumber";
      FormDataFn({ ...formData, [serialNumber]: serialNo });

      const filteredVisualData = visualData.filter(
        (item) => item.name !== "Etiket"
      );

      // Yeni veriyi ekleyerek güncelle
      updateVisualData([...filteredVisualData, updatedVisualData]);
    } catch (error) {
      console.error(error);
    }
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
              <div className="d-flex h-full justify-content-center align-items-center">
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
                  ].includes(UnderHeaderFirstBoxEnglishData[index])}
                />
                {UnderHeaderFirstBoxEnglishData[index] === "serialNumber" && (
                  <CameraEnhanceIcon
                    id="cameraEnhanceIcon"
                    className="m-1"
                    onClick={() => handleCameraEnhanceIconFn()}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
