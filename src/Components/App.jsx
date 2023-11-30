import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";  
import Header from "./Header";
import CelularesCrud from "./CelularesCrud";
import JuegosCrud from "./JuegosCrud";
import FormularioCelular from "./FormularioCelular";
import FormularioJuego from "./FormularioJuego";
import Footer from "./Footer";
function App() {
    const[APICelulares,SetAPICelulares]=useState("https://denny2023.azurewebsites.net/api/celulares")
    const[APIJuegos,SetAPIJuegos]=useState("https://denny2023.azurewebsites.net/api/juegos")
    return(
        <div>
            <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/celulares" element={<CelularesCrud api={APICelulares}/>}/>
                <Route path="/celulares/add" element={<FormularioCelular api={APICelulares}/>}/>
                <Route path="/celulares/editar/:id" element={<FormularioCelular api={APICelulares}/>}/>
                <Route path="celulares/eliminar/:id" element={<FormularioCelular api={APICelulares} del={true}/>}/>
                <Route path="/juegos" element={<JuegosCrud api={APIJuegos}/>}/>
                <Route path="/juegos/add" element={<FormularioJuego api={APIJuegos}/>}/>
                <Route path="/juegos/editar/:id" element={<FormularioJuego api={APIJuegos}/>}/>
                <Route path="/juegos/eliminar/:id" element={<FormularioJuego api={APIJuegos} del={true}/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer />
            </BrowserRouter>
        </div>
    )
}
export default App;