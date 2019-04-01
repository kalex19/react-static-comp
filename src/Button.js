import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <div className='Button'>
      <div className={'button ' + props.buttonType}>
        {props.buttonText}
        {props.count}
      </div>
    </div>
  )
}

export default Button;
