import estilos from './Paginacao.module.css';


export function Paginacao({sumPagination, backPagination, text}){
    
    //retorna o componente de paginação, que tem os botões de voltar e avançar, além do texto que mostra a página atual.
    return(

        <div className={estilos.div_main}>
            <button onClick={backPagination}>
                <span class="material-symbols-outlined">
                    chevron_left
                </span>
            </button>

            <p style={{color:'white'}}>Página: {text}</p>

            <button onClick={sumPagination}>
                <span class="material-symbols-outlined">
                    chevron_right
                </span>
            </button>

          
        </div>
        
    )
}