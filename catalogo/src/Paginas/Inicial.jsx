
import { BarraNavegacao } from '../componentes/BarraNavecagao';
import { Cabecalho } from '../componentes/Cabecalho';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '../componentes/Footer';
import avatar from '../assets/avatar.jpg'; // Importando a imagem


export function Inicial() {
    
    //verificando se está na page / para aparecer o cabecalho
    const location = useLocation();
    const isHomePage = location.pathname === '/'; 

    return (
        <>
            <BarraNavegacao />
            {isHomePage && (
                <Cabecalho
                    title={'Avatar: O caminho da água'}
                    description={'Ambientada mais de uma década após os eventos do primeiro filme, Avatar 2 começa a contar a história da família Sully(Jake, Neytiri e seus filhos), os problemas que enfrentam, as distâncias que devem percorrer para que fiquem seguros, as batalhas que eles lutam para se manterem vivos e as tragédias que enfrentam.'}
                    imgBackground={avatar} // Passando a imagem
                />
            )}
            <Outlet />
            <Footer />
        </>
    );
}