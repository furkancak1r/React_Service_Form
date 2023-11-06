export const renderLabelAndInput = (item,handleInputChange) => (
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
        </div>
      </div>
    </div>
  </div>
);

export const renderTimeLabelAndInput = (item,handleInputChange) => {
  const { id, name, label } = item;

  return (
    <div key={id} className="box-borders-bottom">
      <div className="row">
        <div className="col-5 col-md-7">
          <label htmlFor={id}>{label}</label>
        </div>
        <div className="col-7 col-md-5 d-flex justify-content-center align-items-center">
          <div className="general-time-input-container box-borders">
            <input
              className="text-center departureTime general-time-input"
              type="time"
              id={id}
              name={name}
              onChange={(e) => handleInputChange(name, e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
