import React from "react";
import "./submitButton.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useFormData } from "../../../contexts/formDataContext/formDataContext";
import { useListItemData } from "../../../contexts/listItemsContext/listItemsContext";
import { toast } from "react-toastify";

const fieldDefinitions = [
  { id: "departureTime", text: "Yola Çıkış Saati" },
  { id: "arrivalTime", text: "Yola Varış Saati" },
  { id: "serviceStartTime", text: "Servis Baş. Saati" },
  { id: "serviceEndTime", text: "Servis Bitiş Saati" },
  { id: "totalDistance", text: "Toplam Yol (KM)" },
  { id: "malfunctionDefinition", text: "Arıza Tanımı / Servis Açıklaması" },
];

const checkMissingFields = (formData) => {
  return fieldDefinitions.filter(
    (field) => !formData[field.id] || formData[field.id].length < 1
  );
};

export default function SubmitButton() {
  const { formData } = useFormData();
  const { listItemData } = useListItemData();

  const handleMissingFields = () => {
    const missingFields = checkMissingFields(formData);

    if (missingFields.length > 0) {
      const missingFieldNames = missingFields
        .map((field) => `<br>${field.text}`)
        .join("");
      toast.error(
        <div
          dangerouslySetInnerHTML={{
            __html: `Lütfen şu alanları doldurun: ${missingFieldNames}`,
          }}
        />
      );
      return true;
    }

    return false;
  };

  const handleSubmitClick = () => {
    if (handleMissingFields()) {
      return;
    }

    console.log("formData:", formData);
    console.log("listItemData:", listItemData);
  };

  return (
    <Button
      variant="outlined"
      className="submit-button"
      onClick={handleSubmitClick}
      endIcon={<SendIcon />}
    >
      Gönder
    </Button>
  );
}