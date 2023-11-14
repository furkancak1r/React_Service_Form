import React from "react";
import "./submitButton.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useFormData } from "../../../contexts/formDataContext/formDataContext";
import { useListItemData } from "../../../contexts/listItemsContext/listItemsContext";

export default function AddVisualButton() {
  const { formData } = useFormData();
  const { listItemData } = useListItemData();
  const handleSubmitClick = () => {
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
