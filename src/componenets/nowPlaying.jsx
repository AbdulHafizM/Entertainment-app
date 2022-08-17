import React, {useState, useEffect} from 'react'
import './movie.css'
import './section.scss'
import SlideWrapper from './slide'
import CircularProgress from '@mui/material/CircularProgress';
import ViewMore from './viewMore';


const NowPlaying = () => {
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)
    const getNowPlayingMovies = async() => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=0c67b96606a1f9095e44781655ac394f&language=en-US&page=1', {
            method : 'GET',
        }).catch((e)=> setErr(true));
        const data = await response.json()
        setNowPlayingMovies(data.results)
        setLoading(false)
        
    }
    
  
    useEffect(()=>{
        getNowPlayingMovies()
    }, [])
    return(
        <div className="wrapper-section wrapper-trending">
            {err ? <div className='err'>
                <p>Error occured</p>
            </div> : loading ? (
                  <div className="loader">
                    <CircularProgress />
                  </div>
                ) : <>
            <div className='upper trending'>
                <h2>Now Playing</h2>
                <ViewMore />
            </div>
          <SlideWrapper movies={nowPlayingMovies} />
          </>}
        </div>
    )
}

export default NowPlaying