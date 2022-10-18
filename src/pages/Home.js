import  React from 'react'
import '../App.css'
import SearchIcon from '../search.svg'
import MovieCard  from '../MovieCard'
import { useEffect ,useState } from 'react'
import { logo, error } from '../icons'
import { CircularProgress } from "@mui/material";
import { Trending } from './Trending'
import { Recommendations } from './Recommendations'
import {InTheatres} from './InTheatres'
import { Coming } from './Coming' 
import { useNavigate } from 'react-router-dom'
import { Leaderboard } from './Leaderboard'



// const movie1 = {
//     "Title": "Amazing Spiderman Syndrome",
//     "Year": "2012",
//     "imdbID": "tt2586634",
//     "Type": "movie",
//     "Poster": "N/A"
// `https://api.themoviedb.org/3/search/${type}?api_key=0c67b96606a1f9095e44781655ac394f&language=en-US&query=${keyword}&page=${page}&include_adult=true`

export function Home(){
    const navigate = useNavigate()
    const [movies, setMovies] = useState()
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(false)
    

const searchMovies = async(title)=>{
    setLoading(true)
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&query=${title}&page=1&include_adult=false`, {
        method : 'GET'
    }).catch((e) => setErr(true))

    const data  = await response.json()
    setMovies(data.results)
    setLoading(false)
}

    useEffect(()=>{
        searchMovies('')
    }, [])


    return(
    err ? <div className='err'>
                <i className='err-icon'>{error}</i>
                <h2 className='err-text' >An error occured.<br></br> Please, check your connection and try again.</h2>
            </div> :
    <>
        <div className='app'>
            <h1 className='name'>Binge</h1>
            <i className='logo'>{logo}</i>

            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt='Search'
                    onClick={()=>searchMovies(searchTerm)}
                />
            </div>
            {
                loading ? (
                    <div className="loader">
                        <CircularProgress />
                    </div>
                    ) : 

            movies?.length > 0 
                ? (
                    <div className='container'>
                        {movies.map((movie, index) => (
                        <MovieCard key={index} {...movie}/>
                        ))}
                    </div>
                ) : (
                    <div className='empty'>No movies found</div>
                )
            }
            
        </div>
        <div className='container trend-cont'>
            <h2 className='trend'>Trending</h2>
            <button className='view-all-btn btn-1-trend' onClick={() => navigate(`/ViewTrending`)}>
                View All
            </button>
            <Trending/>
        </div>
        <div className='container airing-cont'>
            <h2 className='trend airing-cont'>Recommendations</h2>
            <button className='view-all-btn btn-2-trend' onClick={() => navigate(`/ViewRecommendations`)}>
                    View All
            </button>
            <Recommendations/>
        </div>
        <div className='container onair-cont'>
            <h2 className='trend'>Leaderboard</h2>
                <button className='view-all-btn btn-3-trend' onClick={() => navigate(`/ViewLeader`)}>
                    View All
            </button>
            <Leaderboard />
        </div>
        <div className='container leader-cont'>
            <h2 className='trend'>In Theatres </h2>
                <button className='view-all-btn btn-4-trend' onClick={() => navigate(`/ViewInTheatres`)}>
                    View All
            </button>
            <InTheatres/>
        </div>
        <div className='container latest-cont'>
            <h2 className='trend'>Upcoming</h2>
            <button className='view-all-btn btn-5-trend' onClick={() => navigate(`/ViewComing`)}>
                    View All
            </button>
            <Coming/>
        </div>


    </>
    )
}