import { useState } from "react";


const Contador = () => {

const [numero, setNumero] = useState(0);
//numero = 10 no se puede actualizar el state de esta manera
//setNumero(10) esta es la forma valida de actualizar el state

    return (
        <div>
            <h2>Contador</h2>
            <h3>{numero}</h3>
            <button onClick={()=> setNumero(numero + 1) }>+1</button>
        </div>
    );
};

export default Contador;