import React from "react";
import "./submitButton.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useFormData } from "../../../contexts/formDataContext/formDataContext";
import { useListItemData } from "../../../contexts/listItemsContext/listItemsContext";
import { toast } from "react-toastify";
import { fieldDefinitions } from "../../../constants/helpers";
import {
  uploadFormData,
  uploadVisualData,
  uploadListItemData,
} from "../../../api/dataExport";
import { useVisualData } from "../../../contexts/visualDataContext/visualDataContext";
import { usePreLoader } from "../../../contexts/preLoaderContext/preLoaderContext";
const checkMissingFields = (formData) => {
  return fieldDefinitions.filter(
    (field) => !formData[field.id] || formData[field.id].length < 1
  );
};

export default function SubmitButton() {
  const { visualData, updateVisualData } = useVisualData();
  const { formData } = useFormData();
  const { listItemData } = useListItemData();
  const { updatePreLoaderData } = usePreLoader();
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

  const handleSubmitClick = async () => {
    if (handleMissingFields()) {
      return;
    }
    updatePreLoaderData(true);

    try {
      await Promise.all([
        uploadFormData(formData),
        uploadVisualData(visualData),
        uploadListItemData(listItemData),
      ]);

      toast.success("Form başarıyla gönderildi.");
    } catch (error) {
      toast.error("Form gönderilirken bir hata oluştu.");
    } finally {
      updatePreLoaderData(false);
    }
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
