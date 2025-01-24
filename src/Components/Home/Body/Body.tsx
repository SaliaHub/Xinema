import Filtre from "./MultipleChoice/Filtre.tsx";
import Genre from "./MultipleChoice/Genre.tsx";
import Box from "@mui/material/Box";
import Category from "./MultipleChoice/Category.tsx";
import PieceCase from "./PieceCase/PieceCase.tsx";

function Body() {
    return (
        <div>
            <Box
                sx={{
                    position: "absolute",
                    top: "18%",
                    left: "40%"
                }}
            >
                <Category/>
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    top: "25%",
                    left: "70%"
                }}
            >
                <Filtre />
                <Genre />
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    top: "320px",
                    left: "200px"
                }}
            >
                <PieceCase/>
            </Box>
        </div>
    )
}

export default Body;