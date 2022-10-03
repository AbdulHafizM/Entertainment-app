import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import './movie.css'
import './section.scss'

const MovieInfo = () => {
    const {id} = useParams()
    const [film, setFilm] = useState([])
    const [loading, setLoading] = useState(true)
    const [casts, setCasts] = useState([])
    const getFilm = async() => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0c67b96606a1f9095e44781655ac394f&language=en-US`, {
            method : 'GET',
        });
        const data = await response.json()
        setFilm(data)
        setLoading(false)
    }
    const getCasts = async() => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=0c67b96606a1f9095e44781655ac394f&language=en-US`,{
            method : 'GET'
        })
        const data = await response.json()
        setCasts(data)
    }
    useEffect(()=>{
        getCasts()
        getFilm()
    }, [])

    return(
        <div className="movie_info">
            {loading ? (
            <div className="loader section">
              <CircularProgress />
            </div>
          ) : <>
           <div>
             <img src={film.poster_path !== null? `https://image.tmdb.org/t/p/original${film.poster_path}`: "https://via.placeholder.com/400"} alt={film.title}/>
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
                        <span>Year:</span>
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
                    <h3>Casts</h3>
                    <div className="genre-container">
                        {
                            casts.cast?.map((g)=>(
                                <span key={g.id} className="genre-card">{g.name}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
            </>}
        </div>
    )
}

export default MovieInfo