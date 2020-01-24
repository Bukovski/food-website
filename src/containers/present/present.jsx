import React from "react";
import { DividerBg } from "../../components/static";


function Present(props) {
  return (
    <div className="present">
      <div className="container">
        <div className="present__wrap">
          <h1 className="present__title">the right ingredients for the right food</h1>
          <DividerBg />
          {/* present__divider */}
          <div className="present__button-wrap">
            {/*<a className="present__button present__button--active">*/}
            <a className="present__button">
                    <span className="present__button-text">
                      BOOK A TABLE
                    </span>
            </a>
            <a className="present__button">
                    <span className="present__button-text">
                      SEE THE MENU
                    </span>
            </a>
          </div>
          {/* present__button-wrap */}
        </div>
      </div>
    </div>
  )
}


export default Present;
