import React, { Component } from 'react'

export default class Registro extends Component {

    state = {
        palabra : ''
    };    

    cambiar = (e) =>{
        this.setState({palabra: e.target.value});
    };

    borrar = (e) => {
        this.setState({palabra: ''}, );
        this.props.borrarPalabra();
    };

    buscar = (e) => {
        this.setState({palabra: ''}, );        
    };

    enviar = () => {
        this.props.obtenerPalabra(this.state.palabra);
    }
   

  render() {
      const {palabra} = this.state;    

    return (
      <React.Fragment>
          <div className="input-group flex-nowrap">
            <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">@</span>
            </div>
            <input 
            value={palabra}
            onChange={this.cambiar}
            type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>

        <div className="alert alert-success" role="alert">
            {palabra}
        </div>
        <button onClick={this.borrar} type="button" className="btn btn-primary">Borrar</button>
        <button onClick={this.enviar} type="button" className="btn btn-primary">Buscar</button>
      </React.Fragment>
    )
  }
}
