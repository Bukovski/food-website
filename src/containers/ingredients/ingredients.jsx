import React from "react";
import Slide from 'react-reveal/Slide';
import { DividerWhite } from "../../components/static";
import Ingredient from "../../resources/images/ingradients.png"


export default function Ingredients() {
  return (
    <section className="ingredients">
      <div className="container">
        <Slide left>
          <div className="ingredients__wrap">
            <div className="ingredients__content">
              <h2 className="ingredients__title">Fine ingredients</h2>
              <DividerWhite />
              <p className="ingredients__text">If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect materials and freshly baked food, delicious Lambda cakes,  muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!</p>
              {/* ingredients__text */}
              <div className="ingredients__products">
                <div className="ingredients__product">
                  <img className="ingredients__img ingredients__img--left" src={ Ingredient } alt="" />
                </div>
                <div className="ingredients__product">
                  <img className="ingredients__img ingredients__img--middle" src={ Ingredient } alt="" />
                </div>
                <div className="ingredients__product">
                  <img className="ingredients__img ingredients__img--right" src={ Ingredient } alt="" />
                </div>
              </div>
              {/* ingredients__products */}
            </div>
          </div>
        </Slide>
      </div>
    </section>
  )
}
