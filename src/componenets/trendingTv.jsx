import React, {useState, useEffect} from 'react'
import './movie.css'
import './section.scss'
import SlideWrapperTv from './slideTv'
import CircularProgress from '@mui/material/CircularProgress';
import ViewMoreTv from './viewMoreTv';

const TrendingTv = () => {
    const [trendingTv, setTrendingTv] = useState([]);
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)
    const getTrendingTv = async() => {
        const response = await fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=0c67b96606a1f9095e44781655ac394f', {
            method : 'GET',
        }).catch((e)=> setErr(true));
        const data = await response.json()
        setTrendingTv(data.results)
        setLoading(false)
    }
    
  
    useEffect(()=>{
        getTrendingTv()
    }, [])
    return(
        <div className="wrapper-section wrapper-trending">
            {err ? <div className='err'>
                <p>Error occured</p>
            </div> :loading ? (
                  <div className="loader">
                    <CircularProgress />
                  </div>
                ) : <>
            <div className='upper trending tv'>
                <h2>Trending</h2>
                <ViewMoreTv />
            </div>
          <SlideWrapperTv movies={trendingTv} />
          </>}
        </div>
    )
}

export default TrendingTv
