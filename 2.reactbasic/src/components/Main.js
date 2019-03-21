import React, { Component } from 'react'
import Registro from './Registro'

class Main extends Component {
    constructor(props)
        {
            super(props);
            this.state = {
                edad: this.props.edad,
                palabra: ''
            };
            //this.handlerSumar = this.handlerSumar.bind(this);
        }
       
    // handlerSumar()
    // {
    //     this.setState({edad : parseInt(this.state.edad) + 1});
    //     //console.log(this);
    // }   

    handlerSumarOptimizado = () =>
    {
        this.setState({edad : parseInt(this.state.edad) + 1});
    };

    obtenerPalabra = (palabra) => {
        this.setState({palabra});
    };

    borrarPalabra = () => {
        this.setState({palabra : ''});
    };

    render() { 
        const {edad, palabra} = this.state
        return ( 
            <div className="container">
            <br/>
                <button onClick={this.handlerSumarOptimizado}
                // onClick={() => {
                //     this.setState({edad : parseInt(this.state.edad) + 1})
                // }} 
                type="button" className="btn btn-primary">
                    Notifications <span className="badge badge-light">{edad}</span>
                </button>
                <div className="alert alert-secondary" role="alert">
                {palabra}
                </div>
                <br/><br/><br/><br/>
                <Registro obtenerPalabra={this.obtenerPalabra} borrarPalabra={this.borrarPalabra} ></Registro>
            </div>
         );
    }

   
}
export default Main;