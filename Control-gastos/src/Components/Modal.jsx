import CerrarBtn from '../img/cerrar.svg'
import { useState } from 'react';

const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [categoria, setCategoria] = useState("");

    const handleOcultarModal = () => {       
        setAnimarModal(false);

        setTimeout( () => {
            setModal(false);
        },500)
    }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt='Cerrar Modal' onClick={handleOcultarModal} />
      </div>

      <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>

        <legend>Nuevo Gasto</legend>

        <div className='campo'>
            <label htmlFor='nombre'>Nombre Gasto</label>
            <input 
                id='nombre'
                type="text"
                placeholder='Añade el Nombre del Gasto'
                value={nombre}
                onChange={ e => setNombre(e.target.value)}
            />
        </div>

        <div className='campo'>
            <label htmlFor='cantidad'>Cantidad</label>
            <input 
                id='cantidad'
                type="number"
                placeholder='Añade la cantidad del Gasto: Ej. 300'
                value={cantidad}
                onChange={ e => setCantidad(e.target.value)}
            />
        </div>

        <div className='campo'>
            <label htmlFor='categoria'>Categoria</label>
            <select
                id='categoria'
                value={categoria}
                onChange={e => setCategoria(e.target.value)}
            >
                <option value="">Seleccione --</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="Casa">Casa</option>
                <option value="gastos">Gastos Varios</option>
                <option value="ocio">Ocio</option>
                <option value="Salud">Salud</option>
                <option value="Suscripciones">Suscripciones</option>
            </select>
        </div>

        <input 
            type='submit'
            value="Añadir Gasto"
        />
      </form>
    </div>
  )
}

export default Modal
