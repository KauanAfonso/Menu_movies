
import { BarraNavegacao } from '../componentes/BarraNavecagao';
import { Cabecalho } from '../componentes/Cabecalho';
import { Outlet } from 'react-router-dom';
import { Footer } from '../componentes/Footer';


export function Inicial() {
    return (
        <>
        <BarraNavegacao />
        <Cabecalho/>
        <Outlet />
        <Footer />
        </>
    )
}