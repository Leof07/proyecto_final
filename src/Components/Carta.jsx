import React from "react";
import { Link } from "react-router-dom";

function Carta({imagen, titulo, direccion, Descripcion}) {
  return (
    <div className="card mb-3" style={{maxWidth: "540px", margin:"64px  auto"}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imagen} className="img-fluid rounded-start" alt="imagen celular" style={{objectFit:"cover", height:"100%"}} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">
              {
                Descripcion
              }
            </p>
            <p className="card-text">
              <Link to={direccion} className="btn btn-success">Ver más</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Carta;