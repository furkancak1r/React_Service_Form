import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { useFormData } from "../../../contexts/formDataContext/formDataContext";
import UndoIcon from "@mui/icons-material/Undo";

export default function SignatureFn() {
  const sigPadRef1 = useRef(null);
  const sigPadRef2 = useRef(null);

  const { FormData, FormDataFn } = useFormData();

  const onSignatureChange = (sigPadRef, formDataKey) => {
    if (sigPadRef && sigPadRef.current) {
      const signatureData = sigPadRef.current
        .getTrimmedCanvas()
        .toDataURL("image/png");
      FormDataFn({
        ...FormData,
        [formDataKey]: signatureData,
      });
    }
  };

  const clearCanvas = (sigPadRef, formDataKey) => {
    if (FormData[formDataKey] && FormData[formDataKey].length > 2) {
      sigPadRef.current.clear();
      FormDataFn({
        ...FormData,
        [formDataKey]: "",
      });
    }
  };

  return (
    <div className="signatureFn-container row">
      <div className="signatureFn-container-below col-2">
        <div className="signature-label-container d-flex align-items-center box-borders-bottom box-borders-left">
          <h5 className="text-left">İmza</h5>
        </div>
      </div>
      <div className="signatureFn-canvas-container col-4">
        <div
          style={{ width: "auto", position: "relative" }}
          className="d-flex align-items-center box-borders-right box-borders-bottom box-borders-left"
        >
          <SignatureCanvas
            penColor="black"
            backgroundColor="whitesmoke"
            ref={sigPadRef1}
            canvasProps={{ className: "sigCanvas" }}
            onEnd={() =>
              onSignatureChange(
                sigPadRef1,
                "signatureForProsoEngineerTechnician"
              )
            }
            style={{ position: "relative" }}
          />
          {FormData["signatureForProsoEngineerTechnician"] &&
            FormData["signatureForProsoEngineerTechnician"].length > 2 && (
              <UndoIcon
                id="UndoIcon1"
                onClick={() =>
                  clearCanvas(sigPadRef1, "signatureForProsoEngineerTechnician")
                }
              />
            )}
        </div>
      </div>

      <div className="signatureFn-container-below-2 col-2">
        <div className="signature-label-container d-flex align-items-center box-borders-bottom ">
          <h5 className="text-left">İmza</h5>
        </div>
      </div>
      <div className="signatureFn-canvas-container col-4">
        <div
          style={{ width: "auto", position: "relative" }}
          className="d-flex align-items-center box-borders-right box-borders-bottom box-borders-left"
        >
          <SignatureCanvas
            penColor="black"
            backgroundColor="whitesmoke"
            ref={sigPadRef2}
            canvasProps={{ className: "sigCanvas" }}
            onEnd={() => onSignatureChange(sigPadRef2, "signatureForCustomer")}
            style={{ position: "relative" }}
          />
          {FormData["signatureForCustomer"] &&
            FormData["signatureForCustomer"].length > 2 && (
              <UndoIcon
                id="UndoIcon2"
                onClick={() => clearCanvas(sigPadRef2, "signatureForCustomer")}
              />
            )}
        </div>
      </div>
    </div>
  );
}