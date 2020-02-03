import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { ErrorBoundry } from "../../helpers";
import { Svg } from "../../components/static";
import { NavigateMenu } from "../../components/navigate-menu";
import { Present } from "../present";
import { About } from "../about";
import { Ingredients } from "../ingredients";
import { Menu } from "../menu";
import { Review } from "../review";
import { Reservation } from "../reservation";
import { Footer } from "../footer";


function Main() {
  return(
    <ErrorBoundry>
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
    
    </ErrorBoundry>
  );
}


export default Main;
