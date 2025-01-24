import ListOfGenre from "./ListeGenre.ts";
import Choice from "./Choice.tsx";

function Filtre() {
    return (
        <Choice
            nameOfChoice="Genre"
            nameOfLabel="Genre"
            arrayOfChoice={ListOfGenre}
        />
    )
}

export default Filtre;