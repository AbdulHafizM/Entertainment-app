import React, {useState, useEffect} from 'react'
import './movie.css'
import './section.scss'
import SlideWrapperTv from './slideTv'
import CircularProgress from '@mui/material/CircularProgress';
import ViewMoreTv from './viewMoreTv';

const TopRatedTv = () => {
    const [topRatedTv, setTopRatedTv] = useState([]);
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)
    const getTopRatedTv = async() => {
        const response = await fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=0c67b96606a1f9095e44781655ac394f&language=en-US&page=1', {
            method : 'GET',
        }).catch((e)=> setErr(true));
        const data = await response.json()
        setTopRatedTv(data.results)
        setLoading(false)
    }
    
  
    useEffect(()=>{
        getTopRatedTv()
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
                <h2>Top Rated</h2>
                <ViewMoreTv />
            </div>
          <SlideWrapperTv movies={topRatedTv} />
          </>}
        </div>
    )
}

export default TopRatedTv