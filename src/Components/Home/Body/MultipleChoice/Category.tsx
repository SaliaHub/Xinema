import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/system";

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
    return (
        <ThemeProvider theme={theme}>
            <ToggleButtonGroup
                exclusive
                aria-label="Platform"
            >
                <ToggleButton value="Film">Films</ToggleButton>
                <ToggleButton value="Series">Séries</ToggleButton>
            </ToggleButtonGroup>
        </ThemeProvider>

    );
}

export default Category;
