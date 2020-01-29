import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      date: "",
      party: "",
      selectOptions: [ 1, 2, 3, 4, 5 ]
    };
  }
  
  handleChange = (event) => {
    const { name, value } = event.target;
    
    console.log(name, value)
    
    this.setState({
      [ name ]: value
    });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
  
    console.log(`${ this.state.name } Welcome!`);
  };
  
  _options = () => {
    return this.state.selectOptions.map(number => (
      <option key={ number } value={ number }>{ number }</option>
    ))
  };
  
  _date() {
    function dataFormat(date) {
      const addZero = (_date) => ("0" + _date).slice(-2);
    
      return date.getFullYear() + "-"
        + addZero(date.getMonth() + 1) + "-"
        + addZero(date.getDate())
    }
  
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    
    return {
      currentDate: dataFormat(new Date()), //"2020-01-28"
      nextMonth: dataFormat(date) //"2020-02-28"
    }
  }
  
  render() {
    // const { notes } = this.props;
    const { name, email, date, party } = this.state;
    const { currentDate, nextMonth } = this._date();
    
    return(
      <form className="reserve__form" onSubmit={ this.handleSubmit }>
        <div className="reserve__group">
          <label className="reserve__label" htmlFor="name">Name</label>
          <input 
            className="reserve__input" 
            id="name" 
            type="text"  
            name="name" 
            placeholder="your name *" 
            required
            value={ name }
            onChange={ this.handleChange }
          />
        </div>
    
        <div className="reserve__group">
          <label className="reserve__label" htmlFor="email">Email</label>
          <input 
            className="reserve__input" 
            id="email" 
            type="email" 
            name="email" 
            placeholder="your email *" 
            required 
            value={ email }
            onChange={ this.handleChange }
          />
        </div>
    
        <div className="reserve__group">
          <label className="reserve__label" htmlFor="date">Date</label>
          <input 
            className="reserve__input" 
            id="date" 
            type="date"  
            name="date" 
            required
            min={ currentDate }
            max={ nextMonth }
            value={ date }
            onChange={ this.handleChange }
          />
        </div>
    
        <div className="reserve__group">
          <label className="reserve__label" htmlFor="party">Party number</label>
          <select 
            className="reserve__select" 
            id="party" 
            name="party"
            value={ party }
            onChange={ this.handleChange }
          >
            <option
              disabled={ true }
              selected={ true }
              value=""
            >
              party number
            </option>
            { this._options() }
          </select>
        </div>
    
        <button className="reserve__button">Book now!</button>
      </form>
    );
  }
}


Form.propTypes = {
  //notes: PropTypes.string
};


export default Form;
