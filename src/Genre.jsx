import React from "react";
import { useNavigate } from "react-router-dom";


const Latest =({name, id}) =>{
    const navigate = useNavigate()
    return (
            <div>
                <button className="genre-btn" onClick={() => navigate(`/genreInfo/${id}`)}>
                    {name}
                </button>
            </div>
    )
}
// https://www.themoviedb.org/t/p/w220_and_h330_face/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg

export default Latest

