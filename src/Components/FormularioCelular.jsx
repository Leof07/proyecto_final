import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormularioCelular({ api }) {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [color, setColor] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [operadora, setOperadora] = useState("");
  const navigate = useNavigate();

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

  function enviar(e) {
    e.preventDefault();
    e.stopPropagation();
    let form = document.querySelector(".need-validation");
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
    } else {
      Guardar();
    }
  }
  return (
    <div>
      <form className="need-validation" noValidate>
        <div className="form-group mt-3">
          <label className="form-label">Marca:</label>
          <input
            type="text"
            className="form-control"
            value={marca}
            onChange={(e) => {
              setMarca(e.target.value);
            }}
            required
          />
          <div class="valid-feedback">Correcto</div>
          <div class="invalid-feedback">Campo requerido</div>
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
          />
          <div class="valid-feedback">Correcto</div>
          <div class="invalid-feedback">Campo requerido</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">Color:</label>
          <input
            type="text"
            className="form-control"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            required
          />
          <div class="valid-feedback">Correcto</div>
          <div class="invalid-feedback">Campo requerido</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">Precio:</label>
          <input
            type="text"
            className="form-control"
            value={precio}
            onChange={(e) => {
              setPrecio(e.target.value);
            }}
            required
          />
          <div class="valid-feedback">Correcto</div>
          <div class="invalid-feedback">Campo requerido</div>
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
          />
          <div class="valid-feedback">Correcto</div>
          <div class="invalid-feedback">Campo requerido</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">Operadora:</label>
          <input
            type="text"
            className="form-control"
            value={operadora}
            onChange={(e) => {
              setOperadora(e.target.value);
            }}
            required
          />
          <div class="valid-feedback">Correcto</div>
          <div class="invalid-feedback">Campo requerido</div>
        </div>
        <button className="btn btn-success mt-3" onClick={(e) => enviar(e)}>
          Guardar
        </button>
        <button
          className="btn btn-warning mt-3 ms-2"
          onClick={() => navigate("/celulares")}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}
export default FormularioCelular;
