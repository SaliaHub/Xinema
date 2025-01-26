import { useState, useEffect } from "react";

const API_KEY = "?api_key=cedddbd1a4ac455ee7dbbde234598f6f";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_URL = BASE_URL + "trending/movie/week" + API_KEY;

function getMovies(url: string, setMovies: Function) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setMovies(data.results);
            console.log(data.results);
        })
        .catch((err) => console.error("Error fetching movies:", err));
}

function PieceCase({
                       image,
                       alt,title}: {
    image: string;
    alt: string;title:string }) {
    const [backGround, setBackGround] = useState(false);

    function withMouseOver() {
        setBackGround(true);
    }

    function withOutMouseOver() {
        setBackGround(false);
    }

    return (
        <div
            style={{
                display: "inline-block",
                position: "relative",
                width: 400,
                height: 256,
                border: "1px solid rgba(171,171,171,0.43)",
                borderRadius: 11,
                margin: 16,
            }}
        >
            <img
                src={image}
                alt={alt}
                style={{
                    position: "absolute",
                    height: 256,
                    width: 170,
                    top: 0,
                    borderRadius:10
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 180,
                }}
            >
                <h1
                    style={{
                        fontSize: 20,
                        color: "white",
                        left: 180,
                        fontFamily: "Verdana",

                    }}>
                    {title}
                </h1>
                <button
                    value={"Bande Annonce"}
                    type={"button"}
                    onMouseOver={withMouseOver}
                    onMouseOut={withOutMouseOver}
                    style={{
                        left: 180,
                        top: 50,
                        color: "white",
                        display: "inline",
                        border: "1px solid #FFFFFFFF",
                        borderRadius: 5,
                        background: backGround ? "rgba(117,117,117,0.4)" : "transparent",
                    }}
                >
                    Bande annonce
                </button>
            </div>

        </div>
    );
}

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies(API_URL, setMovies);
    }, []);

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {movies.map((movie: any) => (
                <PieceCase
                    key={movie.id}
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    title={movie.title}
                />
            ))}
        </div>
    );
}

export default App;
