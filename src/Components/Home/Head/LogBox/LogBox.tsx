import Button from "@mui/material/Button";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider} from "@mui/system";

declare module '@mui/material/styles' {
    interface Palette {
        ochre: Palette['primary'];
    }
    interface PaletteOptions {
        ochre?: PaletteOptions['primary'];
    }
}
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        ochre: true;
    }
}
const theme = createTheme({
    palette: {
        ochre: {
            main: '#ffffff',
            light: '#ffffff',
            dark: '#e7e7e7',
            contrastText: '#242105',
        },
    },
});
interface Type {
    containedOulined : "contained" | "text" | "outlined",
    outIn : string,
}
function LogBox(props: Type) {
    return (
            <ThemeProvider theme={theme}>
                    <Button
                        variant={props.containedOulined}
                        color="ochre"
                    >
                        {props.outIn}
                    </Button>
            </ThemeProvider>
    );
}
export default LogBox;
