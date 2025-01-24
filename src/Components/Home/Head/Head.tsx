import LogIn from "./LogBox/LogIn.tsx";
import Stack from '@mui/material/Stack';
import SignIn from "./LogBox/SignIn.tsx";
import {Box} from "@mui/system";
import Logo from "./Logo/Logo.tsx";
import Search from "./SearchBar/Search.tsx";

function Head() {
    return (
        <div>
            <Search/>
            <Box
                sx={{
                    position: "absolute",
                    top: 16,
                    left: 30
            }}>
                <Logo />
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    top: 16,
                    right: 30
                }}>
                <Stack direction="row" spacing={2}>
                    <LogIn />
                    <SignIn />
                </Stack>
            </Box>

        </div>
    )
}
export default Head;