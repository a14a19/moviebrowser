import Hero from "./hero";

const SearchView = ({ keyword, searchResults }) => {
    const title = `You are searching for ${keyword}`
    console.log(searchResults, "are the search results");
    return (
        <>
            <Hero text={title}/>
        </>
    )
}

export default SearchView;

// TMDB movie api = 037ce5b01644c77bdea3d4324fd003c5
// movie link = https://api.themoviedb.org/3/movie/50?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US
// https://api.themoviedb.org/3/search/movie?api_key=037ce5b01644c77bdea3d4324fd003c5&language=en-US&query=star-wars&page=1&include_adult=false