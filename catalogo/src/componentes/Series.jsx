import axios from "axios";
import React, { useState, useEffect } from "react";
import estilos from './Series.module.css';
import { Card } from "./Card";
import { Modal } from "./Modal";

const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export function Serie() {
    const [series, setSeries] = useState([]);
    const [selectedSerie, setSelectedSerie] = useState(null);

    //abindo um modal e passando um movie como parametro
    const handleOpenModal = (movie) => {
        setSelectedSerie(movie)
    }

    const handleCloseModal = () => {
        setSelectedSerie(null)
    }

    useEffect(() => {
        axios.get(`${API_URL}/tv/popular?api_key=${API_key}`)
            .then(response => setSeries(response.data.results))
            .catch(erro => console.log('erro' + erro))
    }, [])

    return (
        <div>
            
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
    
