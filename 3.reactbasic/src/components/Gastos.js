import React, { Component } from 'react'
import GastoIndividual from './GastoIndividual'

export default class Gastos extends Component {
    state = {
        cantidad: 0
    }
  render() {
    const {gastos} = this.props;
    return (
        <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Gastos</span>
            <span className="badge badge-secondary badge-pill">{this.state.cantidad}</span>
            </h4>
            <ul className="list-group mb-3">          
                {
                    gastos.map(materia=>{
                        return <GastoIndividual valor={materia}></GastoIndividual>
                    })
                }     
         
            </ul>
      </div>
    )
  }
}
