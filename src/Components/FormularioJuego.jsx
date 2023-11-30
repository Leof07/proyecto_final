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
    const[validPrecio,setValidPrecio]=useState("")
    const [validCategoria, setValidCategoria]=useState("")
    const[validPlataforma,setValidPlataforma]=useState("")
    const[validTitulo,setValidTitulo]=useState("")
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
            if(err.response.status===404){
                alert("El juego ya no existe")
                navigate("/juegos")
            }
        }
    }
    //Validaciones
    function validarPrecio(){
        let expresionRegular=/^\d+(\.\d{1,2})?$/
        const expr= new RegExp(expresionRegular)
        let resultado=expr.test(precio)
        if(!resultado){
            setValidPrecio("is-invalid")
        }
        else{
            setValidPrecio("")
        }
        return resultado
    }

    function validarCategoria(){
        let expresionRegular=/^[a-zA-ZáéíóúüñÁÉÍÓÚÜ\s,]+$/
        const expr= new RegExp(expresionRegular)
        let resultado=expr.test(categoria)
        if(!resultado){
            setValidCategoria("is-invalid")
        }
        else{
            setValidCategoria("")
        }
        return resultado
    }
    function validarPlataforma(){
        let expresionRegular=/^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s\d,]+$/
        const expr= new RegExp(expresionRegular)
        let resultado=expr.test(plataforma)
        if(!resultado){
            setValidPlataforma("is-invalid")
        }
        else{
            setValidPlataforma("")
        }
        return resultado
    }
    function validarTitulo(){
        let expresionRegular=/^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s\d]+$/
        const expr= new RegExp(expresionRegular)
        let resultado=expr.test(titulo)
        if(!resultado){
            setValidTitulo("is-invalid")
        }
        else{
            setValidTitulo("")
        }
        return resultado
    }
    function enviar(e){
        e.preventDefault()
        e.stopPropagation()
        let form=document.querySelector(".need-validation")
        if (!form.checkValidity()) {
            form.classList.add('was-validated')
    }
    else if(validarPrecio()===true&&validarCategoria()===true&&validarPlataforma()===true&&validarTitulo()===true){
        if(id===undefined){
            guardar()
        }
        else{
            if(del===undefined){
                editar()
            }
            else{
                let check= window.confirm("¿Estas seguro de eliminar el juego?")
                if(check){
                    eliminar()
                }
                else{
                    navigate("/juegos")
                }
            }
        }
    }
}
    return(
        <div className="container" >
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
                    <input type="text" className={`form-control ${validTitulo}`} value={titulo} onKeyUp={validarTitulo} onChange={(e)=>{setTitulo(e.target.value)}} required disabled={del===undefined?false:true}></input>
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Campo requerido, solo permite letras y numeros sin ningun carcater especial</div>
                </div>
                <div className="form-group mt-3">
                    <label className="form-label">Descripción:</label>
                    <input type="text" className="form-control" value={descripcion} onChange={(e)=>{setDescripcion(e.target.value)}} required disabled={del===undefined?false:true}></input>
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Campo requerido</div>
                </div>
                <div className="form-group mt-3">
                    <label className="form-label">Plataforma:</label>
                    <input type="text" className={`form-control ${validPlataforma}`} value={plataforma} onKeyUp={validarPlataforma} onChange={(e)=>{setPlataforma(e.target.value)}} required disabled={del===undefined?false:true}></input>
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Campo obligatorio, solo se permiten letras y numeros, además de comas(,) para separar las plataformas</div>
                </div>
                <div className="form-group mt-3">
                    <label className="form-label">Precio:</label>
                    <input type="text" className={`form-control ${validPrecio}`} value={precio} onKeyUp={validarPrecio} onChange={(e)=>{setPrecio(e.target.value)}} required disabled={del===undefined?false:true}></input>
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">El precio solo puede ser un numero entero # o un entero con dos decimales #.##</div>
                </div>
                <div className="form-group mt-3">
                    <label className="form-label">Categoria:</label>
                    <input type="text" className={`form-control ${validCategoria}`} value={categoria} onKeyUp={validarCategoria} onChange={(e)=>{setCategoria(e.target.value)}} required disabled={del===undefined?false:true}></input>
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">El campo es obligatorio y solo permite letra y comas (,) para separar las categorias</div>
                </div>
                <button className={`btn btn-${id===undefined?"success": del===undefined?"primary":"danger"} mt-3`} onClick={(e)=>{enviar(e)}}><i className={`${id===undefined?"fa-solid fa-floppy-disk": del===undefined?"fa-solid fa-pen-to-square":"fa-solid fa-trash"}`}></i>{id===undefined?" Guardar": del===undefined?" Editar":" Eliminar"}</button>
                <button className="btn btn-warning mt-3 ms-2" onClick={()=>{navigate("/juegos")}}><i className="fa-solid fa-ban"></i>{" "}Cancelar</button>
            </form>
        </div>
    )
}
export default FormularioJuego;