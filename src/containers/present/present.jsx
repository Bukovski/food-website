import React from "react";
import { DividerBg } from "../../components/static";
import { BigWhite } from "../../components/buttons";


function Present(props) {
  return (
    <div className="present">
      <div className="container">
        <div className="present__wrap">
          <h1 className="present__title">the right ingredients for the right food</h1>
          <DividerBg />
          {/* present__divider */}
          <div className="present__button-wrap">
            <BigWhite to="reservations">
              BOOK A TABLE
            </BigWhite>
            
            <BigWhite to="menu">
              SEE THE MENU
            </BigWhite>
          </div>
          {/* present__button-wrap */}
        </div>
      </div>
    </div>
  )
}


export default Present;
