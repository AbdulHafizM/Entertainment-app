import  React from 'react'
import './App.css'
import {Route, Routes, Link } from 'react-router-dom'
import {Home} from './pages/Home'
import {Coming} from './pages/Coming'
import {Leaderboard} from './pages/Leaderboard'
import {Types} from './pages/Types'
import {Tv} from './pages/Tv'
import ErrorPage from './pages/errorPage';
import {home, types, tv} from './icons'
import MovieInfo from './pages/movie-info'
import TvInfo from './pages/tvInfo'
import GenreInfo from './pages/genreInfo'
import { TvLeaderBoard } from './pages/tvLeaderboard'
import { Trending } from './pages/Trending'
import { Recommendations } from './pages/Recommendations' 
import { InTheatres } from './pages/InTheatres'
import { TvAiringToday } from './pages/tvAiringToday'
import { TvOnAir } from './pages/tvOnAir'
import { TvPopular } from './pages/TvPopular'
import { ViewInTheatres } from './pages/viewInTheatres'
import { ViewComing } from './pages/ViewComing'
import { ViewLeader } from './pages/ViewLeader'
import { ViewRecommendations } from './pages/ViewRecommendations'
import { ViewTvAiringToday } from './pages/ViewTvAiringToday'
import { ViewTvLeader } from './pages/ViewTvLeader'
import { ViewTvOnAir } from './pages/ViewTvOnAir'
import { ViewTvPopular } from './pages/ViewTvPopular'


// d423ebd0
function App(){
    return (
        <>
            <div className='lists'>
                <ul>
                    <li className='li'><Link to='/'><i className='home-icon icons'>{home}</i></Link></li>
                    <li className='li'><Link to='/types'><i className='types-icon icons'>{types}</i></Link></li>
                    <li className='li active'><Link to='/tv'><i className='tv-icon icons'>{tv}</i></Link></li>
                </ul>
            </div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/types' element={<Types/>}/>
                <Route path='/leaderboard' element={<Leaderboard/>}/>
                <Route path='/trending' element={<Trending/>}/>
                <Route path='/inTheatres' element={<InTheatres/>}/>
                <Route path='/upcoming' element={<Coming/>}/>
                <Route path='/recommendations' element={<Recommendations/>}/>
                <Route path='/tv' element={<Tv/>}/>
                <Route path='/movie-info/:id' element={<MovieInfo/>}/>
                <Route path='/tvInfo/:id' element={<TvInfo />}></Route>
                <Route path='/genreInfo/:id' element={<GenreInfo />}></Route>
                <Route path='/tvLeaderboard' element={<TvLeaderBoard />}></Route>
                <Route path='/tvOnAir' element={<TvOnAir />}></Route>
                <Route path='/tvAiringToday' element={<TvAiringToday />}></Route>
                <Route path='/tvPopular' element={<TvPopular />}></Route>
                <Route path='/ViewTrending' element={<ViewInTheatres />}></Route>
                <Route path='/ViewComing' element={<ViewComing />}></Route>
                <Route path='/ViewInTheatres' element={<ViewInTheatres />}></Route>
                <Route path='/ViewLeader' element={<ViewLeader />}></Route>
                <Route path='/ViewRecommendations' element={<ViewRecommendations />}></Route>
                <Route path='/ViewTvAiringToday' element={<ViewTvAiringToday />}></Route>
                <Route path='/ViewTvLeader' element={<ViewTvLeader />}></Route>
                <Route path='/ViewTvOnAir' element={<ViewTvOnAir />}></Route>
                <Route path='/ViewTvPopular' element={<ViewTvPopular />}></Route>
                <Route path='*' element={<ErrorPage />}></Route>
            </Routes>
        </>
    )
}
const list = document.querySelectorAll('.li')
function activeLink(){
    list.forEach((item) => 
      item.classList.remove('active'))
      this.classList.add('active')
    }
    list.forEach((item =>
    item.addEventListener('click', activeLink)))

// https://api.themoviedb.org/3/trending/all/day?api_key=15e383204c1b8a09dbfaaa4c01ed7e17 - trending
// https://api.themoviedb.org/3/discover/movie?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate - recommendations page
// https://api.themoviedb.org/3/movie/upcoming?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1 - upcoming
// https://api.themoviedb.org/3/tv/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1 - tv-popular
export default App


    