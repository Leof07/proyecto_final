import React, {useEffect, useState} from "react";
import Tabla from "./Tabla";
import axios from "axios";

function CelularesCrud() {


    const[celulares,SetCelulares]=useState()
    useEffect(()=>{
        cargarCelulares()
    },[])
    async function cargarCelulares(){
        try{
            let res=await axios("https://denny2023.azurewebsites.net/api/celulares")
            let datos= await res.data
            SetCelulares(datos)
        }
        catch(err){
            alert(err)
            console.log(err)
        }
    }
    return(
        <div>
            <h1>Celulares</h1>
            {
                celulares===undefined?
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                    <h1>Cargando</h1>
                </div>
                :
                <Tabla lista={celulares}controlador="celulares" headers={["Id","Marca","Modelo","Color","Precio", "Descripción","Operadora"]} ></Tabla>
            }
        </div>
    )
}
export default CelularesCrud;