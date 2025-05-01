import estilos from './Modal.module.css'

export function Modal({ element, onClose}) {
    
    //caso for nulo, retorna null, ou seja não renderiza nada.
    if (!element) {
        return null
    }
    console.log(element);

    //retorna o modal com as informações do filme ou série selecionada. Utiliza onCloe para fechar o modal.
    return (
        <div className={estilos.modalback}>
            <div className={estilos.modalContainer}>
                <div className={estilos.ModalHeader}>
                    <h2>{element.title}</h2>
                    <button onClick={onClose}>X</button>
                    <img className={estilos.imgModal} src={`http://image.tmdb.org/t/p/w500/${element.poster_path}`} />
                    <div className={estilos.imgDetalhes}>
                        <ul>
                            <li>{`Descrição: ${element.overview}`}</li>
                            <li>{`Popularidade: ${element.popularity}`}</li>
                            <li>{`Data de lançamento : ${element.release_date}`}</li>
                            <li>{`Quantidade de Votos: ${element.vote_count}`}</li>
                            <li>{`Nota: ${element.vote_average}`}</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
