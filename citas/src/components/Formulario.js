import React,{Fragment,useState} from "react";
import '../index.css';

const Formulario=()=>{

    //crear state de Citas
    const [cita,actializarCita]=useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''

    });
    const actualizarState=()=>{
        console.log('escribiendo...');
    }

    return(
        <Fragment>
            <h2>Crear Cita</h2>

            <form>
                <label>Nombre de Macota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width" 
                    placeholder="Nombre de la mascota"
                    onChange={actualizarState}
                
                />
                <label>Nombre </label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width" 
                    placeholder="Nombre dueño de la mascota"
                
                />
                <label>Fecha  </label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width" 
                />
                <label>hora de alta </label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width" 
                />
                <label>Síntomas</label>
                <textarea
                className="u-full-width"
                name="sintomas"
                ></textarea>

                <button 
                className="u-full-width button-primary"
                type="submit"
                >Agreagar Cita</button>
                
            </form>
        
        </Fragment>
    )
}

export default Formulario;