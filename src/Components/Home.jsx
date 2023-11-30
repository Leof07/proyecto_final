import React from "react";
import Carta from "./Carta";

function Home() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Bienvenido a Kodigo</h1>
                    <Carta imagen="/imagenes/celular.jpg" titulo="Celulares" direccion="/celulares" Descripcion="Registro detallado y actualizado que documenta los modelos y características de dispositivos móviles"/>
                    <Carta imagen="/imagenes/juegos.jpg" titulo="VideoJuegos" direccion="/juegos" Descripcion="Registro completo y actualizado que detalla la cantidad, títulos y especificaciones de los juegos disponibles"/>
                </div>
            </div>
        </div>
    )
}
export default Home;