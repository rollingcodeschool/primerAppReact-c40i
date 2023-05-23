import "./App.css";
import Contador from "./components/Contador";
import Titulos from "./components/Titulos";

function App() {
  //aqui va la mayor parte de la logica
  const estado = true;

  return (
    // aqui puedo escribir algo de logica y luego el maquetado del componente
    // Fragment
    <>
     {/* <Titulos ></Titulos> */}
     <Titulos tituloNuevo='Este titulo es generado usando props' estadoNuevo={estado}/>
     <Contador></Contador>
    </>
  );
}

export default App;
