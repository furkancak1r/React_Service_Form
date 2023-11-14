import React from "react";
import "./signatures.css";
import { useFormData } from "../../../contexts/formDataContext/formDataContext";
import SignatureTitles from "./signatureTitles";
import SignatureTitlesInputs from "./signatureTitlesInputs";
import SignatureFn from "./signatureFn";
export default function Signatures() {
  const { formData, FormDataFn } = useFormData();

  const handleInputChange = (fieldName, event) => {
    const value = event.target.value;
    FormDataFn({ ...formData, [fieldName]: value });
  };

  return (
    <div className="signature-container row">
      <SignatureTitles />
      <SignatureTitlesInputs handleInputChange={handleInputChange} />
      <SignatureFn />
    </div>
  );
}
