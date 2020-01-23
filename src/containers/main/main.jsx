import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Svg } from "../../components/static";
import { MainMenu } from "../../components/menu";


class Main extends Component {
  constructor() {
    super();
    this.state = {
    
    }
  }
  
  render() {
    // const { notes } = this.props;
    // const { title } = this.state;
    
    return(
      <React.Fragment>
        {/* SVG Sprite */}
        <Svg />
        
        <header className="head">
          <MainMenu />
          {/*  main-menu */}
          <div className="present">
            <div className="container">
              <div className="present__wrap">
                <h1 className="present__title">the right ingredients for the right food</h1>
                <span className="present__divider" />
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
        {/* present */}
        </header>
      </React.Fragment>
    );
  }
}

Main.defaultProps = {
  //notes: []
};

Main.propTypes = {
  //notes: PropTypes.array.isRequired,
};

export default Main;
