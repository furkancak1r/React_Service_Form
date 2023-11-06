import React from "react";
import "./underHeaderSecondBox.css";
import { useFormData } from "../../../contexts/formDataContext/formDataContext";
import {
  renderLabelAndInput,
  renderTimeLabelAndInput,
} from "./underHeaderSecondBoxHelpers";
import {
  timeInputItemsFirstColumn,
  labelsAndInputs,
  timeInputItemsSecondColumn,
  labelsAndInputsSecondColumn,
} from "./UnderHeaderSecondBoxDatas";

export default function UnderHeaderSecondBox() {
  const { FormData, FormDataFn } = useFormData();

  const handleInputChange = (fieldName, event) => {
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    FormDataFn({ ...FormData, [fieldName]: value });
  };

  return (
    <form className="under-header-second-box-form">
      <div className="row">
        <div>
          <h5 className="box-borders text-center">Servis Kapsamı</h5>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="row">
            <div>
              <label
                htmlFor="firstServiceTechnician"
                className="first-service-technician box-borders-left box-borders-right box-borders-bottom text-center"
              >
                1.Servis Teknisyeni <br />
                (Ad & Soyad)
              </label>
              <div className="box-borders-left box-borders-right box-borders-bottom">
                <input
                  autoComplete="off"
                  id={"firstServiceTechnician"}
                  name={"firstServiceTechnician"}
                  type="text"
                  onChange={(e) =>
                    handleInputChange("firstServiceTechnician", e)
                  }
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div>
              <div className="first-service-technician box-borders-left box-borders-right text-left">
                <div>
                  {labelsAndInputs.map((item) =>
                    renderLabelAndInput(item, handleInputChange)
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="box-borders-left box-borders-right">
            <div>
              {timeInputItemsFirstColumn.map((item) =>
                renderTimeLabelAndInput(item, handleInputChange)
              )}
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div>
              <label
                htmlFor="secondServiceTechnician"
                className="second-service-technician box-borders-left box-borders-right box-borders-bottom text-center"
              >
                2.Servis Teknisyeni <br />
                (Ad & Soyad)
              </label>
              <div className="box-borders-left box-borders-right box-borders-bottom">
                <input
                  autoComplete="off"
                  id={"secondServiceTechnician"}
                  name={"secondServiceTechnician"}
                  type="text"
                  onChange={(e) =>
                    handleInputChange("secondServiceTechnician", e)
                  }
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div>
              <div className="first-service-technician box-borders-left box-borders-right text-left">
                <div>
                  {labelsAndInputsSecondColumn.map((item) =>
                    renderLabelAndInput(item, handleInputChange)
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row box-borders-bottom"> burada kaldın
            
            <div className="col-5 discovery-label-container">
              <label
                htmlFor="discoveryNumber"
                className="discovery-number-label box-borders-left box-borders-right text-left"
              >
                Keşif No
              </label>
            </div>
            <div className="col-7 discovery-input-container">
              <div className="box-borders-right">
              <input
                autoComplete="off"
                id="discoveryNumber"
                name="discoveryNumber"
                type="text"
                onChange={(e) => handleInputChange("discoveryNumber", e)}
                className="box-borders-left box-borders-right box-borders-bottom"
              /></div>
            </div>
          </div> */}

          <div className="box-borders-left box-borders-right">
            <div>
              {timeInputItemsSecondColumn.map((item) =>
                renderTimeLabelAndInput(item, handleInputChange)
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row"></div>
    </form>
  );
}
