import React, {useEffect} from "react";
import Tabla from "./Tabla";
import axios from "axios";

function CelularesCrud() {
useEffect(() => {
    document.title = "Celulares";
    axios.get("https://denny2023.azurewebsites.net/api/celulares").then((response) =>{
        
    })
},[])

    return(
        <div>
            <h1>Celulares</h1>
            <Tabla headers={["Id","Marca","Modelo","Color","Precio", "Descripción","Operadora"]} >
                <tr>
                    <td>1</td>
                    <td>Samsung</td>
                    <td>S20</td>
                    <td>Blanco</td>
                    <td>1000</td>
                    <td>Alta gama</td>
                    <td>Claro</td>
                </tr>
            </Tabla>
        </div>
    )
}
export default CelularesCrud;