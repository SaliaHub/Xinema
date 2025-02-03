import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from "./Components/App.tsx"
import NotFoundPage from "./NotFoundPage.tsx";
import ShowMovies from "./Components/Home/Body/MultipleChoice/ShowMovies.tsx";
import ShowSeries from "./Components/Home/Body/MultipleChoice/ShowSeries.tsx";
// import ShowAll from "./Components/Home/Body/MultipleChoice/ShowAll.tsx";

const Router = createBrowserRouter([
    {
        path: "/Xinema/",
        element:<App/>,
        errorElement:<NotFoundPage/>,
        children: [
            {
                path: "movies",
                element:<ShowMovies/>
            },
            {
              path:"series",
              element:<ShowSeries/>
            }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={Router}/>
    </StrictMode>,
)
