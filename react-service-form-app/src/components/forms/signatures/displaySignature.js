import React, { useState, useEffect } from "react";
import { useFormData } from "../../../contexts/formDataContext/formDataContext";

export default function DisplaySignature() {
  const { formData } = useFormData();
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (formData.signature) {
      // Convert base64 to image
      const img = new Image();
      img.src = formData.signature;
      setImageSrc(img.src);
    }
  }, [formData.signature]);

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
