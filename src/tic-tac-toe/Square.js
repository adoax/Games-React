import React from 'react';

function Square (props) {
    return (
        <button className={props.value === "X" ? "square colorRed" : "square colorGreen"} onClick={props.onClick}>
            {props.value}
        </button>
    )
}
export default Square;