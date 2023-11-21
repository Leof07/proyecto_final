import React from "react";

function Tabla({headers,children}) {
    return (
      <table class="table">
        <thead class="table-dark">
            <tr>
                {headers.map((header) => (<th scope="col">{header}</th>))}
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
      </table>
    );
}
export default Tabla;