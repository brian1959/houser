import React from 'react';
import './button.css'

export default function Button(props) {
    return (
        <div className="button_mine" onClick={props.action}>
        {props.children}
        </div>
    )
}