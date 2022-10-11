import React from 'react'
import {useState, useEffect} from 'react'
import '../App.css'
import Genre from '../Genre'
import { CircularProgress } from "@mui/material";
import {  error } from '../icons'


export function Types(){

    const [genreMovies, setMovies] = useState([])
    const [err, setErr] = useState(false)
    const [loading, setLoading] = useState(false)

    const getGenres = async() => {
        const response = await fetch(`
        https://api.themoviedb.org/3/genre/movie/list?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US`,{
            method : 'GET'
        })
        const data = await response.json()
        setMovies(data)
    }
    useEffect(()=>{
        getGenres()
    },[])
    return(
        err ? <div className='err'>
                <i className='err-icon'>{error}</i>
                <h2>An error occured.<br></br>  Please, check your connection and try again.</h2>
            </div> :
               <div className='container'>
        {
        loading ? (
                    <div className="loader">
                        <CircularProgress />
                    </div>
                    ) : genreMovies.genres?.map((movie, index) => (
             <Genre key={index} {...movie}/>
        ))}
    </div>
    )
}

