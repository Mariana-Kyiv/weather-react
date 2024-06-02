import React from "react";
import "./styles.css";

export default function Form() {
    
  return (
    <div className="form">
      <form id="search-form">
        <input
          type="search"
          id="city-input"
          placeholder="Enter a city..."
          required
          class="search-form-input"
        />
        <input type="submit" value="Search" class="search-button" />
      </form>
    </div>
  );
}
