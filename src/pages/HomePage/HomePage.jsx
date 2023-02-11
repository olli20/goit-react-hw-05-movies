import {useState, useEffect} from 'react';

import MoviesList from '../../modules/MoviesList/MoviesList';
import Loading from '../../shared/components/Loading/Loading';

import {getPopularMovies} from '../../shared/api/api';

const HomePage = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    })

    useEffect(() => {
        const fetchMovies = async() => {
            setState(prevState => ({
                ...prevState, 
                loading: true,
                error: null,
            }));
            try {
                const data = await getPopularMovies();
                setState(prevState => {
                    return {
                        ...prevState,
                        items: [...prevState.items, ...data]
                    }
                });
            }
            catch (error) {
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
        fetchMovies();
    }, [setState])

    const {items, loading} = state;

    return(
        <div className="container">
            <h2>Popular Movies</h2>
            {loading && <Loading />}
            <MoviesList items={items} />
        </div>
    )
}

export default HomePage;