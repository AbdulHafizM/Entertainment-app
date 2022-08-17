import React,{useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.scss'
import './movie.css'
import {Routes,
    Route } from 'react-router-dom';
import Trending from './trending'
import Popular from './popular'
import NowPlaying from './nowPlaying';
import TopRated from './topRated';
import Upcoming from './upcoming';
import TrendingTv from './trendingTv';
import PopularTv from './popularTv';
import AiringTodayTv from './airingToday';
import OnAirTv from './onAirTv';
import TopRatedTv from './topRatedTv';

const Home = () => {
        //const res = await fetch(`https://api.themoviedb.org/3/movie/${data.results[0].id}/credits?api_key=0c67b96606a1f9095e44781655ac394f&language=en-US`)
        //const casts = await res.json()
        //console.log(casts)

    return(
        <div className="wrapper-home">
                <Trending />
                <Popular />
                <NowPlaying />
                <Upcoming />
                <TopRated />
                <TrendingTv />
                <PopularTv />
                <AiringTodayTv />
                <OnAirTv />
                <TopRatedTv />
        </div>
    )
}

export default Home