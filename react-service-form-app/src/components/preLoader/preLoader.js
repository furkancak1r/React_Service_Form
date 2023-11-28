import React from "react";
import "./preLoader.css";
import { usePreLoader } from "../../contexts/preLoaderContext/preLoaderContext";

export default function PreLoader() {
  const { preLoaderData } = usePreLoader();

  return preLoaderData ? (
    <div id="preloader">
      <div id="loader"></div>
    </div>
  ) : null;
}
