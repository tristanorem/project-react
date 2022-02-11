import Formulario from "./components/Formulario";
import React,{Fragment,useState} from "react";


function App() {
//arroglo de cistas
  const [citas,guardarCitas]=useState([]);


  //funcion que modifique la citas actuales y agrege la nueva

  const crearCita=cita =>{
  guardarCitas([
    ...citas,
    cita
  ])
}
  return (
    <React.Fragment>
      <h1>Administrador de Pacientes</h1>
       
      <div className="container">
        <div className="row" >
          <div className="one-half column">
          <Formulario
            crearCita={crearCita}
          />
          </div>
          <div className="one-half column">
          
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
