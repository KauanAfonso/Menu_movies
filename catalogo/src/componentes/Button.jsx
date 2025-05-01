
import estilos from './Button.module.css';


/*

retorna o componente de dois botões, os botões de assistir e ver detalhes.

*/

export function Button({ text }) {
    return (
        <button className={estilos.btn_primary}>
            {text}
        </button>
    )
}


export function Button_Second({ text }) {
    return (
        <button className={estilos.btn_second}>
            {text}
        </button>
    )
}