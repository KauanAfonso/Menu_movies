import estilos from './Modal.module.css'

export function Modal({ element, onClose}) {
    
    if (!element) {
        return null
    }
    console.log(element);

    return (
        <div className={estilos.modalback}>
            <div className={estilos.modalContainer}>
                <div className={estilos.ModalHeader}>
                    <h2>{element.title}</h2>
                    <button onClick={onClose}>X</button>
                    <img className={estilos.imgModal} src={`http://image.tmdb.org/t/p/w500/${element.poster_path}`} />
                    <div className={estilos.imgDetalhes}>
                        <ul>
                            <li>{`Popularidade: ${element.popularity}`}</li>
                            <li>{`Data de lançamento : ${element.release_date}`}</li>
                            <li>{`Quantidade de Votos: ${element.vote_count}`}</li>
                            <li>{`Descrição: ${element.overview}`}</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
