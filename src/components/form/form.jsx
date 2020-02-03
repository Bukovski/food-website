import React, { Component } from 'react';
import PropTypes from "prop-types";
import { dataPeriod } from "../../helpers";
import { Modal } from "../modal";
import withValidator from "./with-validator";


class Form extends Component {
  constructor() {
    super();
    
    this.state = {
      name: "",
      email: "",
      date: "",
      party: "",
      selectOptions: [ 1, 2, 3, 4, 5 ],
      showModal: false
    };
    
    this.submitted = false;
    this.datePeriod = dataPeriod();
  }
  
  
  handleChange = (event) => {
    const { name, value } = event.target;
    
    this.setState({
      [ name ]: value
    });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
  
    const { validator, updateValidator } = this.props;
  
    const validation = validator.validate(this.state);
    updateValidator( validation );
    
    this.submitted = true;
    
    if (validation.isValid) {
      //reaches here if form validates successfully...
      // AJAX or Modal window should be here
      console.log(`${ this.state.name } Welcome!`);
      
      this.handleOpenModal();
    }
  };
  
  handleOpenModal = () => {
    this.setState({
      showModal: true
    })
  };
  
  cleanForm = () => {
    this.submitted = false;
    
    this.setState({
      name: "",
      email: "",
      date: "",
      party: "",
      showModal: false
    });
  };
  
  _options = () => {
    return this.state.selectOptions.map(number => (
      <option key={ number } value={ number }>{ number }</option>
    ))
  };
  
  
  render() {
    const { validate, validator } = this.props;
    const { name, email, date, party, showModal } = this.state;
    
    const { currentDate, nextMonth } = this.datePeriod;
    let validation = this.submitted
      ? validator.validate(this.state)
      : validate;
    
    const modalWindow = (<Modal show={ showModal } handleClose={ this.cleanForm }>
      <div className="modal__content">
        <h2 className="modal__title">Your order is being processed</h2>
        <p className="modal__text">Dear { name }, we will contact you soon.</p>
        <p className="modal__text">Your date: { date } and party number: { party }.</p>
        <p className="modal__text">Thanks for your order</p>
      </div>
    </Modal>);
    
    return(
      <React.Fragment>
        {  modalWindow }
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
      </React.Fragment>
    );
  }
}


Form.propTypes = {
  validator: PropTypes.object.isRequired,
  validate: PropTypes.object.isRequired,
  updateValidator: PropTypes.func.isRequired
};


export default withValidator(Form);
