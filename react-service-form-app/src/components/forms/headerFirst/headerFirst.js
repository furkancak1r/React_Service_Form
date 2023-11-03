import React from "react";
import "./headerFirst.css";

export default function HeaderFirst() {
  return (
    <div className="header-first-container container box-borders">
      <div className="header-first-row-1 d-flex justify-content-center row">
        <img className="header-first-logo" src="prosoLogo.png" alt="Proso Logo" />
      </div>
      <div className="header-first-row-2 row d-flex justify-content-center align-items-center ">
        <p className="header-first-info text-center">
          PROSO SOĞUTMA VE MARKET EKİPMANLARI SATIŞ PAZ. A.Ş. Osmangazi Mah.
          <br />
          Kanuni Sk. No:7 41700 Darıca - Kocaeli -TÜRKİYE
          <br />
          Tel : 0262 658 01 31 - 32 / Fax: 0262 658 01 33
          <br />
          Arıza Nr 1 : 0545 828 44 57 / Arıza No 2 : 0549 784 45 89
          <br />
          servis@prosogutma.com / www.prosogutma.com
        </p>
      </div>
    </div>

    // <div className="header-first-container d-flex flex-column align-items-center box-borders">
    //   <div className="p-2">
    //     <img
    //       className="header-first-logo"
    //       src="prosoLogo.png"
    //       alt="Proso Logo"
    //     />
    //   </div>
    //   <p className="header-first-info">
    //     PROSO SOĞUTMA VE MARKET EKİPMANLARI SATIŞ PAZ. A.Ş. Osmangazi Mah.
    //     <br />
    //     Kanuni Sk. No:7 41700 Darıca - Kocaeli -TÜRKİYE
    //     <br />
    //     Tel : 0262 658 01 31 - 32 / Fax: 0262 658 01 33
    //     <br />
    //     Arıza Nr 1 : 0545 828 44 57 / Arıza No 2 : 0549 784 45 89
    //     <br />
    //     servis@prosogutma.com / www.prosogutma.com
    //   </p>
    // </div>
  );
}
