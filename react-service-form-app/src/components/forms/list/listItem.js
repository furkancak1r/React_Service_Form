import React from "react";
import { useListItemData } from "../../../contexts/listItemsContext/listItemsContext";

export default function ListItem({ lineNumber }) {
  const { listItemData, updateListItemData } = useListItemData();

  const handleInputChange = (fieldName, event) => {
    let value = event.target.value;
    updateListItemData(lineNumber, {
      ...listItemData[lineNumber - 1],
      [fieldName]: value,
    });
  };
  
  return (
    <div className="row">
      <div className="list-item-first col-2">
        <div className="line-number-container-above box-borders-left">
          <div className="line-number-container d-flex justify-content-center align-items-center box-borders-bottom">
            <h6>{lineNumber}</h6>
          </div>
        </div>
      </div>
      <div className="list-item-second col-4">
        <div className="input-above-2 d-flex justify-content-center box-borders-left box-borders-bottom">
          <textarea
            autoComplete="off"
            id={`descriptionMaterialUsed-${lineNumber}`}
            name="descriptionMaterialUsed"
            type="text"
            onChange={(e) => handleInputChange("descriptionMaterialUsed", e)}
          />
        </div>
      </div>
      <div className="list-item-third col-2">
        <div className="input-above-3 d-flex justify-content-center box-borders-left box-borders-bottom">
          <input
            autoComplete="off"
            id={`amount-${lineNumber}`}
            name="amount"
            type="text"
            onChange={(e) => handleInputChange("amount", e)}
          />
        </div>
      </div>
      <div className="list-item-fourth col-2">
        <div className="input-above-4 d-flex justify-content-center box-borders-left box-borders-bottom">
          <input
            autoComplete="off"
            id={`unitPrice-${lineNumber}`}
            name="unitPrice"
            type="text"
            onChange={(e) => handleInputChange("unitPrice", e)}
          />
        </div>
      </div>
      <div className="list-item-fifth col-2">
        <div className="input-above-5 d-flex justify-content-center box-borders-left box-borders-right box-borders-bottom">
          <input
            autoComplete="off"
            id={`total-${lineNumber}`}
            name="total"
            type="text"
            onChange={(e) => handleInputChange("total", e)}
          />
        </div>
      </div>
    </div>
  );
}
