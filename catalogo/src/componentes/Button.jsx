
import estilos from './Button.module.css';


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