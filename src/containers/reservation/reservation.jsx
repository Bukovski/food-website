import React from "react";
import Fade from 'react-reveal/Fade';
import Food1 from "../../resources/images/food/food-1.jpg"
import Food2 from "../../resources/images/food/food-2.jpg"
import { DividerBrown } from "../../components/static";
import { Form } from "../../components/form";

export default function Reservation() {
  return (
    <section className="reserve">
      <div className="container">
        <div className="reserve__wrap">
          
          <Fade left>
            <div className="reserve__preview">
              <div className="reserve__picture-wrap">
                <img className="reserve__picture" src={ Food1 } alt="porridge" />
              </div>
              <div className="reserve__picture-wrap">
                <img className="reserve__picture" src={ Food2 } alt="cherry" />
              </div>
            </div>
          </Fade>
          {/* reserve__preview */}
          <div className="reserve__descr">
            <h2 className="reserve__title">Just the right food</h2>
            <DividerBrown />
            <div className="reserve__about">
              <p className="reserve__text">If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect materials and freshly baked food.
              </p>
              <p className="reserve__text">Delicious Lambda cakes,  muffins, and gourmet coffees make us hard to resist! Stop in today and check us out! Perfect materials and freshly baked food.
              </p>
            </div>
            {/* reserve__about */}
            
            <Form />
          
          </div>
          {/* reserve__descr */}
        </div>
      </div>
    </section>
  )
}