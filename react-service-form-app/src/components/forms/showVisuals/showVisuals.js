import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import "./showVisuals.css";
import { useVisualData } from "../../../contexts/visualDataContext/visualDataContext";

export default function ShowVisuals() {
  const { visualData, updateVisualData } = useVisualData();
  const [selectedVisual, setSelectedVisual] = useState(null);
  const [visualDataNew, setVisualDataNew] = useState([]);

  const handleDelete = (visual) => {
    // silinmesi istenen görsel nesnesini parametre olarak alır
    const updatedVisualData = visualData.filter((item) => item !== visual); // silinmesi istenen görsel nesnesi hariç tüm öğeleri içeren yeni bir dizi oluşturur
    updateVisualData(updatedVisualData); // yeni diziyi görsel veriler olarak günceller
  };

  const handleOpenModal = (visual) => {
    setSelectedVisual(visual);
  };

  const handleCloseModal = () => {
    setSelectedVisual(null);
  };
  useEffect(() => {
    setVisualDataNew(
      visualData.filter(
        (item) =>
          item.name !== "engineerTechnicianSignature" &&
          item.name !== "customerSignature"
      )
    );
  }, [visualData]);
  return (
    <div className="row visual-cards-container d-flex justify-content-start mt-3">
      {visualDataNew.map((visual, index) => (
        <div
          className="visual-cards-container-below col-12 col-md-3 mt-3"
          key={index}
        >
          <Card sx={{ maxWidth: 345 }} className="visual-card">
            <CardMedia
              component={visual.type.startsWith("video/") ? "video" : "img"}
              alt={visual.name}
              height="140"
              image={visual.preview}
              controls={visual.type.startsWith("video/") ? true : false}
              onClick={() => {
                if (visual.type.startsWith("image/")) {
                  handleOpenModal(visual);
                }
              }}
            />
            <CardContent>
              <Typography
                className="text-center"
                gutterBottom
                variant="label"
                component="div"
              >
                {visual.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                className="delete-button"
                onClick={() => handleDelete(visual)}
              >
                Sil
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
      <Dialog
        disableScrollLock
        open={Boolean(selectedVisual)}
        onClose={handleCloseModal}
      >
        {selectedVisual && (
          <img
            className="img-fluid"
            src={selectedVisual.preview}
            alt={selectedVisual.name}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            onClick={handleCloseModal}
          />
        )}
      </Dialog>
    </div>
  );
}
