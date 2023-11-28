import React, {useState, useEffect} from "react";
import Tabla from "./Tabla";
import axios from "axios";

function JuegosCrud({api}) {
    const[juegos,SetJuegos]=useState()

    useEffect(()=>{
    cargarJuegos()
    },[])

    async function cargarJuegos(){
        try{
            let res=await axios(api)
            let datos= await res.data
            SetJuegos(datos)
    }
        catch(err){
            alert(err)
            console.log(err)
    }
}
    return(
        <div>
            {
                juegos===undefined?
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                :
                <Tabla lista={juegos}controlador="juegos" headers={["Id","Titulo","Descripción","Plataforma","Precio", "Categoria"]} ></Tabla>
            }
        </div>
    )
}
export default JuegosCrud;