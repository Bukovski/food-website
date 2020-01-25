import React, { PureComponent } from 'react';
import NavigateList from "./navigate-list";
import Logo from "../../resources/images/label.png";


class NavigateMenu extends PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      visible: true
    };
    
    this.prevScrollPos = window.pageYOffset;
  }
  
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  
  // Hide or show the menu.
  handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = this.prevScrollPos > currentScrollPos;
  
    this.prevScrollPos = currentScrollPos;
    
    this.setState({
      visible
    });
  };
  
  render() {
    const { visible } = this.state;
    
    return(
      <div className={ "main-menu " + ((!visible) ? "main-menu--hidden" : "") }>
        <div className="container">
          <div className="main-menu__wrap">
            <a className="main-menu__logo-link" href="#">
              <img className="main-menu__logo-img" src={ Logo } alt="lambda wordpress logo"/>
            </a>
            {/* main-menu__logo-img */}
            <nav className="main-menu__menu">
              <NavigateList />
              
              <a className="main-menu__button" href="#">
                <svg className="main-menu__icon">
                  <use href="#twitter" />
                </svg>
              </a>
              <a className="main-menu__button" href="#">
                <svg className="main-menu__icon">
                  <use href="#youtube-logo" />
                </svg>
              </a>
              <a className="main-menu__button" href="#">
                <svg className="main-menu__icon">
                  <use href="#facebook" />
                </svg>
              </a>
            </nav>
          </div>
          {/*  main-menu__menu */}
        </div>
      </div>
    );
  }
}


export default NavigateMenu;
