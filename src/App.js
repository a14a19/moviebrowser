import './App.css';
import Navbar from './Components/navbar';
import Home from './Components/home';
import AboutView from './Components/about';
import SearchView from './Components/search';
import MovieView from './Components/movie';
import Wishlist from './Components/wishlist';
import Footer from './Components/footer';

import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieContext from './Context/movieContext';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchTexts] = useState('');
  const [ids, setIds] = useState('');
  const [wishlists, setWishlists] = useState([])
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    if (searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results)
        })
    }
  }, [searchText])

  return (
    <MovieContext.Provider value={{ ids, setIds, searchText, setSearchResults, searchResults, wishlists, setWishlists, liked, setLiked }}>
      <Navbar searchText={searchText} setSearchTexts={setSearchTexts} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<AboutView />} />
        <Route
          exact path='/search'
          element={
            <SearchView
              keyword={searchText}
              searchResults={searchResults}
            />
          }
        />
        <Route exact path='/movie/:id' element={<MovieView />} />
        <Route exact path='/wishlist' element={<Wishlist />} />
      </Routes>
      <Footer />
    </MovieContext.Provider>
  );
}

export default App;
