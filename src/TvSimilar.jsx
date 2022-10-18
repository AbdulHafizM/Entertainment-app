import React from "react";
import { useNavigate } from "react-router-dom";

const getPosterUrl = (posterpath )=>{
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

const TvSimilar =({poster_path,backdrop_path,  title,name, first_air_date, release_date, popularity, id}) =>{
    const navigate = useNavigate()
    return (
        <button>
            <div className='movie'>
                <div>
                    <p>{release_date || first_air_date}</p>
                </div>

                <div>
                    <img 
                        src={getPosterUrl(poster_path||backdrop_path)}
                        alt={title || name}
                    />
                </div>

                <div>
                    <span>{popularity}</span>
                    <h3>{title || name}</h3>
                </div>
            </div>
        </button>
    )
}
// https://www.themoviedb.org/t/p/w220_and_h330_face/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg

export default TvSimilar

