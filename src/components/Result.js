import React from 'react';
import './Result.css';

const Result = (props) => {
    return (
        <div className={"result txt"}>
            {props.res}
        </div>
    );
}

export default Result;