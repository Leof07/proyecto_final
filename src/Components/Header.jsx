import React from "react";

function Header() {
  return (
    <nav className="navbar bg-dark border-bottom border-body navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/tienda.png"
            alt="Logo"
            height="60  "
            className="d-inline-block align-text-top"
          />
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Celulares
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                VideoJuegos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
