import Head from "./Home/Head/Head.tsx";
import {Container} from "@mui/system";
// import Categories from "./Home/Head/flimsSeries/Categories.tsx";
import Body from "./Home/Body/Body.tsx";

function App(){
    return (
        <Container>
            <Head />
            {/*<Categories />*/}
            <Body/>
        </Container>
    )
}
export default App;