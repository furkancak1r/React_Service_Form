import React, { useState } from "react";
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

  const handleDelete = (index) => {
    const updatedVisualData = [...visualData];
    updatedVisualData.splice(index, 1);
    updateVisualData(updatedVisualData);
  };

  const handleOpenModal = (visual) => {
    setSelectedVisual(visual);
  };

  const handleCloseModal = () => {
    setSelectedVisual(null);
  };

  return (
    <div className="row visual-cards-container d-flex justify-content-start mt-3">
      {visualData.map((visual, index) => (
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
                onClick={() => handleDelete(index)}
              >
                Sil
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
      <Dialog open={Boolean(selectedVisual)} onClose={handleCloseModal}>
        {selectedVisual && (
          <img
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
