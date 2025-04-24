import estilos from './BarraNavegacao.module.css';
import { Link } from 'react-router-dom';

//estrutura

export function BarraNavegacao(){
    return (
        <nav className={estilos.container}>
            
            <h2>Kauan prime</h2>

            <ul>
                <Link to='/'> 
                    <li>Home</li>
                </Link>

                <Link to='series'>
                    <li>Series</li>
                </Link>

                <li>Sobre</li>

                <Link to='perfil'>
                    <li>Perfil</li>
                </Link>

                <li><span class="material-symbols-outlined">
                    search
                </span></li>

            </ul>
        </nav>
    )
}