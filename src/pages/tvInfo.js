import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import '../App.css'
import TvSimilar from "../TvSimilar";

const TvInfo = () => {

    const {id} = useParams()
    const [film, setFilm] = useState([])
    const [casts, setCasts] = useState([])
    const [loading, setLoading] = useState(true)
    const [similar, setSimilar] = useState([])

    const getFilm = async() => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=0c67b96606a1f9095e44781655ac394f&language=en-US`, {
            method : 'GET',
        });
        const data = await response.json()
        setFilm(data)
        setLoading(false)
    }
    const getCasts = async() => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=0c67b96606a1f9095e44781655ac394f&language=en-US`,{
            method : 'GET'
        })
        const data = await response.json()
        setCasts(data)
    }
    const getSimilar = async() => {
        const response = await fetch(`
        https://api.themoviedb.org/3/movie/${id}/similar?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1`,{
            method : 'GET'
        })
        const data = await response.json()
        setSimilar(data)
    }

    useEffect(()=>{
        getCasts()
        getFilm()
        getSimilar()
    },[])

    return(
        <div className="movie_info">
        {loading ? (
            <div className="loader">
              <CircularProgress />
            </div>
          ) : <>
           <div>
             <img src={film.poster_path !== null? `https://image.tmdb.org/t/p/original${film.poster_path}`: "https://via.placeholder.com/400"} alt={film.title}/>
            </div>
            <div className="info">
                <h4 className="tv-title">{film.name}</h4>
                <div className="flex-a">
                    <div>
                        <span className="text">First Air: </span>
                        <span>{film.first_air_date}</span>
                    </div>
                    <div>
                        <span className="text">Last Air: </span>
                        <span>{film.last_air_date}</span>
                    </div>
                    <div>
                        <span className="text">Language: </span>
                        <span>{
                            film.original_language
                        }</span>
                    </div>
                    <div>
                        <span className="text">Status: </span>
                        <span>{film.status}</span>
                    </div>
                </div>
                <div className="flex-a">
                    <div>
                        <span>Number of Seasons: </span>
                        <span>{film.number_of_seasons}</span>
                    </div>
                    <div>
                        <span>Number of episodes: </span>
                        <span>{film.number_of_episodes}</span>
                    </div>
                </div>
                <div className="genre">
                    <span className="obey">Genre: </span>
                    <div className="genre-container">
                        {
                            film.genres?.map((g)=>(
                                <span key={g.id}className="genre-card">{g.name}</span>
                            ))
                        }
                    </div>
                </div>
                <div className="overview">
                    <h3>Description</h3>
                    <p>{film.overview}</p>
                </div>
                <div className="casts genre">
                    <h3>Characters: </h3>
                    <div className="genre-container">
                    {
                        casts.cast?.map((g)=>(
                            <span key={g.id}className="genre-card">{g.name}</span>
                        ))
                    }
                    </div>
                </div>
                <div className="casts genre">
                    <h3>Crew: </h3>
                    <div className="genre-container">
                    {
                        casts.crew?.map((g)=>(
                            <span key={g.id}className="genre-card">{g.name}</span>
                        ))
                    }
                    </div>
                </div>
                 <div className="similar">
                    <h3>Similar</h3>
                    <div className="genre-container">
                        {
                            similar.results?.map((g)=>(
                            <TvSimilar key={g.id} {...g}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            </>
        }
        </div>
    )
}

export default TvInfo