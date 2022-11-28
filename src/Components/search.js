import Hero from "./hero";

import { useContext } from "react";
import { Link } from "react-router-dom";
import MovieContext from "../Context/movieContext";


const MovieCard = ({ movie }) => {
    const movieIds = useContext(MovieContext)

    const posterUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
    const detailUrl = `/movie/${movie.id}`;
    let rest = movieIds.wishlists

    const clickedW = (i) => {
        movieIds.setLiked(current => !current)
        if (!movieIds.wishlists.includes(i)) {
            movieIds.setWishlists([...rest, i])
        } else {
            let index = movieIds.wishlists.indexOf(i);
            movieIds.wishlists.splice(index, 1);
        }
    }

    return (
        <div className="col col-xl-2 col-lg-2 col-md-3 col-sm-2 col-xs-2 my-4 px-1">
            <div className="card position-relative" title={movie.title} >
                <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
                <button className="position-absolute top-0 end-0 p-1 bg-light p-auto border-0 btn-outline-none" title='Add to wishlist' onClick={() => clickedW(movie.id)}>
                    <i className={movieIds.wishlists.includes(movie.id) ? 'fa-solid fa-heart text-danger' : "fa-solid fa-heart"}></i>
                </button>
                <div className="card-body">
                    <Link to={detailUrl} className="btn btn-primary">Show details</Link>
                </div>
            </div>
        </div>
    )
}

const SearchView = ({ keyword, searchResults }) => {
    const title = `You are searching for ${keyword}`

    const results = searchResults.map((obj, i) => {
        return (
            <MovieCard movie={obj} key={i} />
        )
    })

    return (
        <>
            <Hero text={title} />
            {results &&
                <div className="container-fluid">
                    <div className="row flex-wrap mx-3">
                        {results}
                    </div>
                </div>
            }
        </>
    )
}

export default SearchView;

// TMDB movie api = 037ce5b01644c77bdea3d4324fd003c5
// movie link = https://api.themoviedb.org/3/movie/50?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US
// https://api.themoviedb.org/3/search/movie?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US&query=star-wars&page=1&include_adult=false