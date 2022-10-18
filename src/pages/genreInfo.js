import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import '../App.css'
import MovieCard from "../MovieCard";

const GenreInfo = () => {
    const lang = {
        'en' : 'English',
        'ja' : 'Japanese',
        'fr' : 'French'
    }
    const {id} = useParams()
    const [film, setFilm] = useState([])
    const [loading, setLoading] = useState(true)

    const getFilm = async() => {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=6&with_genres=${id}`, {
            method : 'GET',
        });
        const data = await response.json()
        setFilm(data)
        setLoading(false)
    }

    useEffect(()=>{
        getFilm()
    },[])

    return(
        <div className="movie_info">
        {loading ? (
            <div className="loader">
              <CircularProgress />
            </div>
          ) : <>
                {
                    film.results?.map((g)=>(
                     <MovieCard key={g.id} {...g}/>
                    ))
                        }
            </>
        }
        </div>
    )
}


// https://api.themoviedb.org/3/discover/movie?api_key=###&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=1990&release_date.lte=1999&vote_average.gte=60.0&with_genres=Action

// https://api.themoviedb.org/3/discover/movie?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=6&with_genres=28

export default GenreInfo