import React from "react";
import Jump from 'react-reveal/Jump';
import { DividerWhite } from "../../components/static";


export default function Review() {
  return (<section className="review">
    <div className="container">
      <Jump dilay={ 500 }>
        <div className="review__wrap">
          <div className="review__content">
            
            <h2 className="review__title">Guest Reviews</h2>
            
            <DividerWhite />
            
            <blockquote className="review__blockquote">
              <svg className="review__quote">
                <use href="#quote" />
              </svg>
              
              <p className="review__text">If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect materials and freshly baked food, delicious Lambda cakes,  muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!
              </p>
              <footer className="review__footer">- food inc, New York</footer>
            </blockquote>
          </div>
        </div>
      </Jump>
    </div>
  </section>)
}
