import estilos from './Cabecalho.module.css';

import { Static_view } from './Static_view';

//estrutura basica para os componentes
export function Cabecalho({ title, description, imgBackground }) {
    return (
        <header className={estilos.container}>
            <Static_view title={title} description={description} imgBackground={imgBackground}/>
        </header>
    )
}