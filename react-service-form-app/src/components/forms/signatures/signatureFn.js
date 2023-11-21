import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { useFormData } from "../../../contexts/formDataContext/formDataContext";

import SignatureDialog from "./signatureDialog";

export default function SignatureFn() {
  const { formData, FormDataFn } = useFormData();

  const sigPadRef1 = useRef(null);
  const sigPadRef2 = useRef(null);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedSigPadRef, setSelectedSigPadRef] = useState(sigPadRef1);
  const [formDataKey, setFormDataKey] = useState("");




  const handleSubmitClick = (selectedSigPadRef,key) => {
    setOpenDialog(true);
    setSelectedSigPadRef(selectedSigPadRef);
    setFormDataKey(key);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className="signatureFn-container row">
      <div className="signatureFn-container-below col-2">
        <div  className="signature-label-container d-flex justify-content-center align-items-center box-borders-bottom box-borders-left">
          <Button
            variant="outlined"
            className="signature-button-1 m-2"
            onClick={() => handleSubmitClick(sigPadRef1,"engineerTechnicianSignature")}
            endIcon={<DriveFileRenameOutlineIcon />}
          >
           {formData.engineerTechnicianSignature ?  `İmza Düzenle`:`İmza Ekle`}
          </Button>{" "}
        </div>
      </div>
      <div className={`signatureFn-canvas-container col-4`}>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            display: "flex",
          }}
          className="d-flex align-items-center box-borders-right box-borders-bottom box-borders-left"
        >
          {formData.engineerTechnicianSignature && (
            <img
              src={formData.engineerTechnicianSignature}
              alt="Saved Signature"
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </div>
      </div>

      <div className="signatureFn-container-below-2 col-2">
        <div className="signature-label-container d-flex justify-content-center align-items-center box-borders-bottom ">
          <Button
            variant="outlined"
            className="signature-button-2 m-2"
            onClick={() => handleSubmitClick(sigPadRef2,"customerSignature")}
            endIcon={<DriveFileRenameOutlineIcon />}
          >
           {formData.customerSignature ?  `İmza Düzenle`:`İmza Ekle`}
          </Button>
        </div>
      </div>
      <div className="signatureFn-canvas-container col-4">
        <div
          style={{ width: "auto", height: "100%", position: "relative" }}
          className={`d-flex align-items-center box-borders-right box-borders-bottom box-borders-left`}
        >
          {formData.customerSignature && (
            <img
              src={formData.customerSignature}
              alt="Saved Signature"
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </div>
      </div>
      <SignatureDialog
        openDialog={openDialog}
        handleCloseDialog={handleCloseDialog}
        sigPadRef={selectedSigPadRef}
        FormDataFn={FormDataFn}
        formDataKey={formDataKey}
      />
    </div>
  );
}
