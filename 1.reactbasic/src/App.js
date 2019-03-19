import React, { Component } from 'react';
import Header from './componentes/classComponent'
import Footer from './componentes/functionalComponent'
import Materias from './componentes/materias'
import './App.css';

class App extends Component {
  render() {

    const  materias = [
      {materia: "CES4", nota: 4},
      {materia: "BD", nota: 4.5},
      {materia: "Calculo", nota: 3},
      {materia: "Fisica", nota: 4}
    ];
  
    return(
      <div>
        <Header titulo="My App React" autor="CamiloG"></Header>
        <Materias materias={materias}></Materias>
        <Footer fecha="18/03/2019" ></Footer>
      </div>   
      );
  }
}

export default App;
