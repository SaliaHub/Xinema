import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {createTheme} from "@mui/material/styles";
import { ThemeProvider} from "@mui/system";

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
interface Type {
    nameOfChoice: string;
    nameOfLabel: string;
    arrayOfChoice: string[];
}
function Choice(props:Type) {

    return (
        <ThemeProvider theme={theme}>
            <FormControl sx={{ m: 1, width:140}} size="small"
            >
                <InputLabel id="demo-select-small-label">{props.nameOfChoice}</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    label={props.nameOfLabel}
                    variant="outlined"

                 >
                    {props.arrayOfChoice.map((filtre) => {
                        return (
                            <MenuItem key={filtre} value={filtre}>{filtre}</MenuItem>
                        )
                        })
                    }
                </Select>
            </FormControl>

        </ThemeProvider>
);
}


export default Choice;