import React from "react";
import { useListItemData } from "../../../contexts/listItemsContext/listItemsContext";

export default function ListItem({ lineNumber }) {
  const { listItemData, updateListItemData } = useListItemData();

  const handleInputChange = (fieldName, event) => {
    let value = event.target.value;
    const currentData = listItemData[lineNumber - 1];
    let updatedData = {
      ...currentData,
      [fieldName]: value,
      lineNumber: lineNumber,
    };

    if (!updatedData.unit) {
      updatedData = {
        ...updatedData,
        unit: "PIECE", 
      };
    }

    if (!updatedData.currency) {
      updatedData = {
        ...updatedData,
        currency: "TL",
      };
    }

    if (fieldName === "amount" || fieldName === "unitPrice") {
      const amount = updatedData.amount || 0;
      const unitPrice = updatedData.unitPrice || 0;
      updatedData = {
        ...updatedData,
        total: amount * unitPrice,
      };
    }

    const totalInput = document.getElementById(`total-${lineNumber}`);
    if (totalInput) {
      totalInput.value = updatedData.total || 0;
    }

    updateListItemData(lineNumber, updatedData);
  };

  const currencies = [
    { value: "TL", label: "TL" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "GBP", label: "GBP" },
    { value: "JPY", label: "JPY" },
    { value: "CAD", label: "CAD" },
  ];
  const units = [
    { value: "PIECE", label: "ADET" },
    { value: "KG", label: "KG" },
    { value: "METER", label: "M" },
    { value: "CMMETER", label: "CM" },
    { value: "MMMETER", label: "MM" },
  ];

  return (
    <div className="row">
      <div className="list-item-first col-1">
        <div className="line-number-container-above box-borders-left">
          <div className="line-number-container d-flex justify-content-center align-items-center box-borders-bottom">
            <h6>{lineNumber}</h6>
          </div>
        </div>
      </div>
      <div className="list-item-second col-3">
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
      <div className="list-item-third col-1">
        <div className="input-above-3 d-flex justify-content-center box-borders-left box-borders-bottom">
          <input
            autoComplete="off"
            id={`amount-${lineNumber}`}
            name="amount"
            type="number"
            className="text-center"
            onChange={(e) => handleInputChange("amount", e)}
          />
        </div>
      </div>
      <div className="list-item-fourth col-2">
        <div className="input-above-4 d-flex justify-content-center box-borders-left box-borders-bottom">
          <select
            id={`unit-${lineNumber}`}
            name="unit"
            className="unit-select m-1"
            onChange={(e) => handleInputChange("unit", e)}
          >
            {units.map((unit) => (
              <option
                className="unit-option"
                key={unit.value}
                value={unit.value}
              >
                {unit.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="list-item-fifth col-1">
        <div className="input-above-5 d-flex justify-content-center box-borders-left box-borders-bottom">
          <input
            autoComplete="off"
            id={`unitPrice-${lineNumber}`}
            name="unitPrice"
            type="number"
            className="text-center"
            onChange={(e) => handleInputChange("unitPrice", e)}
          />
        </div>
      </div>
      <div className="list-item-sixth col-2">
        <div className="input-above-6 d-flex justify-content-center box-borders-left box-borders-bottom">
          <select
            id={`currency-${lineNumber}`}
            name="currency"
            className="currency-select m-1"
            onChange={(e) => handleInputChange("currency", e)}
          >
            {currencies.map((currency) => (
              <option
                className="currency-option"
                key={currency.value}
                value={currency.value}
              >
                {currency.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="list-item-seventh col-2">
        <div className="input-above-7 d-flex justify-content-center box-borders-left box-borders-right box-borders-bottom">
          <input
            autoComplete="off"
            id={`total-${lineNumber}`}
            name="total"
            type="number"
            className="text-center"
            onChange={(e) => handleInputChange("total", e)}
            disabled={true}
          />
        </div>
      </div>
    </div>
  );
}
