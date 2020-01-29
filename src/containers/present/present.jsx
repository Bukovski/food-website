import React from "react";
import { DividerBg } from "../../components/static";
import { ScrollWhiteButton } from "../../components/buttons";


function Present(props) {
  return (
    <div className="present">
      <div className="container">
        <div className="present__wrap">
          <h1 className="present__title">the right ingredients for the right food</h1>
          <DividerBg />
          {/* present__divider */}
          <div className="present__button-wrap">
            <ScrollWhiteButton to="reservations">
              BOOK A TABLE
            </ScrollWhiteButton>
            
            <ScrollWhiteButton to="menu">
              SEE THE MENU
            </ScrollWhiteButton>
          </div>
          {/* present__button-wrap */}
        </div>
      </div>
    </div>
  )
}


export default Present;
