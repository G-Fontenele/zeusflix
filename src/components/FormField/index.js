import React from 'react';

// import { Container } from './styles';

function FormField({ type, name, value, placeholder, onChange }) {
    
  return(
    <div style = {{padding: 2}}>
      <label>
        <input
            type = {type}
            name =  {name}
            value = {value}
            placeholder = {placeholder}
            onChange = {onChange}
        />
        </label>
    </div>
  )
}

export default FormField;