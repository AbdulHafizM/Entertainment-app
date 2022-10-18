import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import MovieCard from "../MovieCard";
import '../App.css'


const TypesInfo = () => {
    const {id} = useParams()
    const [film, setFilm] = useState([])
    const [loading, setLoading] = useState(true)
    const [casts, setCasts] = useState([])
    const [similar, setSimilar] = useState([])
    
    const getFilm = async() => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US`, {
            method : 'GET',
        });
        const data = await response.json()
        setFilm(data)
        setLoading(false)
    }
    const getCasts = async() => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US`,{
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
    }, [])

    return(
        <div className="movie_info">
            {loading ? (
            <div className="loader">
              <CircularProgress />
            </div>
          ) : <>
           <div>
             <img className="movie-info-head" src={film.poster_path !== null? `https://image.tmdb.org/t/p/original${film.poster_path}`: "https://via.placeholder.com/400"} alt={film.title}/>
            </div>
            <div className="info">
                <h1>{film.title}</h1>
                <span className="tag">{film.tagline}</span>
                <div className="flex-a">
                    <div>
                        <span>Length:</span>
                        <span>{film.runtime} min</span>
                    </div>
                    <div>
                        <span>Language:</span>
                        <span>{film.original_language}</span>
                    </div>
                    <div>
                        <span>Release Date:</span>
                        <span>{film.release_date}</span>
                    </div>
                    <div>
                        <span>Status:</span>
                        <span>{film.status}</span>
                    </div>
                </div>
                <div className="genre">
                    <span>Genre</span>
                    <div className="genre-container">
                        {
                            film.genres?.map((g)=>(
                                <span key={g.id}className="genre-card">{g.name}</span>
                            ))
                        }
                    </div>
                </div>
                <div className="overview">
                    <h3>Overview</h3>
                    <p>{film.overview}</p>
                </div>
                <div className="casts">
                    <h3>Characters</h3>
                    <div className="genre-container">
                        {
                            casts.cast?.map((g)=>(
                                <span key={g.id} className="genre-card">{g.name}</span>
                            ))
                        }
                    </div>
                </div>
                <div className="casts">
                    <h3>Crew</h3>
                    <div className="genre-container">
                        {
                            casts.crew?.map((g)=>(
                                <span key={g.id} className="genre-card">{g.name}</span>
                            ))
                        }
                    </div>
                </div>
                <div className="similar">
                    <h3>Similar</h3>
                    <div className="genre-container">
                        {
                            similar.results?.map((g)=>(
                            <MovieCard key={g.id} {...g}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            </>}
        </div>
    )
}

// <MovieCard key={g.id} {...g}/>

export default TypesInfo