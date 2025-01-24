import ListeFiltre from "./ListeFiltre.ts";
import Choice from "./Choice.tsx";

function Filtre() {
    return (
            <Choice
                nameOfChoice="Filtre"
                nameOfLabel="Filtre"
                arrayOfChoice={ListeFiltre}
            />
        )

}

export default Filtre;