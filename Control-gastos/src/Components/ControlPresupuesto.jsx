import {useState} from 'react'

const ControlPresupuesto = ({presupuesto}) => {

  const FormatPresupuesto = (cantidad) => {
    return cantidad.toLocaleString('en-US',{
        style: 'currency',
        currency: 'USD'
    });
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas '>
      <div>
        <p>Grafica Presupuesto</p>
      </div>
      <div className='contenido-presupuesto'>
        <p>
            <span>Presupuesto: </span> {FormatPresupuesto(presupuesto)}
        </p>

        <p>
            <span>Disponible: </span> {FormatPresupuesto(0)}
        </p>

        <p>
            <span>Gastado: </span> {FormatPresupuesto(0)}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto
