import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Routes,
        Route } from 'react-router-dom';
import './App.scss';
import Home from './componenets/home'
import Movie from './componenets/movie';
import Tv from './componenets/tv';
import MovieInfo from './componenets/movie-info';
import TvInfo from './componenets/tvInfo';
import ViewAll from './componenets/viewAll';
import Search from './componenets/search'
import SearchBar from './componenets/searchBar';
import ViewAllTv from './componenets/viewAllTv';
import GenreFind from './componenets/genreLoad';
import ErrorPage from './componenets/errorPage';

function App() {
  const [searchType, setSearchType] = useState('')
  const [type, setType] = useState('multi')
  const [placeHolder, setPlaceHolder] = useState('Search for movies or Tv shows')
  

  //<Route path={`/search/:type/:keyword`} element={<Search />}></Route>

  return (
    <div className="app">
      <div className='wrapper'>
      <div className='side--bar fixed'>
         <nav>
          <div className='pos-nav'>
            <header>
              <svg width="1em" height="1em" viewBox="0 0 33 27" xmlns="http://www.w3.org/2000/svg"><path d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z" fill="#007AFF"></path></svg>
            </header>
            <div className='align-a'>
              <a href='/' className='px'>
              <svg fill="currentColor" width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"></path></svg>
              </a>
              <Link to='/movie' className='px'><svg fill="currentColor" width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"></path></svg></Link>
              <Link to='/tv' className='px'><svg  fill="currentColor" width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"></path></svg></Link>
            </div>
            <div>
             
            </div>
           </div>
         </nav>
      </div>

      <div className='main--section'>
        <SearchBar searchType={type} placeHolder={placeHolder}/>
         <div className='content-container'>
          <Routes>
            <Route path='/' element={<Home setSearchType={setSearchType} searchType={searchType}/>}></Route>
            <Route path='/movie' element={<Movie setType={setType} type={type} setPlaceHolder={setPlaceHolder} />}></Route>
            <Route path='/tv' element={<Tv setType={setType} type={type} setPlaceHolder={setPlaceHolder} />} />
            <Route path='/movie/:id' element={<MovieInfo />}></Route>
            <Route path='/tv/:id' element={<TvInfo />}></Route>
            <Route path='/search/:type/:keyword' element={<Search />}></Route>
            <Route path='/movies/:category' element={<ViewAll />}></Route>
            <Route path='/genre/:type/:genre/:id' element={<GenreFind />}></Route>
            <Route path='/tvshow/:category' element={<ViewAllTv />}></Route>
            <Route path='*' element={<ErrorPage />}></Route>
          </Routes>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
