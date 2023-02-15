import {useState, useEffect} from 'react';
import {NavLink, Outlet, useParams, useNavigate, useLocation} from 'react-router-dom';

import MovieDetails from '../../modules/MovieDetails';
import Loading from '../../shared/components/Loading';
import Error from '../../shared/components/Error';
import Container from '../../shared/components/Container';

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

        const getClassList = ({isActive}) => {
        return isActive ? `${styles.link} ${styles.active}` : styles.link;
    }

    const goBack = () => navigate(from);

    const {item, loading, error} = state;
    const isItem = item.hasOwnProperty("title");

    return (
        <div>
            <Container><button onClick={goBack}>Go back</button></Container>

            {loading && <Loading />}
            {error && <Error>Some error occured</Error>}

            {isItem && <MovieDetails item={state.item} />}
            
            {isItem && <Container>
                <ul className={styles.list}>
                    <li>
                        <NavLink className={getClassList} state={{from}} to={`/goit-react-hw-05-movies/movies/${movieId}/cast`}>Cast</NavLink>
                    </li>
                    <li>
                        <NavLink className={getClassList} state={{from}} to={`/goit-react-hw-05-movies/movies/${movieId}/reviews`}>Reviews</NavLink>
                    </li>
                </ul>
            </Container>}
            <Outlet />
        </div>
    )
}

export default MovieDetailsPage;