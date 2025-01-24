// import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";
import Input from '@mui/material/Input';
import {createTheme} from "@mui/material/styles";
import { ThemeProvider} from "@mui/system";

const ariaLabel = { 'aria-label': 'description' };
const theme = createTheme({
    palette: {
            mode : 'dark',
            primary: {
                main: '#f8f8f8'
            },
        action: {
            hover:'rgba(255, 0, 0, 0.1)'
        }
    },
    }
)
  

function Search() {
    return (
        <ThemeProvider theme={theme}>
            <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1 },
            position: "absolute",
            top: 16,
            left: "40%"
        }}
            noValidate
            autoComplete="off"
            >
            <Input placeholder="Recherche" inputProps={ariaLabel}
                   sx={{
                       '&:hover:not(.Mui-disabled):before': {
                           borderBottom: '2px solid #bdbdbd'
                       }
                   }}/>
        </Box>
        </ThemeProvider>


    )
}
export default Search;