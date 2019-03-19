import React, { Component } from 'react';
const Materia = (props) => {
    const {materia, color, fontSize} = props;
    const style = {
        color: color,
        fontSize: fontSize
    }
    return (
    <li style={style} >                    
        {materia.materia} -> {materia.nota} 
    </li>
    );
}
export default Materia;