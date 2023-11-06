import React from "react";
import "./underHeaderSecondBox.css";
import { useFormData } from "../../../contexts/formDataContext/formDataContext";

export default function UnderHeaderSecondBox() {
  const { FormData, FormDataFn } = useFormData();

  const handleInputChange = (fieldName, event) => {
    const value = event.target.value;
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
              <div className="first-service-technician box-borders-left box-borders-right box-borders-bottom text-left">
                <div className="row">
                  <div className="col-8">
                    <div>
                      <label htmlFor="withinWarranty">Garanti içi</label>
                    </div>
                  </div>
                  <div className="col-4 d-flex justify-content-center align-items-center">
                    <input
                      autoComplete="off"
                      id={"withinWarranty"}
                      name={"withinWarranty"}
                      type="checkbox"
                      onChange={(e) => handleInputChange("withinWarranty", e)}
                    />
                  </div>
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
