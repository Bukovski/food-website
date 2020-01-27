import React, { Component } from 'react';
import { Element, Link } from 'react-scroll';
import { Svg } from "../../components/static";
import { NavigateMenu } from "../../components/navigate-menu";
import { Present } from "../present";
import { About } from "../about";
import { Ingredients } from "../ingredients";
import { Menu } from "../menu";
import { Review } from "../review";
import { Reservation } from "../reservation";
import { Footer } from "../footer";


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
          
          <Element name="home">
            <Present />
          </Element>
        {/* present */}
        </header>
  
        <Element name="about">
          <About />
        </Element>
  
        <Element name="igredients">
          <Ingredients />
        </Element>
  
        <Element name="menu">
          <Menu />
        </Element>
  
        <Element name="reviews">
          <Review />
        </Element>
  
        <Element name="reservations">
          <Reservation />
        </Element>
  
        <Footer />

      </React.Fragment>
    );
  }
}


export default Main;
