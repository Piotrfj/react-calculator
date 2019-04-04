import React from 'react';
import './Input.css';
const Input = (props) => {
    return (
        <div className={"input txt"}>
            {props.value}
        </div>
    );
}

export default Input;