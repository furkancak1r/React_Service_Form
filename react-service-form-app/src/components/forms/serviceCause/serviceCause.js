import React from "react";
import "./serviceCause.css";
import {
  checkboxDatasServiceCause1,
  checkboxDatasServiceCause2,
  checkboxDatasServiceCause3,
  checkboxDatasServiceCause4,
  checkboxDatasServiceCause5,
  checkboxDatasServiceCause6,
  checkboxDatasServiceCause7,
} from "./serviceCauseDatas";
import {
  renderLabelAndCheckboxesServiceCause,
  renderAnotherLabelAndInput,
} from "./serviceCauseHelpers";
import { useFormData } from "../../../contexts/formDataContext/formDataContext";

export default function ServiceCause() {
  const { formData, FormDataFn } = useFormData();

  const handleInputChange = (fieldName, event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    FormDataFn({ ...formData, [fieldName]: value });
  };

  return (
    <div className="service-cause-container">
      <div className="row">
        <div className="service-cause-header-container">
          <h5 className="text-center box-borders">Servis Nedeni</h5>
        </div>
      </div>
      <div className="row">
        <div>
          <div className="box-borders-left box-borders-right box-borders-bottom">
            <div className="service-cause-checkboxes-first-row row">
              {[
                checkboxDatasServiceCause1,
                checkboxDatasServiceCause2,
                checkboxDatasServiceCause3,
                checkboxDatasServiceCause4,
              ].map((checkboxData, index) => (
                <div
                  key={index}
                  className="service-cause-checkbox-container col-3"
                >
                  {renderLabelAndCheckboxesServiceCause(
                    checkboxData,
                    handleInputChange
                  )}
                </div>
              ))}
            </div>
            <div className="service-cause-checkboxes-second-row row">
              {[
                checkboxDatasServiceCause5,
                checkboxDatasServiceCause6,
                checkboxDatasServiceCause7,
              ].map((checkboxData, index) => (
                <div
                  key={index}
                  className="service-cause-checkbox-container col-3"
                >
                  {renderLabelAndCheckboxesServiceCause(
                    checkboxData,
                    handleInputChange
                  )}
                </div>
              ))}
              <div className="service-cause-input-container col-3">
                {renderAnotherLabelAndInput(handleInputChange)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
