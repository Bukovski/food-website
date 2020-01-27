import React from "react";
import Food1 from "../../resources/images/food/food-1.jpg"
import Food2 from "../../resources/images/food/food-2.jpg"
import { DividerBrown } from "../../components/static";

export default function Reservation() {
  return (
    <section className="reserve">
      <div className="container">
        <div className="reserve__wrap">
          
          <div className="reserve__preview">
            <div className="reserve__picture-wrap">
              <img className="reserve__picture" src={ Food1 } alt="porridge" />
            </div>
            <div className="reserve__picture-wrap">
              <img className="reserve__picture" src={ Food2 } alt="cherry" />
            </div>
          </div>
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
            <form className="reserve__form">
              <div className="reserve__group">
                <label className="reserve__label" htmlFor="name">Name</label>
                <input className="reserve__input" id="name" type="text"  name="name" value="" placeholder="your name *" required />
              </div>
              
              <div className="reserve__group">
                <label className="reserve__label" htmlFor="email">Email</label>
                <input className="reserve__input" id="email" type="email"  name="email" value="" placeholder="your email *" required />
              </div>
              
              <div className="reserve__group">
                <label className="reserve__label" htmlFor="date">Date</label>
                <input className="reserve__input" id="date" type="date"  name="date" value="" required />
              </div>
              
              <div className="reserve__group">
                <label className="reserve__label" htmlFor="party">Party number</label>
                <select className="reserve__select" id="party" name="party">
                  <option>party number</option>
                  <option value={ 1 }>1</option>
                  <option value={ 2 }>2</option>
                </select>
              </div>
            
              <button className="reserve__button">Book now!</button>
            </form>
          </div>
          {/* reserve__descr */}
        </div>
      </div>
    </section>
  )
}