import {useState, useEffect, useCallback} from 'react';
import {NavLink, Outlet, useParams, useNavigate, useLocation} from 'react-router-dom';

import { IoIosArrowRoundBack } from "react-icons/io";

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
                setState(prevState => ({
                        ...prevState,
                        item: data,
                }));
            }
            catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }));
            }
            finally {
                setState(prevState => ({
                    ...prevState, 
                    loading: false 
                }));
            }
        }
        fetchMovieDetails();
    }, [movieId, setState])

    const getSubMenuClassList = ({isActive}) => {
        return isActive ? `${styles.link} ${styles.active}` : styles.link;
    }

    const goBack = useCallback(() => navigate(from), [from, navigate]);

    const {item, loading, error} = state;
    const isItem = item.hasOwnProperty("title");

    return (
        <>
            <Container><button className={styles.button} onClick={goBack}><IoIosArrowRoundBack />Go back</button></Container>
            {loading && <Loading />}
            {error && <Container><Error>Some error occurred</Error></Container>}
            {isItem && <MovieDetails item={state.item} />}
            {/* Cast and Review */}
            {isItem && 
                <Container>
                    <ul className={styles.list}>
                        <li><NavLink className={getSubMenuClassList} state={{from}} to={`/goit-react-hw-05-movies/movies/${movieId}/cast`}>Cast</NavLink></li>
                        <li><NavLink className={getSubMenuClassList} state={{from}} to={`/goit-react-hw-05-movies/movies/${movieId}/reviews`}>Reviews</NavLink></li>
                    </ul>
                </Container>
            }
            <Outlet />
        </>
    )
}

export default MovieDetailsPage;