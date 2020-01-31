import React from "react";
import { DividerSmallWhite } from "../../components/static";
import Card from "../../resources/images/cards.png"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrap">
          
          <div className="footer__about">
            <h3 className="footer__title">About Us</h3>
            <DividerSmallWhite />
            <div className="footer__text">
              Lambda's new and expanded Chelsea location represents a truly authentic <strong>Greek</strong> patisserie, featuring breakfasts of fresh croissants and steaming bowls of café.
              <br/>Lamda the best restaurant in town
            </div>
          </div>
          {/* footer__about */}
          <div className="footer__hours">
            <h3 className="footer__title">Opening Hours</h3>
            <DividerSmallWhite />
            <ul className="footer__list">
              <li className="footer__item">
                <strong>Mon-Thu:</strong> 7:00am-8:00pm
              </li>
              <li className="footer__item">
                <strong>Fri-Sun:</strong> 7:00am-10:00pm
              </li>
            </ul>
            {/* footer__list */}
            <div className="footer__cards">
              <div className="footer__card-wrap">
                <img className="footer__card footer__card--first" src={ Card } alt="first card" />
              </div>
              <div className="footer__card-wrap">
                <img className="footer__card footer__card--pay" src={ Card } alt="pay pal" />
              </div>
              <div className="footer__card-wrap">
                <img className="footer__card footer__card--visa" src={ Card } alt="visa" />
              </div>
              <div className="footer__card-wrap">
                <img className="footer__card footer__card--master" src={ Card } alt="master card" />
              </div>
            </div>
          </div>
          {/* footer__hours */}
          <div className="footer__location">
            <h3 className="footer__title">Our Location</h3>
            <DividerSmallWhite />
            <ul className="footer__list">
              <li className="footer__item">
                <strong>19th Parasdise Street Sitia</strong>
              </li>
              <li className="footer__item">
                <strong>128 Meserole Avenue</strong>
              </li>
            </ul>
            {/* footer__list */}
            <div className="footer__social">
              <a className="footer__button" href="/#">
                <svg className="footer__icon">
                  <use href="#twitter" />
                </svg>
              </a>
              <a className="footer__button" href="/#">
                <svg className="footer__icon">
                  <use href="#youtube-logo" />
                </svg>
              </a>
              <a className="footer__button" href="/#">
                <svg className="footer__icon">
                  <use href="#facebook" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}