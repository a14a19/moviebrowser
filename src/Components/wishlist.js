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

    let arr = []
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

    // const newState = wishMovie.wishlists.map((item) => item)

    // const newState = wishMovie.wishlists.map((item) => {
    //     console.log(item);
    //     setWish([...wish, axios.get(`https://api.themoviedb.org/3/movie/${item}?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US`)
    //     .then(data => {
    //         console.log(data.data);
    //         return data.data
    //     })])
    // })

    // async function wishFn() {
    //     axios.get(`https://api.themoviedb.org/3/movie/${newState}?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US`)
    //         .then(data => {
    //             console.log(data.data);
    //         })
    // }


    // * TODO: I want to get an array from the below axios get request. but when every time i call the axios get request it overwrites the previous o value, doesn't give me an array.
    useEffect(() => {
        // axios.get(`https://api.themoviedb.org/3/movie/${newState}?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US`)
        //     .then(data => {
        //         console.log(data.data);
        //         setWish([...wish, data.data])
        //     })
        wishMovie.wishlists.map((item) => {
            axios.get(`https://api.themoviedb.org/3/movie/${item}?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US`)
            .then(data => {
                arr.push(data.data)
                setWish([...wish, wish.push(data.data)])
            })
        })

        // wishMovie.wishlists.map((item) => {
        //     console.log(item)
        //     fetch(`https://api.themoviedb.org/3/movie/${item}?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US`)
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data);
        //             arr.push(data)
        //         })
        // })

        // console.log(arr);
    }, [wishMovie.wishlists])

    const result = wish.map((item, i) => {
        // console.log(item);
        return (
            <div key={i} className='col-lg-3 col-md-3 col-2 col-xs-6 my-4 align-self-center position-relative'>
                <Link to={detailUrl + item.id} className="card" style={{ width: '10rem' }}>
                    <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt='...' className="card-img-top" />
                </Link>
                <button className="position-absolute bottom-0 start-0 p-1 bg-light p-auto border-0 btn-outline-none" title='Add to wishlist' onClick={() => clickedW(item.id)}>
                    <i className={wishMovie.wishlists.includes(item.id) ?'fa-solid fa-heart text-danger' : "fa-solid fa-heart"}></i>
                </button>
            </div>
        )
    })

    return (
        <>
            <Hero text='Wishlist' />
            <div className="container-fluid forheight">
                <div className="row flex-wrap mx-3">
                    {result}
                </div>
            </div>
        </>
    )
}

export default Wishlist;

