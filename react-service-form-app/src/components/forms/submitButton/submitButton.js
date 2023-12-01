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

const checkMissingFields = (formData) => {
  return fieldDefinitions.filter(
    (field) => !formData[field.id] || formData[field.id].length < 1
  );
};

export default function SubmitButton() {
  const { visualData } = useVisualData();
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

  const handleSubmitClick = async () => {
    if (handleMissingFields()) {
      return;
    }
    const responseFromUloadFormData = await uploadFormData(formData);
    if (responseFromUloadFormData) {
      toast.success("Form başarıyla gönderildi.");
    } else {
      toast.error("Form gönderilirken bir hata oluştu.");
    }
    // const responseFromUloadFormData = await uploadFormData(formData);
    // const responseFromUloadVisualData = await uploadVisualData(visualData);
    // const responseFromUloadListItemData = await uploadListItemData(
    //   listItemData
    // );
    // if (
    //   responseFromUloadFormData &&
    //   responseFromUloadVisualData &&
    //   responseFromUloadListItemData
    // ) {
    //   toast.success("Form başarıyla gönderildi.");
    // } else {
    //   toast.error("Form gönderilirken bir hata oluştu.");
    // }
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
