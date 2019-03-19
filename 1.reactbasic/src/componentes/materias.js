import React, { Component } from 'react';
import Materia from './materia'

class Materias extends Component {   
    render() { 
        const {materias} = this.props;
        return ( 
            <ul>
                {
                    materias.map(materia=>{
                        return <Materia materia={materia} key={materia.materia} color="green" fontSize="50px" ></Materia>
                    })
                }
            </ul>
         );
    }
}
 
export default Materias;
