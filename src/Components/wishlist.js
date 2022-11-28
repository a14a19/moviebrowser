import Hero from "./hero";

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieContext from "../Context/movieContext";
import axios from "axios";

const Wishlist = () => {
    const wishMovie = useContext(MovieContext)
    const [wish, setWish] = useState([])
    const detailUrl = `/movie/`;
    const poster = `https://image.tmdb.org/t/p/original`;

    let arr = wish
    let rest = wishMovie.wishlists

    const clickedW = (i) => {
        wishMovie.setLiked(current => !current)
        if (!wishMovie.wishlists.includes(i)) {
            wishMovie.setWishlists([...rest, i])
        } else {
            let index = wishMovie.wishlists.indexOf(i);
            wishMovie.wishlists.splice(index, 1);
        }
    }

    const newState = wishMovie.wishlists.map((item) => item)

    console.log(newState);

    // async function wishFn() {
    //     axios.get(`https://api.themoviedb.org/3/movie/${newState}?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US`)
    //         .then(data => {
    //             console.log(data.data);
    //         })
    // }


    // * TODO: I want to get an array from the below axios get request. but when every time i call the axios get request it overwrites the previous o value, doesn't give me an array.
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${newState}?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US`)
            .then(data => {
                console.log(data.data);
                setWish(data.data)
            })
    }, [])

    console.log(wish);

    return (
        <>
            <Hero text='Wishlist' />
            <div className="container-fluid">
                <div className="row flex-wrap mx-3">
                </div>
            </div>
        </>
    )
}

export default Wishlist;

