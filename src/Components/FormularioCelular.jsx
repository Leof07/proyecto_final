import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function FormularioCelular({ api,del}) {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [color, setColor] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [operadora, setOperadora] = useState("");
  const navigate = useNavigate();
  const{id}=useParams()
  const[validMarca, setValidMarca] = useState("")
  const[validColor, setValidColor]=useState("")
  const[validPrecio, setValidPrecio]=useState("")
  const[validOperadora, setValidOperadora]=useState("")

useEffect(()=>{
  if(id!==undefined){
    cargarCelular()
  }
},[])
  async function editar(){
    try{
        let celular={
            celularId:id,
            marca:marca,
            modelo:modelo,
            color:color,
            precio:precio,
            descripcion:descripcion,
            operadora:operadora
        }
        let res=await axios.put(api,celular)
        let datos=await res.data
        if(datos.status===1){
          alert(datos.message)
          navigate("/celulares")
      }
    }
    catch(err){
      alert(err)
      console.log(err)
      if(err.response.status===500){
        alert("El celular ya no existe")
        navigate("/celulares")
      }
    }
  }

  async function Guardar() {
    try {
      let celular = {
        marca: marca,
        modelo: modelo,
        color: color,
        precio: precio,
        descripcion: descripcion,
        operadora: operadora,
      };
      let res = await axios.post(api, celular);
      let datos = await res.data;
      if (datos.status === 1) {
        alert(datos.message);
        navigate("/celulares");
      }
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }

  async function cargarCelular(){
    try{
      let rest=await axios(api+"/"+id)
      let datos=await rest.data
      setMarca(datos.marca)
      setModelo(datos.modelo)
      setColor(datos.color)
      setPrecio(datos.precio)
      setDescripcion(datos.descripcion)
      setOperadora(datos.operadora)

    }
    catch(err){
      alert(err)
      console.log(err)
      if(err.response.status===404){
        alert("El celular ya no existe")
        navigate("/celulares")
      }
    }
  }
  async function eliminar(){
    try{
      let res= await axios.delete(api+"?id="+id)
      let datos= await res.data
      if(datos.status===1){
        console.log("Algo salio mal")
        alert(datos.message)
        navigate("/celulares")
      }

    }
    catch(err){
      if(err.response.status===404){
          alert("El celular no existe")
          navigate("/celulares")
      }
      else{
          alert(err)
          console.log(err)
      }
    }
  }
//Validaciones
  function validarMarca(){
    let expresionRegular=/^[a-zA-ZáéíóúüñÁÉÍÓÚÜ\s]+$/
    const expr= new RegExp(expresionRegular)
    let resultado=expr.test(marca)
    if(!resultado){
      setValidMarca("is-invalid")
    }
    else{
      setValidMarca("")
    }
    return resultado
  }
  function validarColor(){
    let expresionRegular=/^[a-zA-ZáéíóúüñÁÉÍÓÚÜ\s,]+$/
    const expr= new RegExp(expresionRegular)
    let resultado=expr.test(color)
    if(!resultado){
      setValidColor("is-invalid")
    }
    else{
      setValidColor("")
    }
    return resultado
  }
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
  function validarOperadora(){
    let expresionRegular=/^[a-zA-ZáéíóúüñÁÉÍÓÚÜ\s,]+$/
    const expr= new RegExp(expresionRegular)
    let resultado=expr.test(operadora)
    if(!resultado){
      setValidOperadora("is-invalid")
    }
    else{
      setValidOperadora("")
    }
    return resultado
  }
  function enviar(event){
    event.preventDefault()
    event.stopPropagation()
    let form=document.querySelector(".need-validation")
    if (!form.checkValidity()) {
        form.classList.add('was-validated')
    }
    else if(validarMarca()===true&&validarColor()===true&&validarPrecio()===true&&validarOperadora()===true){
        if(id===undefined){
          Guardar()
          }else if(!del===true){
            editar()
          }
          else
          {
            let respuesta=window.confirm("¿Estas seguro que deseas eliminar el celular?")
                if(respuesta===true){
                    eliminar()
                }
                else{
                    navigate("/celulares")
                } 
          }
    }
}
  return (
    <div>
      <form className="need-validation" noValidate>
        {
          id!==undefined?
            <div className="form-group mt-3">
            <label className="form-label">ID: </label>
            <input type="text" className="form-control" value={id} readOnly disabled/>
            </div>
            :
            ""
        }
        <div className="form-group mt-3">
          <label className="form-label">Marca:</label>
          <input
            type="text"
            className={`form-control ${validMarca}`}
            onKeyUp={validarMarca}
            value={marca}
            onChange={(e) => {
              setMarca(e.target.value);
            }}
            required
            disabled={
              del===undefined?false:true
            }
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">El campo solo debe contener letras</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">Modelo:</label>
          <input
            type="text"
            className="form-control"
            value={modelo}
            onChange={(e) => {
              setModelo(e.target.value);
            }}
            required
            disabled={
              del===undefined?false:true
            }
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Campo requerido</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">Color:</label>
          <input
            type="text"
            className={`form-control ${validColor}`}
            onKeyUp={validarColor}
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            required
            disabled={
              del===undefined?false:true
            }
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">El campo no debe contener numeros ni caracteres especiales</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">Precio:</label>
          <input
            type="text"
            className={`form-control ${validPrecio}`}
            value={precio}
            onKeyUp={validarPrecio}
            onChange={(e) => {
              setPrecio(e.target.value);
            }}
            required
            disabled={
              del===undefined?false:true
            }
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">El campo solo permite numeros enteros # o numeros con dos decimales #.##</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">Descripcion:</label>
          <input
            type="text"
            className="form-control"
            value={descripcion}
            onChange={(e) => {
              setDescripcion(e.target.value);
            }}
            required
            disabled={
              del===undefined?false:true
            }
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Campo requerido</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">Operadora:</label>
          <input
            type="text"
            className={`form-control ${validOperadora}`}
            value={operadora}
            onKeyUp={validarOperadora}
            onChange={(e) => {
              setOperadora(e.target.value);
            }}
            required
            disabled={
              del===undefined?false:true
            }
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">El campo solo permite letras y comas (,) para separar operadoras</div>
        </div>
        <button className={`btn btn-${id===undefined?"success" : del===true ?"danger":"primary"} mt-3`} onClick={(e) => enviar(e)}>
          <i className={`${id===undefined?"fa-solid fa-floppy-disk": del===undefined?"fa-solid fa-pen-to-square":"fa-solid fa-trash"}`}></i>
          {
            id===undefined?
            " Guardar"
            :
            del===true?
            " Eliminar"
            :
            " Editar"
          }
        </button>
        <button
          className="btn btn-warning mt-3 ms-2"
          onClick={() => navigate("/celulares")}
        >
          <i class="fa-solid fa-ban"></i>{" "}
         Cancelar
        </button>
      </form>
    </div>
  );
}
export default FormularioCelular;
