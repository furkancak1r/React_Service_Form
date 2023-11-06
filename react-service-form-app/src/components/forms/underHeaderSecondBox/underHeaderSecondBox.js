import React from "react";
import "./underHeaderSecondBox.css";
import { useFormData } from "../../../contexts/formDataContext/formDataContext";

export default function UnderHeaderSecondBox() {
  const { FormData, FormDataFn } = useFormData();

  const handleInputChange = (fieldName, event) => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    FormDataFn({ ...FormData, [fieldName]: value });
  };
  
  const labelsAndInputs = [
    { id: "withinWarranty", text: "Garanti İçi" },
    { id: "outOfWarranty", text: "Garanti Dışı" },
    { id: "contractMaintenance", text: "Sözleşmeli Bakım" },
    { id: "DiscoveryDetection", text: "Keşif / Tespit" },
  ];

  const renderLabelAndInput = (item) => (
    <div key={item.id} className="box-borders-bottom">
    <div className="row">
      <div className="col-7 col-md-8">
        <div className="d-flex align-items-center">
          <label htmlFor={item.id}>{item.text}</label>
        </div>
      </div>
      <div className="col-4 col-md-4">
      <div className="first-service-technician-checkbox d-flex justify-content-center align-items-center">
        <input
          className="input-checkboxes"
          autoComplete="off"
          id={item.id}
          name={item.id}
          type="checkbox"
          onChange={(e) => handleInputChange(item.id, e)}
        />
        <label
          className="label-checkboxes text-center d-flex align-items-center"
          htmlFor={item.id}
        ></label>
      </div></div>
    </div>
    </div>
  );
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
                  {labelsAndInputs.map((item) => renderLabelAndInput(item))}
                </div>
              </div>
            </div>
          </div>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
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
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
        </div>
      </div>
      <div className="row"></div>
    </form>
  );
}
