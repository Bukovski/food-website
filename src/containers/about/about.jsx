import React from "react";
import Dish from "../../resources/images/dish.png"
import Cook from "../../resources/images/cook.png"
import { DividerBrown } from "../../components/static";


export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__wrap">
          <div className="about__description">
            <h2 className="about__title">Just the right food</h2>
            <DividerBrown />
            <p className="about__text">If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect materials and freshly baked food, delicious Lambda cakes,  muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!</p>
            <div className="about__img-wrap">
              <img className="about__img" src={ Cook } alt="chef" />
            </div>
          </div>
          {/* /.about__description */}
          <div className="about__pictures-wrap">
            <img className="about__pictures" src={ Dish } alt="dish plate"/>
          </div>
          {/* /.about__pictures */}
        </div>
      </div>
    </section>
  )
}
