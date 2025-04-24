import estilos from './Card.module.css';

//passagem de parametros é o props
export function Card({ element, onOpenModal}) {
    return (
        <div className={estilos.container}>
            <img src={`http://image.tmdb.org/t/p/w500/${element.poster_path}`}onClick={() => onOpenModal(element)} />
            
        </div>
    );   
}

