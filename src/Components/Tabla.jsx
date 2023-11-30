import React from "react";
import { Link } from "react-router-dom";

function Tabla({headers,controlador, lista, titulo}) {
    return (
      <div>
        <h1 className="titulo bg-dark">
                <span>{titulo}</span>
                <Link to={`/${controlador}/add`} className="btn btn-success"><i className="fa-solid fa-plus"></i> Nuevo</Link>
            </h1>
        <table className="table">
          <thead className="table-dark">
              <tr>
                  {headers.map((header,index) => (<th key={index} scope="col">{header}</th>))}
                  <th>
                    Acciones
                </th>
              </tr>
          </thead>
          <tbody>
            {
              lista.map((elemento,index) => (
                <tr key={index}>
                  {
                  Object.values(elemento).map((valor,index) => (<td key={index}>{valor}</td>))
                  }
                  <td>
                    <Link to={`/${controlador}/editar/${Object.values(elemento)[0]}`} className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i> Editar</Link>
                    <Link to={`/${controlador}/eliminar/${Object.values(elemento)[0]}`} className="btn btn-danger"><i className="fa-solid fa-trash"></i> Eliminar</Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      );
}
export default Tabla;