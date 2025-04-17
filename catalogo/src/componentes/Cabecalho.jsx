import estilos from './Cabecalho.module.css';

//estrutura basica para os componentes
export function Cabecalho() {
    return (
        <header className={estilos.container}>
            <h1>KauanFlix</h1>
        </header>
    )
}