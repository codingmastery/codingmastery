import React from 'react';
import * as Forms from '../../../config/forms';

const FormBox = (props) => {
  const MyForm = (Forms[props.formContainerName] !== null || Forms[props.formContainerName]!== undefined) ? 
    Forms[props.formContainerName] : null;
  return (MyForm !== null ) ? <MyForm /> : null;
}

export default FormBox;