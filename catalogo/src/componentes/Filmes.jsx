import axios from "axios";
import React, {useState, useEffect} from "react";
import { Card } from "./Card";
import { Modal } from "./Modal";
import { Filtro } from "./Filtro";
import { Paginacao } from "./Paginacao";
import estilos from "./Filmes.module.css";



const APi_URl = 'https://api.themoviedb.org/3';
const API_KEY = 'af26cce282aecf5c6cc39a264f29d0a7';


export function Filmes() {
    //State guarda a situção real
    const [movies, setMovies] = useState([]);

    const [SelectedMovie, setSelectedMovie] = useState(null);

    const [filtro, setFitro] = useState('popular');

    const[paginacao, setPaginacao] = useState(1);
    
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
        axios.get(`${APi_URl}/movie/${filtro}?api_key=${API_KEY}&language=pt-BR&page=${paginacao}`)
            .then(response => {
                console.log(response.data.results);
                setMovies(response.data.results);
            })
            .catch(error => {
                console.log('erro: ' + error);
            })
    }, [filtro, paginacao]);

    return (
        <div>
            
                <Filtro onSelecionar={setFitro}/>
            
            <figure>
                {movies.map(element => (
                    <Card key={element.id}
                
                        element={element}
                        onOpenModal={handleOpenModal}
                    />
                ))}
            </figure>
            {SelectedMovie &&(<Modal element={SelectedMovie} onClose={handleCloseModal}/>)}


            <Paginacao text={paginacao} sumPagination={next_paginacao} backPagination={back_pagination}/>

          
        </div>
    )


}
