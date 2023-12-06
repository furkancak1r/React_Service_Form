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
import { toast } from "react-toastify";
import { usePreLoader } from "../../../contexts/preLoaderContext/preLoaderContext";
export default function UnderHeaderFirstBox() {
  const { formData, FormDataFn } = useFormData();
  const { visualData, updateVisualData } = useVisualData();
  const { updatePreLoaderData } = usePreLoader();

  const handleInputChange = (fieldName, event) => {
    const value = event.target.value;
    FormDataFn({ ...formData, [fieldName]: value });
  };
  const getImage = () => {
    return new Promise((resolve, reject) => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.multiple = false;
      input.addEventListener("change", (event) => {
        const files = event.target.files;
        const image = files[0];

        if (!image) {
          reject("No image selected");
          return;
        }
        updatePreLoaderData(true);

        const reader = new FileReader();
        reader.onload = () => {
          const dataURL = reader.result;

          const updatedVisualData = {
            name: "Etiket",
            type: image.type,
            size: image.size,
            lastModified: image.lastModified,
            lastModifiedDate: image.lastModifiedDate,
            preview: URL.createObjectURL(image),
            extension: image.name.split(".").pop(),
            isUploaded: false,
            isProcessing: false,
            dataURL: dataURL,
          };

          resolve({ image, updatedVisualData });
        };

        reader.onerror = (error) => {
          reject(error);
        };

        reader.readAsDataURL(image);
      });

      input.click();
    });
  };

  const handleCameraEnhanceIconFn = async () => {
    const { serviceNo, reportNo } = formData;
    try {
      const { image, updatedVisualData } = await getImage();
      const { serialNo } = await handleCameraEnhanceIcon(
        image,
        updatedVisualData
      );

      const filteredVisualData = visualData.filter(
        (item) => item.name !== "Etiket"
      );
      const updatedData = {
        ...updatedVisualData,
        serviceNo: serviceNo,
        reportNo: reportNo,
      };

      // Yeni veriyi ekleyerek güncelle
      updateVisualData([...filteredVisualData, updatedData]);

      if (!serialNo) {
        toast.error(
          "Seri numarası bulunamadı, Lütfen manuel olarak giriniz. Girdiğiniz etiket kaydedilmiştir. İsterseniz alt kısımdan silme işlemini gerçekleştirebilirsiniz."
        );
        // sayfanın sonuna kaydır
        setTimeout(() => {
          window.scrollTo(0, document.body.scrollHeight);
        }, 1500);
      } else {
        const serialNumber = "serialNumber";
        FormDataFn({ ...formData, [serialNumber]: serialNo });
        toast.success(
          "Seri numarası başarıyla eklendi. Lütfen kontrol ediniz."
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      updatePreLoaderData(false);
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
