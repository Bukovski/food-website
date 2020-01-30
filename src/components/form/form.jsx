import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { dataPeriod, FormValidator } from "../../helpers";



class Form extends Component {
  constructor() {
    super();
    
    this.validator = new FormValidator( () => {
      const { currentDate, nextMonth } = dataPeriod();
      
      return [
        {
          field: 'name',
          method: 'isEmpty',
          validWhen: false,
          message: 'Enter full name.'
        },
        {
          field: 'name',
          method: 'isLength',
          args: [{ min: 3, max: undefined }],
          validWhen: true,
          message: 'Should be longer than 3 letters'
        },
        {
          field: 'name',
          method: 'isLength',
          args: [{ min: undefined, max: 20 }],
          validWhen: true,
          message: 'Should be shorter than 20 letters'
        },
        {
          field: 'email',
          method: 'isEmpty',
          validWhen: false,
          message: 'Enter your email address.'
        },
        {
          field: 'email',
          method: 'isEmail',
          validWhen: true,
          message: 'Enter valid email address.'
        },
        {
          field: 'date',
          method: this._dateValidate,
          validWhen: true,
          message: `Enter data period between ${ currentDate } & ${ nextMonth }`
        },
        {
          field: 'party',
          method: this._selectValidate,
          validWhen: true,
          message: `Select one of party numbers`
        },
      ]
    });
  
  
    this.state = {
      name: "",
      email: "",
      date: "",
      party: "",
      selectOptions: [ 1, 2, 3, 4, 5 ],
      validation: this.validator.valid(),
    };
  
    this.submitted = false;
    this.datePeriod = dataPeriod();
  }
  
  
  _dateValidate = (confirmation, state) => {
    const { currentDate, nextMonth } = this.datePeriod;
    
    const _getMilliseconds = (date) => new Date(date).getTime();
    const dateMsec = _getMilliseconds(state.date);
    
    return (dateMsec >= _getMilliseconds(currentDate)
      && dateMsec <= _getMilliseconds(nextMonth))
  };
  
  _selectValidate = (confirmation, state) => {
    return !!state.selectOptions.filter(option => option == state.party).length
  };
  
  
  handleChange = (event) => {
    const { name, value } = event.target;
    
    this.setState({
      [ name ]: value
    });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
  
    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;
  
    if (validation.isValid) {
      //reaches here if form validates successfully...
      // AJAX or Modal window should be here
      console.log(`${ this.state.name } Welcome!`);
    }
  };
  
  _options = () => {
    return this.state.selectOptions.map(number => (
      <option key={ number } value={ number }>{ number }</option>
    ))
  };
  
  
  render() {
    // const { notes } = this.props;
    const { name, email, date, party } = this.state;
    const { currentDate, nextMonth } = this.datePeriod;
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;
  
  
    return(
      <form className="reserve__form" onSubmit={ this.handleSubmit }>
        <div className="reserve__group">
          <label className="reserve__label" htmlFor="name">Name</label>
          <input 
            className={ "reserve__input " + (validation.name.isInvalid ? "has-error" : "") }
            id="name" 
            type="text"  
            name="name" 
            placeholder="your name *"
            value={ name }
            onChange={ this.handleChange }
          />
          <span className="help-block">{ validation.name.message }</span>
        </div>
    
        <div className="reserve__group">
          <label className="reserve__label" htmlFor="email">Email</label>
          <input
            className={ "reserve__input " + (validation.email.isInvalid ? "has-error" : "") }
            id="email"
            type="email" 
            name="email" 
            placeholder="your email *" 
            value={ email }
            onChange={ this.handleChange }
          />
          <span className="help-block">{ validation.email.message }</span>
        </div>
    
        <div className="reserve__group">
          <label className="reserve__label" htmlFor="date">Date</label>
          <input
            className={ "reserve__input " + (validation.date.isInvalid ? "has-error" : "") }
            id="date"
            type="date"  
            name="date" 
            min={ currentDate }
            max={ nextMonth }
            value={ date }
            onChange={ this.handleChange }
          />
          <span className="help-block">{ validation.date.message }</span>
        </div>
    
        <div className="reserve__group">
          <label className="reserve__label" htmlFor="party">Party number</label>
          <select
            className={ "reserve__select " + (validation.party.isInvalid ? "has-error" : "") }
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
          <span className="help-block">{ validation.party.message }</span>
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
