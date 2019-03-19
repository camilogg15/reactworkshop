import React, { Component } from 'react';

class Header extends Component {
    render() { 
        const {titulo, autor} = this.props;
        return (  
            <header>
                <h1>{titulo} {autor}</h1>
            </header>
        );
    }
} 
export default Header;