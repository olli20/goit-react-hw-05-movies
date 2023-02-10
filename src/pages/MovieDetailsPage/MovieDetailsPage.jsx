import {useState, useEffect} from 'react';
import {Link, Outlet, useParams} from 'react-router-dom';

import MovieDetails from '../../modules/MovieDetails/MovieDetails';

import {getMovieById} from '../../shared/api/api';


const MovieDetailsPage = () => {
    const [state, setState] = useState({
        item: {},
        loading: false,
        error: null,
    });

    const {movieId} = useParams();

    useEffect(() => {
        const fetchMovieDetails = async() => {
            setState(prevState => ({
                ...prevState, 
                loading: true,
                error: null,
            }));
            try {
                const data = await getMovieById(movieId);
                setState(prevState => {
                    return {
                        ...prevState,
                        item: data,
                    }
                });
            }
            catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }));
            }
            finally {
                setState(prevState => {
                    return {
                        ...prevState, 
                        loading: false }
                });
            }
        }
        fetchMovieDetails();
    }, [movieId, setState])

    return(
        <div className="container">
            <MovieDetails item={state.item} />
            <hr />
            <p>Additional information</p>
            <ul>
                <li>
                    <Link to={`/goit-react-hw-05-movies/movies/${movieId}/cast`}>Cast</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to={`/goit-react-hw-05-movies/movies/${movieId}/reviews`}>Reviews</Link>
                </li>
            </ul>
            <Outlet />
        </div>
        
    )
}

export default MovieDetailsPage;