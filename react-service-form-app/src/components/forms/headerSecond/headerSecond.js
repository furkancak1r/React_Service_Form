import React, { useState, useEffect } from "react";
import "./headerSecond.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormData } from "../../../contexts/formDataContext/formDataContext";

export default function HeaderSecond() {
  const [todaysDate, setTodaysDate] = useState("");
  const { formData, FormDataFn } = useFormData();
  const [reportNo, setReportNo] = useState("");
  const [serviceNo, setServiceNo] = useState("");

  useEffect(() => {
    const getFormattedDate = () => {
      const today = new Date();
      // Add 3 hours to the date object to account for the local time zone
      today.setHours(today.getHours() + 3);
      const day = String(today.getDate()).padStart(2, "0");
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const year = today.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;
      const isoDate = today.toISOString();
      setTodaysDate(formattedDate);
      FormDataFn({
        ...formData,
        reportDate: isoDate,
        reportNo: "1234567",
        serviceNo: "SRV1234567",
      });
    };

    setReportNo("1234567");
    setServiceNo("SRV1234567");
    getFormattedDate();
    // eslint-disable-next-line
  }, []);


  const getHeaderFirstRowClassName = () => {
    if (window.innerWidth <= 620) {
      return "header-second-first-row row d-flex justify-content-center align-items-center ";
    } else {
      return "header-second-first-row box-borders-left box-borders-bottom row d-flex justify-content-center align-items-center";
    }
  };
  const getHeaderSecondRowClassName = () => {
    if (window.innerWidth <= 620) {
      return "header-second-second-row row d-flex justify-content-center align-items-center mt-3";
    } else {
      return "header-second-second-row box-borders-left row d-flex justify-content-center align-items-center";
    }
  };
  const getReportNoContainer = () => {
    if (window.innerWidth <= 620) {
      return "report-no-container col-md-6 d-flex justify-content-center align-items-center";
    } else {
      return "report-no-container col-md-6 d-flex justify-content-center align-items-center box-borders-right";
    }
  };
  return (
    <div className="header-second-container container box-borders mt-3">
      <div className="row-container row">
        <div className="col-md-6 d-flex justify-content-center align-items-center mt-3">
          <h2 className="text-center">SERVİS RAPORU</h2>
        </div>
        <div className="col-md-6">
          <div className={getHeaderFirstRowClassName()}>
            <div className={getReportNoContainer()}>
              <h5 className="text-center">RAPOR NO: {reportNo}</h5>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <h5 className="text-center">SERVİS NO: {serviceNo}</h5>
            </div>
          </div>
          <div className={getHeaderSecondRowClassName()}>
            <h5 className="text-center">Tarih: {todaysDate}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
