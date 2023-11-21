import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";  
import Header from "./Header";
import CelularesCrud from "./CelularesCrud";
import JuegosCrud from "./JuegosCrud";
function App() {

    return(
        <div>
            <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/celulares" element={<CelularesCrud/>}/>
                <Route path="/juegos" element={<JuegosCrud/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;