import React, { useState } from "react";
import "./list.css";
import ListHeader from "./listHeader";
import ListItem from "./listItem";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function List() {
  const [rowCount, setRowCount] = useState(3); // Başlangıçta 3 satır var

  const handleAddRow = () => {
    setRowCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="list-container">
      <ListHeader />
      {[...Array(rowCount)].map((_, index) => (
        <ListItem key={index + 1} lineNumber={index + 1} />
      ))}
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="add-row-container d-flex justify-content-center align-items-center box-borders-bottom box-borders-left box-borders-right">
            <h6 className="text-left">
              Satır Ekle
            </h6>
            <AddCircleOutlineIcon
              onClick={handleAddRow}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
