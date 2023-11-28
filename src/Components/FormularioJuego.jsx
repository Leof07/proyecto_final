import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function FormularioJuego({api,del}) {
    const[titulo,setTitulo]=useState("")
    const[descripcion,setDescripcion]=useState("")
    const[plataforma,setPlataforma]=useState("")
    const[precio,setPrecio]=useState("")
    const[categoria,setCategoria]=useState("")
    const navigate= useNavigate()
    const{id}=useParams()
    useEffect(()=>{
        if(id!==undefined)
        cargarJuego()
    },[])

    async function guardar(){

        try{
            let juegos={
                titulo:titulo,
                descripcion:descripcion,
                plataforma:plataforma,
                precio:precio,
                categoria:categoria
            }
            let res= await axios.post(api,juegos)
            let datos= await res.data
            if(datos.status===1){
                alert(datos.message)
                navigate("/juegos")
            }
        }
        catch(err){
            alert(err)
            console.log(err)
        }
    }
    async function cargarJuego(){
        try{
            let res=await axios.get(api+"/"+id)
            let datos=await res.data
            setTitulo(datos.titulo)
            setDescripcion(datos.descripcion)
            setPlataforma(datos.plataforma)
            setPrecio(datos.precio)
            setCategoria(datos.categoria)
        }
        catch(err){
            alert(err)
            console.log(err)
            if(err.response.status===500){
                alert("El juego ya no existe")
                navigate("/juegos")
            }
        }
    }
    async function editar(){
        try{
            let juegos={
                juegoId:id,
                titulo:titulo,
                descripcion:descripcion,
                plataforma:plataforma,
                precio:precio,
                categoria:categoria
            }
            let res= await axios.put(api,juegos)
            let datos= await res.data
            if(datos.status===1){
                alert(datos.message)
                navigate("/juegos")
            }
        }
        catch(err){
            alert(err)
            console.log(err)
            if(err.response.status===500){
                alert("El juego ya no existe")
                navigate("/juegos")
            }
        }
    }
    async function eliminar(){
        try{
            let res= await axios.delete(api+"?id="+id)
            let datos= await res.data
            if (datos.status===1){
                alert(datos.message)
                navigate("/juegos")
            }
        }catch(err){
            alert(err)
            console.log(err)
            if(err.response.status===500){
                alert("El juego ya no existe")
                navigate("/juegos")
            }
        }
    }
    function enviar(e){
        e.preventDefault()
        e.stopPropagation()
        let form=document.querySelector(".need-validation")
        if (!form.checkValidity()) {
            form.classList.add('was-validated')
    }
    else{
        if(id===undefined){
            guardar()
        }
        else{
            if(del===undefined){
                editar()
            }
            else{
                eliminar()
            }
        }
    }
}
    return(
        <div >
            <form className="need-validation" noValidate>
                {
                    id!==undefined?
                    <div className="form-group">
                        <label className="form-label">ID:</label>
                        <input type="text" className="form-control" value={id} disabled readOnly></input>
                    </div>
                    :
                    ""
                }
                <div className="form-group mt-3">
                    <label className="form-label">Titulo:</label>
                    <input type="text" className="form-control" value={titulo} onChange={(e)=>{setTitulo(e.target.value)}} required disabled={del===undefined?false:true}></input>
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Campo requerido</div>
                </div>
                <div className="form-group mt-3">
                    <label className="form-label">Descripción:</label>
                    <input type="text" className="form-control" value={descripcion} onChange={(e)=>{setDescripcion(e.target.value)}} required disabled={del===undefined?false:true}></input>
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Campo requerido</div>
                </div>
                <div className="form-group mt-3">
                    <label className="form-label">Plataforma:</label>
                    <input type="text" className="form-control" value={plataforma} onChange={(e)=>{setPlataforma(e.target.value)}} required disabled={del===undefined?false:true}></input>
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Campo requerido</div>
                </div>
                <div className="form-group mt-3">
                    <label className="form-label">Precio:</label>
                    <input type="text" className="form-control" value={precio} onChange={(e)=>{setPrecio(e.target.value)}} required disabled={del===undefined?false:true}></input>
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Campo requerido</div>
                </div>
                <div className="form-group mt-3">
                    <label className="form-label">Categoria:</label>
                    <input type="text" className="form-control" value={categoria} onChange={(e)=>{setCategoria(e.target.value)}} required disabled={del===undefined?false:true}></input>
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Campo requerido</div>
                </div>
                <button className={`btn btn-${id===undefined?"success": del===undefined?"primary":"danger"} mt-3`} onClick={(e)=>{enviar(e)}}>{id===undefined?"Guardar": del===undefined?"Editar":"Eliminar"}</button>
                <button className="btn btn-warning mt-3 ms-2" onClick={()=>{navigate("/juegos")}}>Cancelar</button>
            </form>
        </div>
    )
}
export default FormularioJuego;