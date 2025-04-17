import estilos from './Card.module.css';

//passagem de parametros é o props
export function Card({ movie, onOpenModal}) {
    return (
        <div className={estilos.container}>
            <h3>{movie.title}</h3>
            <br />
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}onClick={() => onOpenModal(movie)} />
            
        </div>
    );   
}