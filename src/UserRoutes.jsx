import {lazy, Suspense} from 'react';
import {Routes, Route} from "react-router-dom";

import Loading from './shared/components/Loading/Loading';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesSearchPage = lazy(() => import("./pages/MoviesSearchPage/MoviesSearchPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));
const MovieCastPage = lazy(() => import('./pages/MovieCastPage/MovieCastPage'));
const MovieReviewsPage = lazy(() => import('./pages/MovieReviewsPage/MovieReviewsPage'));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesSearchPage />} />
                <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
                    <Route path="cast" element={<MovieCastPage />} />
                    <Route path="reviews" element={<MovieReviewsPage />} />
                </Route>
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;