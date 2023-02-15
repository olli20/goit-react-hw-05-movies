import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {getCast} from '../../shared/api/api';

import Loading from '../../shared/components/Loading';
import Error from '../../shared/components/Error';
import CastList from '../../modules/CastList';

// import styles from './movie-cast-page.modle.scss';

const MovieCastPage = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    const {movieId} = useParams();

    useEffect(() => {
        const fetchCast = async() => {
            setState(prevState => ({
                ...prevState, 
                loading: true,
                error: null,
            }));
            try {
                const cast = await getCast(movieId);
                setState(prevState => {
                    return {
                        ...prevState,
                        items: [...prevState.items, ...cast]
                    }
                });
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }));
            } finally {
                setState(prevState => {
                    return {
                        ...prevState, 
                        loading: false }
                });
            }
        }
        fetchCast();
    }, [movieId, setState]) 

    const {items, loading, error} = state;

    return(
        <div>
            {loading && <Loading />}
            {error && <Error>Some error occured</Error>}
            {items.length > 0 && <CastList items={items} />}
        </div>
    )
}

export default MovieCastPage;