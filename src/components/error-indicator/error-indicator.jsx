import React from "react";


export default function ErrorIndicator() {
  return (<div className="error-indicator">
    <div className="container">
      <div className="error-indicator__wrapper">
        <div className="error-indicator__center">
          <h3 className="error-indicator__title">Something went wrong</h3>
          <p className="error-indicator__text">We apologize for the inconvenience.</p>
          <p className="error-indicator__text">We'll fix it all soon. See you later</p>
        </div>
      </div>
    </div>
  </div>)
}
