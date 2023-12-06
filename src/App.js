import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import CheckTokenNoNav from "./services/CheckToken/CheckTokenNoNav";

export default function App() {
    return (
        <>
            <CheckTokenNoNav />

            <BrowserRouter basemname={`/${process.env.PUBLIC_URL}`}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/skan" element={<MainPage />} />
                    <Route path="/auth" exact element={<AuthPage />} />
                    <Route path="/error" exact element={<ErrorPage />} />
                    <Route path="/results" exact element={<ResultsPage />} />
                    <Route path="/search" exact element={<SearchPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}