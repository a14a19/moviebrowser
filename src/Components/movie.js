import Hero from "./hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
    const { id } = useParams()
    const [movieDetails, setMovieDetails] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data);
                setLoading(false);
            })
    }, [id])

    function renderDetails() {
        if (loading) {
            return <Hero text='Loading...' />
        }
        if (movieDetails) {
            // * TODO: if posterpath is null
            const posterPath = `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`;
            const backdrop = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
            
            return (
                <>
                    <Hero text={movieDetails.original_title} backdrop={backdrop}/>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={posterPath} alt='Poster' className="img-fluid shadow rounded"/>
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