import {useState, useEffect} from 'react';
import {Link, Outlet, useParams, useNavigate, useLocation} from 'react-router-dom';

import MovieDetails from '../../modules/MovieDetails/MovieDetails';

import {getMovieById} from '../../shared/api/api';


const MovieDetailsPage = () => {
    const [state, setState] = useState({
        item: {},
        loading: false,
        error: null,
    });

    const {movieId} = useParams();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/goit-react-hw-05-movies";

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

    const goBack = () => navigate(from);

    return(
        <div className="container">
            <button onClick={goBack}>Go back</button>
            <MovieDetails item={state.item} />
            <hr />
            <p>Additional information</p>
            <ul>
                <li>
                    <Link state={{from}} to={`/goit-react-hw-05-movies/movies/${movieId}/cast`}>Cast</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link state={{from}} to={`/goit-react-hw-05-movies/movies/${movieId}/reviews`}>Reviews</Link>
                </li>
            </ul>
            <Outlet />
        </div>
        
    )
}

export default MovieDetailsPage;