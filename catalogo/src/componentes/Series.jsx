import axios from "axios";
import React, { useState, useEffect } from "react";
import estilos from './Series.module.css';
import { Card } from "./Card";
import { Modal } from "./Modal";
import { Filtro } from "./Filtro";
import { Paginacao } from "./Paginacao";

const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export function Serie() {
    //cria os estados para as variaveis que serão utilizadas
    const [series, setSeries] = useState([]);
    const [selectedSerie, setSelectedSerie] = useState(null);
    const [filtro, setFitro] = useState('popular')
    const [paginacao, setPaginacao] = useState(1)

    //definie a paginação como 1 quando filtra
    useEffect(() =>{
        setPaginacao(1)
    }, [filtro])

    /*
    
    
    Logo a seguir temos a função next_paginacao, que é chamada quando o usuário clica no botão "Próxima Página".
    Ela incrementa o estado de paginação em 1 e rola a página para baixo, para que o usuário veja os novos resultados.

    A função back_pagination é chamada quando o usuário clica no botão "Página Anterior". Ela decrementa o estado de paginação em 1,
    mas garante que não vá abaixo de 1. Também rola a página para baixo.
    Isso é útil para evitar que o usuário tenha que rolar manualmente para ver os resultados anteriores.
    
    
    */

    const next_paginacao = () =>{
        setPaginacao(atual => atual+ 1)
        window.scrollTo({ top: 650, left: 0})
    }

    const back_pagination = () =>{
        setPaginacao(atual => (atual <= 1 ? 1 : atual - 1)); // Garante que não vá abaixo de 1
        window.scrollTo({ top: 650, left: 0 });
    }   

    /*
    
    
    A função handleOpenModal é chamada quando o usuário clica em um cartão de série. 
    Ela define o estado selectedSerie com a série selecionada, o que faz com que o modal seja exibido.

    A função handleCloseModal é chamada quando o usuário clica no botão de fechar no modal.
    Ela redefine o estado selectedSerie para null, fazendo com que o modal seja fechado.
    
    */
    const handleOpenModal = (series) => {
        setSelectedSerie(series)
    }

    const handleCloseModal = () => {
        setSelectedSerie(null)
    }

   

    //A função useEffect é chamada quando o componente é montado ou quando o estado de filtro ou paginação muda.
    //Ela faz uma requisição para a API do The Movie Database (TMDb) para obter as séries de TV com base no filtro e na paginação selecionados.
    useEffect(() => {
        axios.get(`${API_URL}/tv/${filtro}?api_key=${API_key}&page=${paginacao}`)
            .then(response => setSeries(response.data.results))
            .catch(erro => console.log('erro' + erro))
    }, [filtro, paginacao])

    return (
        <div>
            <Filtro onSelecionar={setFitro}/>
            <figure>
                {series.map(element => (
                    <Card key={element.id}
                        element={element}
                        onOpenModal={handleOpenModal}
                    />                  
                ))}
                
            </figure>
            {selectedSerie && (<Modal element={selectedSerie} onClose={handleCloseModal}/>)}

            <Paginacao text={paginacao} backPagination={back_pagination} sumPagination={next_paginacao}/>
        </div>
    )
}
    
