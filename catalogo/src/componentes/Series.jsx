import axios from "axios";
import React, { useState, useEffect } from "react";
import estilos from './Series.module.css';
import { Card } from "./Card";
import { Modal } from "./Modal";
import { Filtro } from "./Filtro";

const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export function Serie() {
    const [series, setSeries] = useState([]);
    const [selectedSerie, setSelectedSerie] = useState(null);
    const [filtro, setFitro] = useState('popular')

    //abindo um modal e passando um movie como parametro
    const handleOpenModal = (movie) => {
        setSelectedSerie(movie)
    }

    const handleCloseModal = () => {
        setSelectedSerie(null)
    }

    useEffect(() => {
        axios.get(`${API_URL}/tv/${filtro}?api_key=${API_key}&page=1`)
            .then(response => setSeries(response.data.results))
            .catch(erro => console.log('erro' + erro))
    }, [filtro])

    return (
        <div>
            <Filtro onSelecionar={setFitro}/>
            <h1>Series</h1>
            <figure>
                {series.map(element => (
                    <Card key={element.id}
                        element={element}
                        onOpenModal={handleOpenModal}
                    />                  
                ))}
                
            </figure>
            {selectedSerie && (<Modal element={selectedSerie} onClose={handleCloseModal}/>)}
        </div>
    )
}
    
