import React from "react";

export default function ListHeader() {
  return (
    <div className="row">
      <div className="list-header-1 col-2">
        <div className="list-header-1-under box-borders-top box-borders-left box-borders-bottom d-flex justify-content-center align-items-center">
          <h5 className="text-center">Sıra No</h5>
        </div>
      </div>
      <div className="list-header-2 col-4">
        <div className="list-header-2-under box-borders-top box-borders-left box-borders-bottom d-flex justify-content-center align-items-center">
          <h5 className="text-center">Açıklama / Kullanılan Malzeme</h5>
        </div>
      </div>
      <div className="list-header-3 col-2">
        <div className="list-header-3-under box-borders-top box-borders-left box-borders-bottom d-flex justify-content-center align-items-center">
          <h5 className="text-center">Miktar</h5>
        </div>
      </div>
      <div className="list-header-4 col-2">
        <div className="list-header-4-under box-borders-top box-borders-left box-borders-bottom d-flex justify-content-center align-items-center">
          <h5 className="text-center">Birim Fiyat</h5>
        </div>
      </div>
      <div className="list-header-5 col-2">
        <div className="list-header-5-under box-borders-top box-borders-left box-borders-bottom box-borders-right d-flex justify-content-center align-items-center">
          <h5 className="text-center">Toplam</h5>
        </div>
      </div>
    </div>
  );
}
