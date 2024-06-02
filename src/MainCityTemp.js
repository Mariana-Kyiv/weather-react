import React from "react";
import "./styles.css";

export default function MainCityTemp() {
  return (
    <div className="MainCityTemp">
      <div class="d-flex justify-content-between mt-4">
        <div>
          <h1>Kyiv</h1>
          <h3>Sat, 18, November</h3>
          <div class="mt-2">Sunny</div>
          Humidity:
          <span class="nice">
            20
          </span>
          <span class="nice">%</span>, Wind:
          <span class="nice">
            3
          </span>
          <span class="nice">m/s</span>
        </div>
        <div class="d-flex justify-content-between">
          <img
            class="d-flex justify-content-top h-75"
            src="./media/04d.png"
            alt="cloudy"
          />
          <div class="temperature">
            8
          </div>
          <div class="celsium">°C</div>
        </div>
      </div>
    </div>
  );
}
