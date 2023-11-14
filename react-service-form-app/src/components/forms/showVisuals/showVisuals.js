import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./showVisuals.css";
import { useVisualData } from "../../../contexts/visualDataContext/visualDataContext";

export default function ShowVisuals() {
  const { visualData, updateVisualData } = useVisualData();

  const handleDelete = (index) => {
    const updatedVisualData = [...visualData];
    updatedVisualData.splice(index, 1);
    updateVisualData(updatedVisualData);
  };

  return (
    <div className="row visual-cards-container d-flex justify-content-center  mt-3">
      {visualData.map((visual, index) => (
        <div className="visual-cards-container-below col-12 col-md-3" key={index}>
          <Card sx={{ maxWidth: 345 }} className="visual-card">
            <CardMedia
              component={visual.type.startsWith("video/") ? "video" : "img"}
              alt={visual.name}
              height="140"
              image={visual.preview}
              controls={visual.type.startsWith("video/") ? true : false}
            />
            <CardContent>
              <Typography className="text-center" gutterBottom variant="label" component="div">
                {visual.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" className="delete-button" onClick={() => handleDelete(index)}>
                Sil
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}