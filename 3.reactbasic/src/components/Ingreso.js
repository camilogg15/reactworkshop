import React, { Component } from 'react'

export default class Ingreso extends Component {

    state= {
        valorInput: 0
    };

    enviarvalor= () =>
    {
        this.props.agregarGasto(this.state.valorInput);
    };

    onChangeInput = () =>
    {
this.setState({valorInput: valorInput});
    };

  render() {
      const {valorInput} = this.state;
    return (
        
        <div >
        {/* <input value={this.state.valorInput} type="number" /> */}
        <input type="text" onChange={this.onChangeInput} class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"></input>
            <div >
            <button onClick={this.enviarvalor} className="btn btn-outline-secondary" type="button" id="button-addon2">Agregar</button>
            </div>
        </div>
    )
  }
}
