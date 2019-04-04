import React from 'react';
import './Button.css';
const Button = (props) => {
    return (
        <button onClick={() => props.click(props.value)}>{props.value}</button>
    );
}

export default Button;