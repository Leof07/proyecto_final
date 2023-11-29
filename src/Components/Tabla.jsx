import React from "react";
import { Link } from "react-router-dom";

function Tabla({headers,controlador, lista}) {
    return (
      <table className="table">
        <thead className="table-dark">
            <tr>
              <th>
                  <Link to={`/${controlador}/add`} className="btn btn-success"><i className="fa-solid fa-plus"></i> Nuevo</Link>
              </th>
                {headers.map((header,index) => (<th key={index} scope="col">{header}</th>))}
            </tr>
        </thead>
        <tbody>
          {
            lista.map((elemento,index) => (
              <tr key={index}>
                <td>
                  <Link to={`/${controlador}/editar/${Object.values(elemento)[0]}`} className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i> Editar</Link>
                  <Link to={`/${controlador}/eliminar/${Object.values(elemento)[0]}`} className="btn btn-danger"><i className="fa-solid fa-trash"></i> Eliminar</Link>
                </td>
                {
                Object.values(elemento).map((valor,index) => (<td key={index}>{valor}</td>))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    );
}
export default Tabla;