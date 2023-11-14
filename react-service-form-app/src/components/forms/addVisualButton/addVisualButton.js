import React from "react";
import "./addVisualButton.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useVisualData } from "../../../contexts/visualDataContext/visualDataContext";

export default function AddVisualButton() {
  const { visualData, updateVisualData } = useVisualData();
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const fileToDataURL = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          resolve(event.target.result);
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsDataURL(file);
      });
    };

    const promises = files.map((file) => fileToDataURL(file));

    Promise.all(promises).then((dataURLs) => {
      const updatedVisualData = files.map((file, index) => ({
        name: file.name,
        type: file.type,
        size: file.size,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
        preview: URL.createObjectURL(file),
        extension: file.name.split(".").pop(),
        isUploaded: false,
        isProcessing: false,
        dataURL: dataURLs[index],
      }));

      updateVisualData([...visualData, ...updatedVisualData]);
    });
  };

  return (
    <div>
      <Button
        className="add-visual-button"
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Görsel Yükle
        <VisuallyHiddenInput
          type="file"
          accept="image/*,video/*"
          onChange={handleFileChange}
          multiple
        />
      </Button>
    </div>
  );
}
