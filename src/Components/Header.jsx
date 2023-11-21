import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return (
    <nav className="navbar bg-dark border-bottom border-body navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          <img
            src="/tienda.png"
            alt="Logo"
            height="60  "
            className="d-inline-block align-text-top"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"} className="nav-link active" aria-current="page" href="#">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"celulares"} className="nav-link">
                Celulares
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"juegos"} className="nav-link" >
                VideoJuegos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
