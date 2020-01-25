import React, { Component } from 'react';
import { Svg } from "../../components/static";
import { NavigateMenu } from "../../components/navigate-menu";
import { Present } from "../present";
import { About } from "../about";
import { Ingredients } from "../ingredients";
import { Menu } from "../menu";
import { Review } from "../review";


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
          <NavigateMenu />
          {/*  main-menu */}
          <Present />
        {/* present */}
        </header>
        
        <About />
  
        <Ingredients />
  
        <Menu />
  
        <Review />

      </React.Fragment>
    );
  }
}


export default Main;
