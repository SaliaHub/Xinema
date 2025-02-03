// ShowMovies.tsx
import { useEffect, useState } from "react";
import PieceCase from "../PieceCase/PieceCase";
const API_KEY = "?api_key=cedddbd1a4ac455ee7dbbde234598f6f";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_URL_MOVIE = BASE_URL + "trending/all/week" + API_KEY;

function getMovies(url: string, setMovies: Function) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setMovies(data.results);
            console.log(data.results);
        })
        .catch((err) => console.error("Error fetching movies:", err));
}

function ShowMovies() {
    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        getMovies(API_URL_MOVIE, setMovies);
    }, []);

    return (
        <div>
            {movies.map((piece) => (
                <PieceCase
                    key={piece.id}
                    image={`https://image.tmdb.org/t/p/w500${piece.poster_path}`}
                    alt={piece.title}
                    title={piece.title || piece.name}
                />
            ))}
        </div>
    );
}

export default ShowMovies;
