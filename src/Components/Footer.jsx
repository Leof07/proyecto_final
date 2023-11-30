import React from 'react';


function Footer() {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container d-flex justify-content-between pt-4 pb-4">
        <span>&copy; 2023 Kodigo (Leonardo Antonio Flores Barahona). Todos los derechos reservados.</span>
        <span>
          Puedes descargar el proyecto en el siguiente repositorio
          <a href="https://github.com/Leof07/proyecto_final.git" target="blank">
            <i className="fa-brands fa-github ms-4"></i>
          </a>
        </span>
      </div>
    </footer>
  );
}
export default Footer;