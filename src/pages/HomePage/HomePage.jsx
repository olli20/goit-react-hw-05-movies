import {useState, useEffect} from 'react';

import OptionsForm from '../../modules/OptionsForm/OptionsForm';
import MoviesList from '../../modules/MoviesList/MoviesList';
import Loading from '../../shared/components/Loading/Loading';

import {getPopularMovies} from '../../shared/api/api';

// import styles from './home-page.module.scss';

const HomePage = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    })

    const [option, setOption] = useState("day");

    useEffect(() => {
        const fetchMovies = async() => {
            setState(prevState => ({
                ...prevState, 
                loading: true,
                error: null,
            }));
            try {
                const data = await getPopularMovies(option);
                setState(prevState => ({
                    ...prevState,
                    items: [...prevState.items, ...data]
                }));
            }
            catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }));
            } finally {
                setState(prevState => ({
                    ...prevState, 
                    loading: false 
                }));
            }
        }
        fetchMovies();
    }, [setState, option]);

    const handleOptionChange = (target) => {
        setState(prevState => ({
            ...prevState,
            items: []
        }));
        setOption(target.value);
    }

    const {items, loading} = state;

    return(
        <div className="container">
            <h2>Trending Movies</h2>
            <OptionsForm onChange={handleOptionChange} option={option} />
            {loading && <Loading />}
            <MoviesList items={items} onChange={handleOptionChange} />
        </div>
    )
}

export default HomePage;