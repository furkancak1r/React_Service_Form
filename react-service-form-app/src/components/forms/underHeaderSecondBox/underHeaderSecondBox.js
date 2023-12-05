import React from "react";
import "./underHeaderSecondBox.css";
import { useFormData } from "../../../contexts/formDataContext/formDataContext";
import {
  renderTimeLabelAndInput,
  renderDiscoveryLabelAndInput,
  renderTotalDistanceLabelAndInput,
  renderTechnicianNameLabels,
  renderTechnicianNameInputs,
  renderLabelAndCheckboxes,
} from "./underHeaderSecondBoxHelpers";
import {
  timeInputItemsFirstColumn,
  timeInputItemsSecondColumn,
  technicianNames,
  checkboxDatasRow1,
  checkboxDatasRow2,
  checkboxDatasRow3,
  checkboxDatasRowLastItem,
} from "./UnderHeaderSecondBoxDatas";

export default function UnderHeaderSecondBox() {
  const { formData, FormDataFn } = useFormData();

  const handleInputChange = (fieldName, event) => {
    let value;
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    } else if (event.target.type === "time") {
      const timeValue = event.target.value;
      // Create a new date object with the input time value and the current date
      const dateValue = new Date(
        new Date().setHours(timeValue.split(":")[0], timeValue.split(":")[1])
      );
      // Add 3 hours to the date object to account for the local time zone
      dateValue.setHours(dateValue.getHours() + 3);
      // Convert the date object to a string in ISO format
      value = dateValue.toISOString();
    } else {
      value =
        fieldName === "totalDistance"
          ? parseInt(event.target.value, 10)
          : event.target.value;
    }

    FormDataFn({ ...formData, [fieldName]: value });
  };

  return (
    <form className="under-header-second-box-form mt-3 mt-md-0">
      <div className="row">
        <div className="col-12">
          <div>
            <h5 className="box-borders text-center">Servis Kapsamı</h5>
          </div>
          <div className="row">
            {technicianNames.map((item) => renderTechnicianNameLabels(item))}
          </div>
          <div className="row">
            {technicianNames.map((item) =>
              renderTechnicianNameInputs(item, handleInputChange, formData)
            )}
          </div>
          <div className="row">
            {checkboxDatasRow1.map((item, index) =>
              renderLabelAndCheckboxes(item, index, handleInputChange, formData)
            )}
          </div>
          <div className="row">
            {checkboxDatasRow2.map((item, index) =>
              renderLabelAndCheckboxes(item, index, handleInputChange, formData)
            )}
          </div>
          <div className="row">
            {checkboxDatasRow3.map((item, index) =>
              renderLabelAndCheckboxes(item, index, handleInputChange, formData)
            )}
          </div>

          <div className="row">
            {checkboxDatasRowLastItem.map((item, index) =>
              renderLabelAndCheckboxes(item, index, handleInputChange, formData)
            )}
            {renderDiscoveryLabelAndInput(handleInputChange)}
          </div>
          <div className="row">
            {timeInputItemsFirstColumn.map((item, index) =>
              renderTimeLabelAndInput(item, index, handleInputChange)
            )}
          </div>
          <div className="row">
            {timeInputItemsSecondColumn.map((item, index) =>
              renderTimeLabelAndInput(item, index, handleInputChange)
            )}
          </div>

          {renderTotalDistanceLabelAndInput(handleInputChange)}
        </div>
      </div>
    </form>
  );
}
