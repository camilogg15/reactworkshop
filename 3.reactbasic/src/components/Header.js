import React, { Component } from 'react'
//import Alerta from './Alerta'
import './Header.css'

export default class Header extends Component {
    state = {
        visibilityAler: true,
        mensajeBoton: 'Ocultar Mensaje'
    }
    //montaje
    constructor()
    {
        super();
        console.log("Header: constructor()");
    }

    //montaje
    componentDidMount()
    {
        console.log("Header: componentDidMount()");
    }

    //Actualizacion
    componentDidUpdate()
    {
        console.log("Header: componentDidUpdate()");
    }
    

    //Desmontaje
    componentWillUnmount()
    {

    }

    ShowAlert = () =>
    {
         this.setState({visibilityAler: !this.state.visibilityAler, mensajeBoton: this.state.visibilityAler ? 'Mostrar Mensaje' : 'Ocultar Mensaje'})
         
    }

   //montaje
  render() {
    console.log("Header: render()");
    //const {visibilityAler, mensajeBoton} = this.state;
      const {tituloApp, year} = this.props;
    return (
        <main>
        <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm">
            <img className="mr-3" src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-outline.svg" alt="" width="48" height="48" />
            <div className="lh-100">
            <h6 className="mb-0 text-white lh-100">{tituloApp}</h6>
            <small>Since {year}</small>
            </div>
        </div>

        {/* {visibilityAler && (
        <Alerta></Alerta>
        )} */}

        {/* <button onClick={this.ShowAlert} type="button" className="btn btn-dark">{mensajeBoton}</button> */}
      </main>
    )
  }
}
