import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './movie.css'
import './section.scss'

const ViewMore = () => {
    const navigate = useNavigate()
    return(
        <button onClick={(e)=>{
            let ct = e.target.parentElement.firstChild.innerHTML;
            let category = ct.toLowerCase()
            navigate(`/movies/${category}/`)
            
            
        }}>View all</button>
    )
}

export default ViewMore