import React, { useRef, useState } from "react";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { useVisualData } from "../../../contexts/visualDataContext/visualDataContext";

import SignatureDialog from "./signatureDialog";

export default function SignatureFn() {
  const { updateVisualData } = useVisualData();
  const sigPadRef1 = useRef(null);
  const sigPadRef2 = useRef(null);
  const { visualData } = useVisualData();

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedSigPadRef, setSelectedSigPadRef] = useState(sigPadRef1);
  const [signatureKey, setSignatureKey] = useState("");

  const handleSubmitClick = (selectedSigPadRef, key) => {
    setOpenDialog(true);
    setSelectedSigPadRef(selectedSigPadRef);
    setSignatureKey(key);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const engineerTechnicianSignature = visualData.find(
    (item) => item.name === "engineerTechnicianSignature"
  );
  const customerSignature = visualData.find(
    (item) => item.name === "customerSignature"
  );

  return (
    <div className="signatureFn-container row">
      <div className="signatureFn-container-below col-2">
        <div className="signature-label-container d-flex justify-content-center align-items-center box-borders-bottom box-borders-left">
          <button
            variant="outlined"
            className="signature-button-1 d-flex justify-content-center align-items-center p-2"
            onClick={() =>
              handleSubmitClick(sigPadRef1, "engineerTechnicianSignature")
            }
          >
            {visualData &&
            visualData.length > 0 &&
            visualData.some(
              (data) => data.name === "engineerTechnicianSignature"
            )
              ? `İmza Düzenle`
              : `İmza Ekle`}

            <DriveFileRenameOutlineIcon />
          </button>
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
          {visualData &&
            visualData.length > 0 &&
            visualData.some(
              (data) => data.name === "engineerTechnicianSignature"
            ) && (
              <img
                src={engineerTechnicianSignature?.dataURL}
                alt="Saved Signature"
                style={{ width: "100%", height: "100%" }}
              />
            )}
        </div>
      </div>

      <div className="signatureFn-container-below-2 col-2">
        <div className="signature-label-container d-flex justify-content-center align-items-center box-borders-bottom ">
          <button
            variant="outlined"
            className="signature-button-2 d-flex justify-content-center align-items-center p-2 m-2"
            onClick={() => handleSubmitClick(sigPadRef2, "customerSignature")}
          >
            {visualData &&
            visualData.length > 0 &&
            visualData.some((data) => data.name === "customerSignature")
              ? `İmza Düzenle`
              : `İmza Ekle`}
            <DriveFileRenameOutlineIcon />
          </button>
        </div>
      </div>
      <div className="signatureFn-canvas-container col-4">
        <div
          style={{ width: "auto", height: "100%", position: "relative" }}
          className={`d-flex align-items-center box-borders-right box-borders-bottom box-borders-left`}
        >
          {visualData &&
            visualData.length > 0 &&
            visualData.some((data) => data.name === "customerSignature") && (
              <img
                src={customerSignature?.dataURL}
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
        updateVisualData={updateVisualData}
        signatureKey={signatureKey}
      />
    </div>
  );
}
