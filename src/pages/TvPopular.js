import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import '../App.css'
import { CircularProgress } from "@mui/material";
import {  error } from '../icons'
import ImageSliderTv from './image-slideTv';


// 15e383204c1b8a09dbfaaa4c01ed7e17 - api key

export function TvPopular(){

    const [slides, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)


    const containerStyles = {
        width: "500px",
        height: "700px",
        margin: "0 auto",
    };

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1').then(response => {
            setMovies(response.data.results)
            setLoading(false)
        }).catch(err => (setErr(true)))
    },[])
    return(
        err ? <div className='err'>
                <i className='err-icon'>{error}</i>
                <h2>An error occured.<br></br>Please, check your connection and try again.</h2>
            </div> :
    <div className='container'>
        {
        loading ? (
                    <div className="loader">
                        <CircularProgress />
                    </div>
                    ) : <>
      <div style={containerStyles}>
        <ImageSliderTv slides={slides}/>
      </div>
          </>}
    </div>
    )
}


// https://api.themoviedb.org/3/tv/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1