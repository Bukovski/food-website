import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Svg } from "../../components/static";
import { MainMenu } from "../../components/menu";
import { Present } from "../present";
import { About } from "../about";


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
          <Present />
        {/* present */}
        </header>
        <About />

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
