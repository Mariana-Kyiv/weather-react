import React from "react";
import "./styles.css";

export default function ForecastImg() {
  return (
    <div class="row row-cols-5 d-flex justify-content-between">
      <div>
        <img src="./media/04d.png" alt="cloudy"/>
      </div>
      <div>
        <img src="./media/09n.png" alt="rainy" />
      </div>
      <div>
        <img src="./media/01d.png" alt="sunny" />
      </div>
      <div>
        <img src="./media/04d.png" alt="cloudy" />
      </div>
      <div>
        <img src="./media/01d.png" alt="sunny" />
      </div>
    </div>
  );
}
