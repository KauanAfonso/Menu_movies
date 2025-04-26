import estilos from "./Filtro.module.css"


export function Filtro({ onSelecionar }){


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