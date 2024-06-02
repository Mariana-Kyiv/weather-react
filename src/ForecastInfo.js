import React from "react";
import "./styles.css";

export default function ForecastInfo() {
  return (
    <div className="ForecasteInfo">
      <div class="d-flex justify-content-between mt-4">
        <div class="row">
          <div class="col-2 text-center">
            <div class="forecast-day">Mon</div>
            <div class="forecast-icon d-flex justify-content-center">
              <img src="./media/01n.png" class="forecast-icon w-75" alt="weather-icon" />
            </div>
            <div class="forecast-temp d-flex justify-content-between">
              <span class="temp-1">16</span>
              <span class="temp-2">5</span>
            </div>
          </div>

          <div class="col-2 text-center">
            <div class="forecast-day">Mon</div>
            <div class="forecast-icon d-flex justify-content-center">
              <img src="./media/01d.png" class="forecast-icon w-75" alt="weather-icon"/>
            </div>
            <div class="forecast-temp d-flex justify-content-between">
              <span class="temp-1">16</span>
              <span class="temp-2">5</span>
            </div>
          </div>

          <div class="col-2 text-center">
            <div class="forecast-day">Mon</div>
            <div class="forecast-icon d-flex justify-content-center">
              <img src="./media/01d.png" class="forecast-icon w-75"alt="weather-icon"/>
            </div>
            <div class="forecast-temp d-flex justify-content-between">
              <span class="temp-1">16</span>
              <span class="temp-2">5</span>
            </div>
          </div>

          <div class="col-2 text-center">
            <div class="forecast-day">Mon</div>
            <div class="forecast-icon d-flex justify-content-center">
              <img src="./media/01d.png" class="forecast-icon w-75" alt="weather-icon" />
            </div>
            <div class="forecast-temp d-flex justify-content-between">
              <span class="temp-1">16</span>
              <span class="temp-2">5</span>
            </div>
          </div>

          <div class="col-2 text-center">
            <div class="forecast-day">Mon</div>
            <div class="forecast-icon d-flex justify-content-center">
              <img src="./media/01d.png" class="forecast-icon w-75" alt="weather-icon"/>
            </div>
            <div class="forecast-temp d-flex justify-content-between">
              <span class="temp-1">16</span>
              <span class="temp-2">5</span>
            </div>
          </div>

          <div class="col-2 text-center">
            <div class="forecast-day">Mon</div>
            <div class="forecast-icon d-flex justify-content-center">
              <img src="./media/01d.png" class="forecast-icon w-75" alt="weather-icon"/>
            </div>
            <div class="forecast-temp d-flex justify-content-between">
              <span class="temp-1">16</span>
              <span class="temp-2">5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
