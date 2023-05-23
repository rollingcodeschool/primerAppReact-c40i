// rsc

const Titulos = ({tituloNuevo, estadoNuevo }) => {
    
  return (
    <section>
      <h1>Ladrillitos</h1>
      <h2>{tituloNuevo} : {(estadoNuevo === true)?('es verdadero'):('es falso') }</h2>
    </section>
  );
};

export default Titulos;
