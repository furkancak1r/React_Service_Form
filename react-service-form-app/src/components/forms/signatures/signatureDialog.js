import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import SignatureCanvas from "react-signature-canvas";
import { useVisualData } from "../../../contexts/visualDataContext/visualDataContext";
import { useFormData } from "../../../contexts/formDataContext/formDataContext";
export default function SignatureDialog({
  openDialog,
  handleCloseDialog,
  sigPadRef,
  signatureKey,
  updateVisualData,
}) {
  const { visualData } = useVisualData();
  const { formData } = useFormData();
  const { serviceNo, reportNo } = formData;
  const getDataURLInfo = (image) => {
    if (image) {
      // Extract base64 data

      var base64String = image.split(",")[1];

      // Decode base64
      var decodedData = atob(base64String);

      // Get size in bytes
      var size = decodedData.length;

      // Get lastModified timestamp from the image
      var lastModified = image.lastModified || new Date().getTime(); // Use provided timestamp or current time

      // Get lastModifiedDate string from the image
      var lastModifiedDate =
        image.lastModifiedDate || new Date(lastModified).toUTCString(); // Use provided date string or convert from timestamp

      // Create an object with the information
      var info = {
        size: size,
        lastModified: lastModified,
        lastModifiedDate: lastModifiedDate,
        preview: URL.createObjectURL(
          new Blob([decodedData], { type: image.type })
        ),
      };

      return info;
    }
    return null;
  };

  const onSignatureChange = (sigPadRef, signatureKey) => {
    if (sigPadRef && sigPadRef.current) {
      const signatureData = sigPadRef.current
        .getTrimmedCanvas()
        .toDataURL("image/png");

      const info = getDataURLInfo(signatureData);
      const updatedArray = visualData.map((data) =>
        data.name === signatureKey
          ? {
              ...data,
              reportNo: reportNo,
              serviceNo: serviceNo,
              name: signatureKey,
              type: "image/png",
              size: info.size,
              lastModified: info.lastModified,
              lastModifiedDate: info.lastModifiedDate,
              preview: info.preview,
              extension: "png",
              isUploaded: false,
              isProcessing: false,
              dataURL: signatureData,
            }
          : data
      );

      // If the name doesn't match, add a new object
      if (!visualData.some((data) => data.name === signatureKey)) {
        updatedArray.push({
          reportNo: reportNo,
          serviceNo: serviceNo,
          name: signatureKey,
          type: "image/png",
          size: info.size,
          lastModified: info.lastModified,
          lastModifiedDate: info.lastModifiedDate,
          preview: info.preview,
          extension: "png",
          isUploaded: false,
          isProcessing: false,
          dataURL: signatureData,
        });
      }

      updateVisualData(updatedArray);
    }
  };

  const clearCanvas = (sigPadRef, signatureKey) => {
    sigPadRef.current.clear();
    if (visualData && visualData.length > 0) {
      updateVisualData(visualData.filter((item) => item.name !== signatureKey));
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
            style={{ width: "auto", position: "relative" }}
            className="d-flex align-items-center signature-borders col-10"
          >
            <SignatureCanvas
              penColor="black"
              backgroundColor="whitesmoke"
              ref={sigPadRef}
              canvasProps={{ className: "sigCanvas" }}
              onEnd={() => onSignatureChange(sigPadRef, signatureKey)}
              style={{ position: "relative" }}
            />
          </div>
        </div>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: "whitesmoke" }}>
        {visualData &&
          visualData.length > 0 &&
          (visualData.some(
            (data) => data.name === "engineerTechnicianSignature"
          ) ||
            visualData.some((data) => data.name === "customerSignature")) && (
            <Button
              id="UndoIcon"
              onClick={() => clearCanvas(sigPadRef, signatureKey)}
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
