import React, {useEffect, useState} from "react";
import Tabla from "./Tabla";
import axios from "axios";
import { Link } from "react-router-dom";

function CelularesCrud({api}) {


    const[celulares,SetCelulares]=useState()
    useEffect(()=>{
        cargarCelulares()
    },[])
    async function cargarCelulares(){
        try{
            let res=await axios(api)
            let datos= await res.data
            SetCelulares(datos)
        }
        catch(err){
            alert(err)
            console.log(err)
        }
    }
    return(
        <div className="container">
            {
                celulares===undefined?
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                :
                <Tabla lista={celulares}controlador="celulares" titulo="Celulares" headers={["Id","Marca","Modelo","Color","Precio", "Descripción","Operadora"]} ></Tabla>
            }
        </div>
    )
}
export default CelularesCrud;