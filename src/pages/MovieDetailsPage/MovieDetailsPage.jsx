import {useState, useEffect} from 'react';
import {NavLink, Outlet, useParams, useNavigate, useLocation} from 'react-router-dom';

import MovieDetails from '../../modules/MovieDetails';
import Loading from '../../shared/components/Loading';

import styles from './movie-details-page.module.scss';

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

    const {loading, error} = state;

    const getClassList = ({isActive}) => {
        return isActive ? `${styles.link} ${styles.active}` : styles.link;
    }

    return (
        <div className="container">
            <button onClick={goBack}>Go back</button>

            {loading && <Loading />}
            {error && <p>Error</p>}

            <MovieDetails item={state.item} />
            <hr />
            <p>Additional information</p>
            <ul className={styles.list}>
                <li>
                    <NavLink className={getClassList} state={{from}} to={`/goit-react-hw-05-movies/movies/${movieId}/cast`}>Cast</NavLink>
                </li>
                <li>
                    <NavLink className={getClassList} state={{from}} to={`/goit-react-hw-05-movies/movies/${movieId}/reviews`}>Reviews</NavLink>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default MovieDetailsPage;