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
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    FormDataFn({ ...formData, [fieldName]: value });
  };

  

  return (
    <form className="under-header-second-box-form">
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
              renderTechnicianNameInputs(item, handleInputChange,formData)
            )}
          </div>
          <div className="row">
            {checkboxDatasRow1.map((item, index) =>
              renderLabelAndCheckboxes(item, index, handleInputChange,formData)
            )}
          </div>
          <div className="row">
            {checkboxDatasRow2.map((item, index) =>
              renderLabelAndCheckboxes(item, index, handleInputChange,formData)
            )}
          </div>
          <div className="row">
            {checkboxDatasRow3.map((item, index) =>
              renderLabelAndCheckboxes(item, index, handleInputChange,formData)
            )}
          </div>

          <div className="row">
            {checkboxDatasRowLastItem.map((item, index) =>
              renderLabelAndCheckboxes(item, index, handleInputChange,formData)
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
