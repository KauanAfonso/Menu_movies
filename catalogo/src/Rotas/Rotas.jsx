

//Navegar por rotas e poder parar
import { Routes, Route } from "react-router-dom";
import { Inicial } from "../Paginas/Inicial";
import { Perfil } from "../Paginas/Perfil";
import { Series } from "../Paginas/series";
import { Filmes } from "../componentes/Filmes";


export function Rotas() {
    return (
        //Minhas rotas, recebe um conjunto de rotas
        <Routes>
            
            <Route path='/' element={<Inicial/> }>
                <Route index element={<Filmes/> }/>
                <Route path='perfil' element={<Perfil />}/>
                <Route path='series' element={<Series/>}/>      
            </Route>
            
        </Routes>
    )
}