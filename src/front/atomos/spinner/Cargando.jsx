import React from 'react';
import { ReactComponent as Icon } from './icon.svg';
import './cargando.css';

// ************************************* COMPONENTE (Cargando.jsx) LEER: Documentación *****************
// ----------------------------------------------------------------------------------
// ---> (PROPS)
// ---> mensaje: este props recibe un "string" para indicar al usuario lo que sucede. tipo-->(STRING)
// ---> svg: este props recibe un svg, para renderizar en el componente.
// ---> girando= este props controla la clase que mueve circularmente la imagen svg. tipo-->(BOOL)
// ---> css= este props recibe una clase CSS3 en string. tipo-->(STRING)
// *********************************************************************************************************

const Cargando = ({mensaje='', svg='', girando=false, css}) => {
  return (
    <div className="row mt-4">
      <div className={`container cargando_css ${!!css && css}`}>
        {svg && <img className={girando && 'anim_girar'} src={svg===''?svg:Icon} alt="icon" /> }
        <div className="text_component_carga">{mensaje}</div>
      </div>
    </div>
  );
}

export default Cargando;
