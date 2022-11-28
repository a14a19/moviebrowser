import Hero from "./hero";

import axios from 'axios';
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MovieContext from "../Context/movieContext";

const Home = () => {
    const movieIds = useContext(MovieContext)

    const [popular, setPopular] = useState([])
    const [topRated, setTopRated] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [latest, setLatest] = useState({})
    const [suggestion, setSuggestion] = useState([])
    // const [error, setError] = useState(false)

    const detailUrl = `/movie/`;
    const backdrop = `https://image.tmdb.org/t/p/original${latest.backdrop_path}`;
    const poster = `https://image.tmdb.org/t/p/original${latest.poster_path}`;

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

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US&page=1`)
            .then(data => {
                setPopular(data.data.results)
            })
            .catch(err => err.message)

        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US&page=1`)
            .then(data => {
                setTopRated(data.data.results)
            })
            .catch(err => err.message)

        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US&page=1`)
            .then(data => {
                setUpcoming(data.data.results)
            })
            .catch(err => err.message)

        axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US&page=1`)
            .then(data => {
                setLatest(data.data)
            })
            .catch(err => err.message)

        if (movieIds.ids) {
            axios.get(`https://api.themoviedb.org/3/movie/${movieIds.ids}/similar?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US&page=1`)
                .then(data => {
                    setSuggestion(data.data.results)
                })
                .catch(err => err.message)
        }
    }, [])

    const popularRes = popular.map((item, i) => {
        return (
            <div key={i} className='col-lg-3 col-md-3 col-2 col-xs-6 my-4 align-self-center position-relative'>
                <Link to={detailUrl + item.id} className="card" style={{ width: '10rem' }}>
                    <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt='...' className="card-img-top" />
                </Link>
                <button className="position-absolute bottom-0 start-0 p-1 bg-light p-auto border-0 btn-outline-none" title='Add to wishlist' onClick={() => clickedW(item.id)}>
                    <i className={movieIds.wishlists.includes(item.id) ?'fa-solid fa-heart text-danger' : "fa-solid fa-heart"}></i>
                </button>
            </div>
        )
    })
    const topRatedRes = topRated.map((item, i) => {
        return (
            <div key={i} className='col-lg-3 col-md-3 col-2 col-xs-6 my-4 align-self-center position-relative'>
                <Link to={detailUrl + item.id} className="card  text-decoration-none text-dark" style={{ width: '10rem' }}>
                    <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt='...' className="card-img-top" />
                </Link>
                <button className="position-absolute bottom-0 start-0 p-1 bg-light p-auto border-0 btn-outline-none" title='Add to wishlist' onClick={() => clickedW(item.id)}>
                    <i className={movieIds.wishlists.includes(item.id) ?'fa-solid fa-heart text-danger' : "fa-solid fa-heart"}></i>
                </button>
            </div>
        )
    })
    const upcomingRes = upcoming.map((item, i) => {
        return (
            <div key={i} className='col-lg-3 col-md-3 col-2 col-xs-6 my-4 align-self-center position-relative'>
                <Link to={detailUrl + item.id} className="card" style={{ width: '10rem' }}>
                    <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt='...' className="card-img-top" />
                </Link>
                <button className="position-absolute bottom-0 start-0 p-1 bg-light p-auto border-0 btn-outline-none" title='Add to wishlist' onClick={() => clickedW(item.id)}>
                    <i className={movieIds.wishlists.includes(item.id) ?'fa-solid fa-heart text-danger' : "fa-solid fa-heart"}></i>
                </button>
            </div>
        )
    })
    const suggestionRes = suggestion.map((item, i) => {
        return (
            <div key={i} className='col-lg-3 col-md-3 col-2 col-xs-6 my-4 align-self-center position-relative'>
                <Link to={detailUrl + item.id} className="card" style={{ width: '10rem' }}>
                    <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt='...' className="card-img-top" />
                </Link>
                <button className="position-absolute bottom-0 start-0 p-1 bg-light p-auto border-0 btn-outline-none" title='Add to wishlist' onClick={() => clickedW(item.id)}>
                    <i className={movieIds.wishlists.includes(item.id) ?'fa-solid fa-heart text-danger' : "fa-solid fa-heart"}></i>
                </button>
            </div>
        )
    })

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 7,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <>
            <Hero text={`Latest - ` + latest.title} backdrop={backdrop ? backdrop : poster} />
            {movieIds.ids && suggestion.length !== 0 &&
                <div className="container-fluid">
                    <h3 className="display-6 mx-4">Suggestions</h3>
                    <div className="row mx-5">
                        <Slider {...settings}>
                            {suggestionRes}
                        </Slider>
                    </div>
                </div>
            }
            <div className="container-fluid">
                <h3 className="display-6 mx-4">Popular</h3>
                <div className="row mx-5">
                    <Slider {...settings}>
                        {popularRes}
                    </Slider>
                </div>
            </div>
            <div className="container-fluid">
                <h3 className="display-6 mx-4">Top Rated</h3>
                <div className="row mx-5">
                    <Slider {...settings}>
                        {topRatedRes}
                    </Slider>
                </div>
            </div>
            <div className="container-fluid">
                <h3 className="display-6 mx-4">Upcoming</h3>
                <div className="row mx-5">
                    <Slider {...settings}>
                        {upcomingRes}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Home;

// all APIs

// popular - https://api.themoviedb.org/3/movie/popular?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US&page=1

// top rated - https://api.themoviedb.org/3/movie/top_rated?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US&page=1

// upcoming - https://api.themoviedb.org/3/movie/upcoming?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US&page=1

// latest - https://api.themoviedb.org/3/movie/latest?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US

// now playing - https://api.themoviedb.org/3/movie/now_playing?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US&page=1

// to get similar movies based on search -
// https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US&page=1