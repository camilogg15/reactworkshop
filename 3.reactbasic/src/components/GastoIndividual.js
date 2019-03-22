import React, { Component } from 'react'

export default class GastoIndividual extends Component {
  render() {
    const {valor} = this.props;
    return (
        <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0"></h6>
          <small className="text-muted"></small>
        </div>
        <span className="text-muted">${valor}</span>
      </li>
    )
  }
}
