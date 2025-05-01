import estilos from "./Filtro.module.css"


export function Filtro({ onSelecionar }){
    /*

    retorna o componente de filtro, que tem os botões de filtro, que são passados como props para o componente.
    Os filtros são definidos em um array de objetos, onde cada objeto tem um id e um label. O id é usado para
    identificar o filtro e o label é usado para exibir o nome do filtro na tela.
    
    */
    const filtros = [
        { id: "popular", label: "Filmes Populares" },
        { id: "upcoming", label: "Lançamentos" },
        { id: "now_playing", label: "Filmes em Cartaz" },
        { id: "top_rated", label: "Mais bem avaliados" }
    ]

    return(
        <div className={estilos.div_filtro}>
            <div className={estilos.div_background}>

            {filtros.map((filtro) =>(
                <button key={filtro.id} onClick={()=> onSelecionar(filtro.id)}>
                    {filtro.label}
                </button>
            ))}
        
            </div>
        </div>
    )
}