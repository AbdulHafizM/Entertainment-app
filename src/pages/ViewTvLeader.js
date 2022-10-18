import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import '../App.css'
import  TvCard from '../TvCard'
import { CircularProgress } from "@mui/material";
import { error } from '../icons'




export function ViewTvLeader(){

    const [movies, setMovies] = useState([])
    const [err, setErr] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1').then(response => {
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
        {loading ? (
                    <div className="loader">
                        <CircularProgress />
                    </div>
                    ) : movies.map((movie, index) => (
             <TvCard key={index} {...movie}/>
        ))}
    </div>
        
    )
}