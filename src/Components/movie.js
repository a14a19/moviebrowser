import Hero from "./hero";

import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import MovieContext from "../Context/movieContext";

const MovieView = () => {
    const movieIds = useContext(MovieContext)
    const { id } = useParams()
    const [movieDetails, setMovieDetails] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                movieIds.setIds(data.id);
                setMovieDetails(data);
                setLoading(false);
            })
    }, [id])

    function renderDetails() {
        if (loading) {
            return <Hero text='Loading...' />
        }
        if (movieDetails) {
            const posterPath = `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`;
            const backdrop = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;

            return (
                <>
                    <Hero text={movieDetails.original_title} backdrop={backdrop} />
                    <div className="container-fluid my-5 px-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={posterPath ? posterPath : backdrop} alt='Poster' className="img-fluid shadow rounded" />
                            </div>
                            <div className="col-md-9">
                                <h2>{movieDetails.original_title}</h2>
                                <p className="lead">
                                    {movieDetails.overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
    return renderDetails()
}

export default MovieView;