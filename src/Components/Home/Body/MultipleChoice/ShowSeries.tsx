// ShowSeries.tsx
import { useEffect, useState } from "react";
import PieceCase from "../PieceCase/PieceCase";
const API_KEY = "?api_key=cedddbd1a4ac455ee7dbbde234598f6f";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_URL_SERIES = BASE_URL + "trending/tv/week" + API_KEY;

function getMovies(url: string, setMovies: Function) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setMovies(data.results);
            console.log(data.results);
        })
        .catch((err) => console.error("Error fetching series:", err));
}

function ShowSeries() {
    const [series, setSeries] = useState<any[]>([]);

    useEffect(() => {
        getMovies(API_URL_SERIES, setSeries);
    }, []);

    return (
        <div>
            {series.map((serie) => (
                <PieceCase
                    key={serie.id}
                    image={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                    alt={serie.name}
                    title={serie.name}
                />
            ))}
        </div>
    );
}

export default ShowSeries;
