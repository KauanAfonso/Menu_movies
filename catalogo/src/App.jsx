import React from "react";
import { BrowserRouter, Route } from "react-router-dom"; // permite a navegação entre os componentes
import { Rotas } from "./Rotas/Rotas"; //importando minhas rotas

//estrutura basica para usar React é atraves das funções
function App() {

  //para trazer o resultado da função o que quero no Return que deveter apenas 1 componentete
  return (
    <BrowserRouter>
      <Rotas/>
    </BrowserRouter>
  )
}

export default App






