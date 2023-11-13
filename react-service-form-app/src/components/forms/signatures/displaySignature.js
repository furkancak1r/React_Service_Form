import React, { useState, useEffect } from "react";
import { useFormData } from "../../../contexts/formDataContext/formDataContext";

export default function DisplaySignature() {
  const { FormData } = useFormData();
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (FormData.signature) {
      // Convert base64 to image
      const img = new Image();
      img.src = FormData.signature;
      setImageSrc(img.src);
    }
  }, [FormData.signature]);

  return (
    <div className="display-signature-container">
      {imageSrc && (
        <div className="signature-image-container">
          <img
            src={imageSrc}
            alt="Signature"
            className="img-fluid"
          />
        </div>
      )}
    </div>
  );
}
