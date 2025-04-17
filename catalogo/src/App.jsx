import { Cabecalho } from './componentes/Cabecalho';
import { BarraNavegacao } from './componentes/BarraNavecagao';
import { Conteudo } from './componentes/Conteudo';
import { Footer } from './componentes/Footer';


//estrutura basica para usar React é atraves das funções
function App() {

  //para trazer o resultado da função o que quero no Return que deveter apenas 1 componentete
  return (
    //chamando o estilo pela importação estilos
    //Tags fantasmas servem para que eu consiga usar duas tags no mesmo componente
    <>
      <BarraNavegacao />
      <Cabecalho />
      <Conteudo />
      <Footer/>
      
    </>
  )
}

export default App






