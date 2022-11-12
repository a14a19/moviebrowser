import { Link } from "react-router-dom";
import Hero from "./hero";

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
    const detailUrl = `/movie/${movie.id}`;
    return (
        <div className="col-lg-3 col-md-3 col-2 my-4">
            <div className="card" /*style={{ width: '18rem' }}*/>
                <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p> */}
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
                <div className="container">
                    <div className="row">
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