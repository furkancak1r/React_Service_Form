export const renderTimeLabelAndInput = (item, index, handleInputChange) => {
  const { id, text } = item;

  return (
    <div
      key={id}
      className={`col-6 ${index === 0 ? `checkbox-left` : `checkbox-right`}  `}
    >
      <div className="row">
        <div className="col-7 d-flex align-items-center time-label-container-above">
          <div
            className={`time-label-container box-borders-left box-borders-bottom box-borders-right`}
          >
            <label htmlFor={id}>{text}</label>
          </div>
        </div>
        <div className="col-5 d-flex justify-content-center align-items-center time-input-container-above">
          <div
            className={`d-flex justify-content-center align-items-center time-input-container-middle box-borders-bottom ${
              index === 1 ? `box-borders-right` : ``
            }`}
          >
            <div className={`time-input-container `}>
              <input
                className="text-center departureTime time-input"
                type="time"
                id={id}
                onChange={(e) => handleInputChange(id, e)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const renderDiscoveryLabelAndInput = (handleInputChange) => {
  return (
    <div className="col-6 checkbox-left">
      <div className="row discovery-number-container  box-borders-bottom box-borders-left box-borders-right">
        <div className="col-5 d-flex align-items-center">
          <div>
            <label
              htmlFor="discoveryNumber"
              className="discovery-number-label text-left"
            >
              Keşif No
            </label>
          </div>
        </div>
        <div className="col-7 d-flex justify-content-center align-items-center box-borders-left p-0">
          <div>
            <input
              autoComplete="off"
              id="discoveryNumber"
              name="discoveryNumber"
              type="text"
              onChange={(e) => handleInputChange("discoveryNumber", e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const renderTechnicianNameLabels = (item) => {
  const { id, text } = item;

  return (
    <div key={id} id={id + "-label-container"} className="col-6">
      <div
        className={`technician-names d-flex justify-content-center align-items-center box-borders-bottom  ${
          id === "firstTechnician"
            ? "box-borders-left"
            : "box-borders-left box-borders-right"
        }`}
      >
        <label htmlFor={id} className="text-center">
          {text} <br />
          {id !== "servicePoint" ? "Ad & Soyad" : ""}
        </label>
      </div>
    </div>
  );
};

export const renderTechnicianNameInputs = (
  item,
  handleInputChange,
  formData
) => {
  const { id } = item;

  return (
    <div key={id} id={id + "-input-container"} className="col-6">
      <div
        className={`technician-names-input box-borders-bottom  ${
          id === "firstTechnician"
            ? "box-borders-left"
            : "box-borders-left box-borders-right"
        }`}
      >
        <input
          autoComplete="off"
          id={id}
          type="text"
          onChange={(e) => handleInputChange(id, e)}
          value={formData[id] || ""}
          readOnly={id === "servicePoint" ? true : false}
        />
      </div>
    </div>
  );
};

export const renderLabelAndCheckboxes = (
  item,
  index,
  handleInputChange,
  formData
) => {
  const { id, text } = item;
  const checkboxClass = index === 0 ? "checkbox-left" : "checkbox-right";

  const isDisabledInput = id === "withinWarranty" || id === "outOfWarranty";
  const isDisabledLabel = id === "withinWarranty" || id === "outOfWarranty";

  return (
    <div
      key={id}
      className={`col-6 ${checkboxClass} d-flex justify-content-center align-items-center`}
    >
      <div
        className={`row checkbox-container box-borders-bottom ${
          index === 0
            ? `box-borders-left`
            : `box-borders-left box-borders-right`
        }`}
      >
        <div className="col-7 d-flex align-items-center">
          <label className="text-left" htmlFor={id}>
            {text}
          </label>
        </div>

        <div className="col-5 d-flex justify-content-center align-items-center`">
          <input
            className="input-checkboxes"
            autoComplete="off"
            id={id}
            name={id}
            type="checkbox"
            onChange={(e) => handleInputChange(id, e)}
            disabled={isDisabledInput}
            checked={formData[id]}
          />
          <label
            className="label-checkboxes text-center d-flex align-items-center"
            htmlFor={id}
            disabled={isDisabledLabel}
          ></label>
        </div>
      </div>
    </div>
  );
};

export const renderTotalDistanceLabelAndInput = (handleInputChange) => {
  return (
    <div className="row">
      <div className="col-6 total-distance-container-below ">
        <div className="d-flex align-items-center box-borders-bottom box-borders-left">
          <div className="total-distance-label-container">
            <label
              htmlFor="totalDistance"
              className="total-distance-label text-left"
            >
              Toplam Yol (KM)
            </label>
          </div>
        </div>
      </div>
      <div className="col-6 box-borders-left total-distance-input-container-all">
        <div className="d-flex justify-content-center total-distance-input-container-above align-items-center box-borders-right box-borders-bottom">
          <div className="total-distance-input-container">
            <input
              autoComplete="off"
              id="totalDistance"
              name="totalDistance"
              type="number"
              onChange={(e) => handleInputChange("totalDistance", e)}
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/\D/g, ""))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};