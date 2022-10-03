import React,{useState} from 'react';
import './movie.css'
import '../App.scss'
import { useNavigate } from "react-router-dom";
import { Skeleton } from '@mui/material';


const MovieCard = ({movie}) => {
    const [imageLoad, setImageLoad] = useState(false)
    const navigate = useNavigate()
    let releaseDate = movie.release_date || movie.first_air_date
    let title = movie.title || movie.name
    let type = movie.type || movie.media_type
    
    console.log(imageLoad)
    movie.release_date !== undefined ? type = 'movie' : type = 'tv'
    return (
        <button className="movie" onClick={()=>{
            navigate(`/${type}/${movie.id}`)
        }}>
            <div>
                {!imageLoad && <Skeleton className='skeleton' width={'100%'} height={'100%'}/>}
                <img src={movie.poster_path !== null? `https://image.tmdb.org/t/p/original${movie.poster_path}`: "https://via.placeholder.com/400"}  onLoad={()=>{setImageLoad(true)}} alt={movie.Title} ref={(node) => {
                    imageLoad ? node?.style.setProperty("display", "block", "important") :
                        node?.style.setProperty("display", "none", "important");
                }}/>
            </div>
            <div>
                <span>{releaseDate?.slice(0,4)}</span> <span>{type}</span>
                <p>{title?.length > 24 ? `${title?.slice(0,24)}...` : title}</p>
            </div>
      </button>
    )
}

export default MovieCard