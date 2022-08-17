import React from "react";
import { useNavigate } from "react-router-dom";

const GenreCard = ({genre,type}) => {
    const navigate = useNavigate()
    return(
        <button className="genre_card" onClick={()=>{
            navigate(`/genre/${type}/${genre.name}/${genre.id}`)
        }}>
            <p>{genre.name}</p>
        </button>
    )
}

export default GenreCard