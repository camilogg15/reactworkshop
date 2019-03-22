import React, { Component } from 'react'
import Header from './Header'
import Ingreso from './Ingreso'
import Gastos from './Gastos'

export default class App extends Component {   

    state= {
        tituloApp: 'Bootstrap',
        year: 2011,
        gastos: [100, 200]
    };

    agregarGasto = (gasto) => {
        this.setState({gastos: [...this.state.gastos, gasto]});
    }

  render() {
      const {tituloApp, year} = this.state;
    return (
      <React.Fragment>
        <Header tituloApp={tituloApp} year={year}></Header>
        <Ingreso agregarGasto={this.agregarGasto}></Ingreso>
        <Gastos gastos={this.state.gastos}></Gastos>
      </React.Fragment>
    )
  }
}
