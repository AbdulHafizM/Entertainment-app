import React,{useEffect,useState} from "react";
import GenreCard from "./genreCard";
import './section.scss';
import CircularProgress from '@mui/material/CircularProgress';

const Movie = ({type, setType, setPlaceHolder}) => {
    const [movieGenreList, setMovieGenreList] = useState([])
    const [err, setErr] = useState(false)
    const [loading, setLoading] = useState(true)
    const getMovieGenreList = async() => {
        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=0c67b96606a1f9095e44781655ac394f&language=en-US', {
            method : 'GET',
        }).catch((e)=> setErr(true));
        const data = await response.json()
        setMovieGenreList(data.genres)
        setLoading(false)
    }
    useEffect(()=>{
        localStorage.setItem('searchType', 'movie')
        setType('movie')
        setPlaceHolder('Search for movies')
        getMovieGenreList()
    }, [])
    return(
        err ? <div className='err'>
                <p>Error occured</p>
            </div> : loading ? (
                  <div className="loader section">
                    <CircularProgress />
                  </div>
                ) : <>
        <div className="movie_section">
            {
                movieGenreList.map((genre)=>(
                    <GenreCard key={genre.id} genre={genre} type={type}/>
                ))
            }
        </div>
        </>
    )
}

export default Movie