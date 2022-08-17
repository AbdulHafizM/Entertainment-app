import React, {useState, useEffect} from 'react'
import './movie.css'
import './section.scss'
import SlideWrapperTv from './slideTv'
import CircularProgress from '@mui/material/CircularProgress';


const AiringTodayTv = () => {
    const [airingTv, setAiringTv] = useState([]);
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)
    const getAiringTodayTv = async() => {
        const response = await fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=0c67b96606a1f9095e44781655ac394f&language=en-US&page=1', {
            method : 'GET',
        }).catch((e)=> setErr(true));
        const data = await response.json()
        setAiringTv(data.results)
        setLoading(false)
        //const res = await fetch(`https://api.themoviedb.org/3/movie/${data.results[0].id}/credits?api_key=0c67b96606a1f9095e44781655ac394f&language=en-US`)
        //const casts = await res.json()
        //console.log(casts)
    }
    
  
    useEffect(()=>{
        getAiringTodayTv()
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
            <div className='upper trending tv'>
                <h2>Airing Today</h2>
                <button>View all</button>
            </div>
          <SlideWrapperTv movies={airingTv} />
          </>}
        </div>
    )
}

export default AiringTodayTv