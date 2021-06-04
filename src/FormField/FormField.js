import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './FormField.css';

const FormField = (props) => {
    return (
        <div class="field form-container">
            <label class="label">{props.label}</label>
            <div class="control">
                <input class="input" type={props.type} placeholder={props.placeholder} />
            </div>
        </div>
    )
}

export default FormField;