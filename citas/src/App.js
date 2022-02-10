import Formulario from "./components/Formulario";
import React,{Fragment} from "react";


function App() {
  return (
    <React.Fragment>
      <h1>Administrador de Pacientes</h1>
       
      <div className="container">
        <div className="row" >
          <div className="one-half column">
          <Formulario/>
          </div>
          <div className="one-half column">
          
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
