export const renderLabelAndCheckboxesServiceCause = (
  item,
  handleInputChange
) => {
  const { id, text } = item;

  return (
    <div className={`row checkbox-container box-borders-bottom}`}>
      <div className="col-5 col-md-7 d-flex align-items-center">
        <label className="text-left" htmlFor={id}>
          {text}
        </label>
      </div>
      <div className="col-8 col-md-5 d-flex justify-content-center align-items-center`">
        <input
          className="input-checkboxes"
          autoComplete="off"
          id={id}
          type="checkbox"
          onChange={(e) => handleInputChange(id, e)}
        />
        <label
          className="label-checkboxes text-center d-flex align-items-center"
          htmlFor={id}
        ></label>
      </div>
    </div>
  );
};


export const renderAnotherLabelAndInput = (handleInputChange) => {
    return (
      <div className="row render-another-label-and-input">
        <div className="col-1 col-md-3 another-container-below">
          <div className="d-flex align-items-center">
            <div className="another-label-container">
              <label
                htmlFor="another"
                className="another-label text-center"
              >
                Diğer
              </label>
            </div>
          </div>
        </div>
        <div className="col-11 col-md-9 another-input-container-all">
          <div className="d-flex justify-content-center another-input-container-above align-items-center box-borders m-2">
            <div className="another-input-container">
              <input
                autoComplete="off"
                id="another"
                name="another"
                type="text"
                onChange={(e) => handleInputChange("another", e)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };