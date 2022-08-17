import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieCard from './movie-card'
import Pagination from './pagination';
import { CircularProgress } from "@mui/material";



const Search = ({}) => {
    const [totalResults, setTotalResults] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [loading, setLoading] = useState(true)
    const [totalPages, setTotalPages] = useState('')
    const [page, setPage] = useState(1)
    const [err, setErr] = useState(false)
    const {type,keyword} = useParams()

    const getSearchResult = async() => {
        const response = await fetch(`https://api.themoviedb.org/3/search/${type}?api_key=0c67b96606a1f9095e44781655ac394f&language=en-US&query=${keyword}&page=${page}&include_adult=true`,{
            method : 'GET'
        }).catch((e)=> setErr(true))
        const data = await response.json()
        setSearchResult(data.results)
        setTotalResults(data.total_results)
        setTotalPages(data.total_pages)
        setLoading(false)
    }
    
    useEffect(()=>{
        getSearchResult()
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [keyword, page])
    return(
        err ? <div className='err'>
                <p>Error occured</p>
            </div> :
        <div className='search'>
            <p>{`Found ${totalResults} results for '${keyword}'`}</p>
            {
                loading ? (
                    <div className="loader">
                        <CircularProgress />
                    </div>
                    ) : <div className="cont">
                {
                    searchResult?.filter((n)=> !n.gender).map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                }
                </div>
            }
            <Pagination totalPages={totalPages} setPage={setPage} page={page} />
        </div>
    )
}

export default Search