import React, { Component } from 'react';
import { Svg } from "../../components/static";
import { MainMenu } from "../../components/menu";
import { Present } from "../present";
import { About } from "../about";
import { Ingredients } from "../ingredients";


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
  
        <Ingredients />

      </React.Fragment>
    );
  }
}


export default Main;
