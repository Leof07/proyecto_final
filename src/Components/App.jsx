import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";  
import Header from "./Header";
import CelularesCrud from "./CelularesCrud";
import JuegosCrud from "./JuegosCrud";
import FormularioCelular from "./FormularioCelular";
function App() {
    const[APICelulares,SetAPICelulares]=useState("https://denny2023.azurewebsites.net/api/celulares")
    return(
        <div>
            <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/celulares" element={<CelularesCrud api={APICelulares}/>}/>
                <Route path="/celulares/add" element={<FormularioCelular api={APICelulares}/>}/>
                <Route path="/juegos" element={<JuegosCrud/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;