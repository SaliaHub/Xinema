import Filtre from "./MultipleChoice/Filtre.tsx";
import Genre from "./MultipleChoice/Genre.tsx";
import Box from "@mui/material/Box";
import Category from "./MultipleChoice/Category.tsx";
import {Outlet,useLocation} from "react-router-dom";
import ShowAll from "./MultipleChoice/ShowAll.tsx";

function Body() {
const contentOftheweek = useLocation();
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
                    justifyContent: "center",
                }}
            >
                {
                    contentOftheweek.pathname == "/Xinema/" ?
                        <ShowAll/> : <Outlet/>
                }
            </Box>
        </div>
    )
}

export default Body;