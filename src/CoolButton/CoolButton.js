import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './CoolButton.css';


const CoolButton = (props) => {
    const small = (props.isSmall) ? 'is-small' : '';
    const danger = (props.isDanger) ? 'is-danger' : '';
    const success = (props.isSuccess) ? 'is-success' : '';
    const center = (props.isCentered) ? 'is-centered' : '';
    const className = (props.className) ? props.className : '';
    return <button class={`button ${className} ${small} ${danger} ${center} ${success}`}>{props.children}</button>;
}

export default CoolButton;