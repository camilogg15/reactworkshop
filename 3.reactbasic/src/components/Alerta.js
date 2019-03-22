import React, { Component } from 'react'



export default class Alerta extends Component {

componentWillUnmount()
{    
    console.log("Alerta componentWillUnmount()");
}

  render() {
    return (
        <div  className="alert alert-dark" role="alert">
        Bienvenido!
    </div>
    )
  }
}