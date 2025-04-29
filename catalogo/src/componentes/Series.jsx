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
    const [series, setSeries] = useState([]);
    const [selectedSerie, setSelectedSerie] = useState(null);
    const [filtro, setFitro] = useState('popular')
    const [paginacao, setPaginacao] = useState(1)

    //definie a paginação como 1 quando filtra
    useEffect(() =>{
        setPaginacao(1)
    }, [filtro])

    const next_paginacao = () =>{
        setPaginacao(atual => atual+ 1)
        window.scrollTo({ top: 650, left: 0})
    }

    const back_pagination = () =>{
        setPaginacao(atual => (atual <= 1 ? 1 : atual - 1)); // Garante que não vá abaixo de 1
        window.scrollTo({ top: 650, left: 0 });
    }   

    //abindo um modal e passando um serie como parametro
    const handleOpenModal = (series) => {
        setSelectedSerie(series)
    }

    const handleCloseModal = () => {
        setSelectedSerie(null)
    }

   

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
    
