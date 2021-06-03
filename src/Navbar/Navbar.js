import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar-container is-fixed-top">
                <div class="navbar-to-left">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                    <p>Home</p>
                </div>
                
                <div class="navbar-to-right">
                    <p class="control">
                        <a class="button blue" href="https://github.com/jgthms/bulma/releases/download/0.9.2/bulma-0.9.2.zip">
                        <span>Login</span>
                        </a>
                    </p>
                    <p class="control">
                        <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.2/bulma-0.9.2.zip">
                        <span>Signup</span>
                        </a>
                    </p>
                </div>
            </nav>
        )
    }
}


export default Navbar;