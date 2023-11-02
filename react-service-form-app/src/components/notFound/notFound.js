import React from "react";
import "./notFound.css";

export default function NotFound() {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            {" "}
            {/* Center align content horizontally */}
            <div className="col-sm-12 col-sm-offset-1 d-flex flex-column  justify-content-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>
              <div className="contant_box_404">
                <h3 className="h2">Kaybolmuşsun gibi görünüyor</h3>
                <p>Aradığınız sayfaya ulaşılamıyor!</p>
                <a href="/" className="link_404">
                  Anasayfa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
