import React,{Fragment,useState} from "react";
import '../index.css';
import { v4 as uuidv4 } from 'uuid';
import  PropTypes  from "prop-types";


const Formulario=({crearCita})=>{

    //crear state de Citas
    const [cita,actualizarCita]=useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });
    const [error,actualizarError]=useState(false)

    //funcion que ejecuta cada que el usuario escribe un input
    const actualizarState= e =>{
       actualizarCita ({
           ...cita,  //copia del estado ,para que no se pierdan los cambios que realizamos
           [e.target.name]:e.target.value 
       })
    }
        //extraer los valores
            const {mascota,propietario,fecha,hora,sintomas}=cita;//es recomendable escribirlo asi para no tener que escribir cita.mascota.... {value={}nos permite recetear el formulario }
        //cuando el usuario preciona el boton agregar cita
    const submitCita=e=>{
        e.preventDefault()

                
         //validar
            if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === ''
                || hora.trim() === '' || sintomas.trim() === '' ){
                actualizarError(true) //encaso de que falle o llenen los campos pasa hacer true
                 return;
                }
        //elimar mensaje previo  
                actualizarError(false);
         //asignar id
                cita.id=uuidv4();
                       
         //crear la cita
                crearCita(cita)

            //reiniciar form
            actualizarCita({ //una ves que se agreaga la cita al scrip pricipal se actualiza todo
                mascota:'',
                propietario:'',
                fecha:'',
                hora:'',
                sintomas:''
            })
            }
        
    return(
        <Fragment>
            <h2>Crear Cita</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p>
             : null}

            <form 
                onSubmit={submitCita}
            
            >
                <label>Nombre de Macota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width" 
                    placeholder="Nombre de la mascota"
                    onChange={actualizarState}
                    value={mascota}
                
                />
                <label>Nombre del propietario </label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width" 
                    placeholder="Nombre due??o de la mascota"
                    onChange={actualizarState}
                    value={propietario}  
                
                />
                <label>Fecha  </label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width" 
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>hora de alta </label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width" 
                    onChange={actualizarState}
                    value={hora}
                />
                <label>S??ntomas</label>
                <textarea
                className="u-full-width"
                name="sintomas"
                onChange={actualizarState}
                value={sintomas}
                ></textarea>

                <button 
                className="u-full-width button-primary"
                type="submit"
                >Agreagar Cita</button>
                
            </form>
        
        </Fragment>
    )
}
Formulario.propTypes={
    crearCita:PropTypes.func.isRequired
  }
  

export default Formulario;