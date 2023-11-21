import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useFormData } from "../../../contexts/formDataContext/formDataContext";
import SignatureCanvas from "react-signature-canvas";

export default function SignatureDialog({
  openDialog,
  handleCloseDialog,
  sigPadRef,
  FormDataFn,
  formDataKey,
}) {
  const { formData } = useFormData();

  const onSignatureChange = (sigPadRef, formDataKey) => {
    if (sigPadRef && sigPadRef.current) {
      const signatureData = sigPadRef.current
        .getTrimmedCanvas()
        .toDataURL("image/png");
      FormDataFn({
        ...formData,
        [formDataKey]: signatureData,
      });
    }
  };

  const clearCanvas = (sigPadRef, formDataKey) => {
    if (formData[formDataKey] && formData[formDataKey].length > 2) {
      sigPadRef.current.clear();
      FormDataFn({
        ...formData,
        [formDataKey]: "",
      });
    }
  };

  return (
    <Dialog
      open={openDialog}
      fullWidth={true}
      maxWidth="md"
      onClose={handleCloseDialog}
    >
      <DialogContent sx={{ backgroundColor: "whitesmoke" }}>
        <div className="signatureFn-canvas-container">
          <div
            style={{ width: "auto", position: "relative"}}
            className="d-flex align-items-center signature-borders col-10"
          >
            <SignatureCanvas
              penColor="black"
              backgroundColor="whitesmoke"
              ref={sigPadRef}
              canvasProps={{ className: "sigCanvas" }}
              onEnd={() => onSignatureChange(sigPadRef, formDataKey)}
              style={{ position: "relative" }}
            />
          </div>
        </div>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: "whitesmoke" }}>
        {formData[formDataKey] && formData[formDataKey].length > 2 && (
          <Button
            id="UndoIcon"
            onClick={() => clearCanvas(sigPadRef, formDataKey)}
          >
            Geri Al
          </Button>
        )}
        <Button id="signature-save" onClick={handleCloseDialog}>
          Kaydet
        </Button>
      </DialogActions>
    </Dialog>
  );
}
