import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import ResetCss from "../css/ResetCss";
import GlobalStyles from "../css/GlobalStyles";

import Header from "./Header";
import MoviesList from "./MoviesList"
import MoviesSchedule from "./MoviesSchedule"

export default function App () {
    return (
        <BrowserRouter>
            <ResetCss />
            <GlobalStyles />
            <Header />
            <Routes>
                <Route path="/" element={<MoviesList />} />
                <Route path="/sessoes/:idFilme" element={<MoviesSchedule />} />
            </Routes>
        </BrowserRouter>
    )
}