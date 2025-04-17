import axios from "axios";
import React, {useState, useEffect} from "react";
import { Card } from "./Card";
import { Modal } from "./Modal";



const APi_URl = 'https://api.themoviedb.org/3';
const API_KEY = 'af26cce282aecf5c6cc39a264f29d0a7';


export function Filmes() {
    //State guarda a situção real
    const [movies, setMovies] = useState([]);

    const [SelectedMovie, setSelectedMovie] = useState(null);
    
    //abindo um modal e passando um movie como parametro
    const handleOpenModal = (movie) => {
        setSelectedMovie(movie)
    }

    const handleCloseModal = () => {
        setSelectedMovie(null)
    }

    //()parametros, {}script de programação, []dependencias
    //O Efect é a renderização do react
    useEffect(() => {
        axios.get(`${APi_URl}/movie/popular?api_key=${API_KEY}&language=pt-BR&Page=3`)
            .then(response => {
                console.log(response.data.results);
                setMovies(response.data.results);
            })
            .catch(error => {
                console.log('erro: ' + error);
            })
    }, []);

    return (
        <div>
            <figure>
                {movies.map(element => (
                    <Card key={element.id}
                
                        element={element}
                        onOpenModal={handleOpenModal}
                    />
                ))}
            </figure>
            {SelectedMovie &&(<Modal element={SelectedMovie} onClose={handleCloseModal}/>)}
        </div>
    )


}
