import estilos from './BarraNavegacao.module.css';
import { Link } from 'react-router-dom';

//estrutura

export function BarraNavegacao(){

    //Retorna a barra de navegação, que tem o logo, os links para as outras páginas
    return (
        <nav className={estilos.container}>
            <h2 className={estilos.logo}>Primeuan</h2>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='series'><li>Series</li></Link>
                    <li>Sobre</li>
                    <Link to='perfil'><li>Perfil</li></Link>
                    <li>
                        <div className={estilos.inputWrapper}>
                            <input type="text" className={estilos.campoBusca} placeholder="Pesquisar..." />
                            <span className="material-symbols-outlined">search</span>
                        </div>
                    </li>

                </ul>
        </nav>
    )
}