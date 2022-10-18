import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import '../App.css'
import MovieCard from '../MovieCard'
import { CircularProgress } from "@mui/material";
import { error } from '../icons'


// 15e383204c1b8a09dbfaaa4c01ed7e17

export function ViewRecommendations(){

    const [movies, setMovies] = useState([])
    const [err, setErr] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate').then(response => {
            setMovies(response.data.results)
            setLoading(false)
        }).catch(err => (setErr(true)))
    },[])
    return(
         err ? <div className='err'>
                            <i className='err-icon'>{error}</i>
                <h2 >An error occured.<br></br>  Please, check your connection and try again.</h2>
            </div> :
    <div className='container'>
        {
        loading ? (
                    <div className="loader">
                        <CircularProgress />
                    </div>
                    ) : movies.map((movie, index) => (
             <MovieCard key={index} {...movie}/>
        ))}
    </div>
    )
}