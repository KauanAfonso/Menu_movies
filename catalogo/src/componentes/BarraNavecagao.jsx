import estilos from './BarraNavegacao.module.css';

//estrutura

export function BarraNavegacao(){
    return (
        <nav className={estilos.container}>
            <ul>
                <li>Home
                    <span className="material-symbols-outlined">home</span>
                </li>
                <li>Filmes<span className="material-symbols-outlined">tv</span></li>
                <li>Perfil<span className="material-symbols-outlined">person</span></li>
            </ul>
        </nav>
    )
}