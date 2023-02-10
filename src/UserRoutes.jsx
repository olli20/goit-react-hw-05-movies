import {lazy, Suspense} from 'react';
import {Routes, Route} from "react-router-dom";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesSearchPage = lazy(() => import("./pages/MoviesSearchPage/MoviesSearchPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));
const MovieCastPage = lazy(() => import('./pages/MovieCastPage/MovieCastPage'));
const MovieReviewsPage = lazy(() => import('./pages/MovieReviewsPage/MovieReviewsPage'));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...Load page</p>}>
            <Routes>
                <Route path="/goit-react-hw-05-movies/" element={<HomePage />} />
                <Route path="/goit-react-hw-05-movies/movies" element={<MoviesSearchPage />} />
                <Route path="/goit-react-hw-05-movies/movies/:movieId" element={<MovieDetailsPage />}>
                    <Route path="cast" element={<MovieCastPage />} />
                    <Route path="reviews" element={<MovieReviewsPage />} />
                </Route>
                <Route path="/goit-react-hw-05-movies*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>

    )
}

export default UserRoutes;