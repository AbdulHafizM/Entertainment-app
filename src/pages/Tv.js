import React from 'react'
import '../App.css'
import { TvPopular } from './TvPopular'
import { TvAiringToday } from './tvAiringToday'
import { TvOnAir } from './tvOnAir'
import { TvLeaderBoard } from './tvLeaderboard'
import { useNavigate } from 'react-router-dom'




export function Tv(){
    const navigate = useNavigate()
    return(
        <>
            <div className='container'>
                <h2 className='tv-popular trend'>Trending</h2>
                <button className='view-all-btn-tv btn-1' onClick={() => navigate(`/ViewTvPopular`)}>
                    View All
                </button>
                <TvPopular/>
            </div>
            <div className='container airing-cont'>
                <h2 className='tv-popular airing trend'>Airing Today</h2>
                <button className='view-all-btn-tv btn-2' onClick={() => navigate(`/ViewTvAiringToday`)}>
                    View All
                </button>
                <TvAiringToday/>
            </div>
            <div className='container onair-cont'>
                <h2 className='tv-popular onair trend'>On Air</h2>
                <button className='view-all-btn-tv btn-3' onClick={() => navigate(`/ViewTvOnAir`)}>
                    View All
                </button>
                <TvOnAir/>
            </div>
            <div className='container leader-cont'>
                <h2 className='tv-popular leaderboard trend'>Leaderboard</h2>
                <button className='view-all-btn-tv btn-4' onClick={() => navigate(`/ViewTvLeader`)}>
                    View All
                </button>
                <TvLeaderBoard/>
            </div>
        </>
    )
}
