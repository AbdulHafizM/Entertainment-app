import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./movie-card";
import { CircularProgress } from "@mui/material";
import Pagination from "./pagination";
import './section.scss'
import './movie.css'


const GenreFind = () => {
    const [genreMovies, setGenreMovies] = useState([])
    const [totalPages, setTotalPages] = useState('')
    const [totalResults, setTotalResults] = useState('')
    const [loading, setLoading] = useState(true)
    const {type, genre, id} = useParams()
    const [page, setPage] = useState(1)
    const [err, setErr] = useState(false)
    const getGenreMovies = async() => {
        const response = await fetch(`
        https://api.themoviedb.org/3/discover/${type}?api_key=0c67b96606a1f9095e44781655ac394f&language=en-US&include_adult=false&include_video=false&page=${page}&with_genres=${id}&with_keywords=${genre}`, {
            method : 'GET',
        }).catch((e)=> setErr(true));
        const data = await response.json()
        setGenreMovies(data.results)
        setLoading(false)
        setTotalPages(data.total_pages)
        setTotalResults(data.total_results)
    }
    useEffect(()=>{
        getGenreMovies()
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    },[page])
    return(
        err ? <div className='err'>
                <p>Error occured</p>
            </div> :
        <div className="load_genre">
            <h2>{genre}</h2>
            <p>{`Total Results for ${genre} : '${totalResults}'`}</p>
                {loading ? (
                    <div className="loader section">
                        <CircularProgress />
                    </div>
                    ) : <div className="cont-genre">
                        {
                            genreMovies.map((movie)=>(
                                <MovieCard key={movie.id} movie={movie}/>
                            ))
                        }
                </div>
            }
            <Pagination totalPages={totalPages} setPage={setPage} page={page}/>
        </div>
    )
}


export default GenreFind