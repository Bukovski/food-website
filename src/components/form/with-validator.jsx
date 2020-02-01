import React, { useState } from "react";
import { dataPeriod, FormValidator } from "../../helpers";


function withValidator(WrappedComponent) {
  return (props) => {
    const _dateValidate = (confirmation, state) => {
      const { currentDate, nextMonth } = dataPeriod();
      
      const _getMilliseconds = (date) => new Date(date).getTime();
      const dateMsec = _getMilliseconds(state.date);
      
      return (dateMsec >= _getMilliseconds(currentDate)
        && dateMsec <= _getMilliseconds(nextMonth))
    };
    
    const _selectValidate = (confirmation, state) => {
      return !!state.selectOptions.filter(option => option.toString() === state.party.toString()).length
    };
    
    
    const validator = new FormValidator( () => {
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
          method: _dateValidate,
          validWhen: true,
          message: `Enter data period between ${ currentDate } & ${ nextMonth }`
        },
        {
          field: 'party',
          method: _selectValidate,
          validWhen: true,
          message: `Select one of party numbers`
        },
      ]
    });
    
    
    const [ validation, setValidation ] = useState(validator.valid());
    
    
    return <WrappedComponent
      { ...props }
      validate={ validation }
      validator={ validator }
      updateValidator={ setValidation }
    />
  }
}


export default withValidator;
