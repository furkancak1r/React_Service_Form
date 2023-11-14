import React from "react";
import "./submitButton.css";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function SubmitButton() {
  return (
    <Button variant="outlined" className="submit-button" endIcon={<SendIcon />}>
      Gönder
    </Button>
  );
}
