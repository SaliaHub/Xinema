import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/system";
import {useNavigate} from "react-router-dom";


const theme = createTheme({
        palette: {
            mode : 'dark',
            primary: {
                main: '#f8f8f8'
            },
            secondary:{
                main:'#dedede'
            },
            action: {
                hover:'rgba(222, 222, 222, 0.1)'
            }
        },
    }
)

function Category() {
    const navigate = useNavigate();
    return (
        <ThemeProvider theme={theme}>
            <ToggleButtonGroup
                exclusive
                aria-label="Platform"
            >
                <ToggleButton value="Film" onClick={() => {navigate("/Xinema/movies"); }}>Films</ToggleButton>
                <ToggleButton value="Series" onClick={() => {navigate("/Xinema/series");}}>Séries</ToggleButton>
            </ToggleButtonGroup>
        </ThemeProvider>
    );
}

export default Category;
