import React from "react";
import Description from "./Description";
import ForecastInfo from "./ForecastInfo";
import MainCityTemp from "./MainCityTemp";

import Form from "./Form";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div class="card d-flex justify-content-center weather-box">
        <div class="card-body">
          <div>
            <Form />
          </div>
        </div>
        <div class="container">
          <MainCityTemp />
          <ForecastInfo />
          <Description />
        </div>
      </div>
    </div>
  );
}
