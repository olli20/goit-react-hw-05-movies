import {useState, useEffect} from 'react';

import OptionsForm from '../../modules/OptionsForm';
import MoviesList from '../../modules/MoviesList';
import Loading from '../../shared/components/Loading';
import Button from '../../shared/components/Button';

import {getTrendingMovies} from '../../shared/api/api';

// import styles from './home-page.module.scss';

const HomePage = () => {
    const [state, setState] = useState({
        items: [],
        page: 1,
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
                const data = await getTrendingMovies(option, state.page);
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
    }, [setState, option, state.page]);

    const handleOptionChange = (target) => {
        setState(prevState => ({
            ...prevState,
            items: []
        }));
        setOption(target.value);
    }
    const handleShowMore = () => {
        setState(prevState => ({
            ...prevState,
            page: prevState.page + 1,
        }));
    }

    const {items, loading, error} = state;
    const isItems = items.length > 0;

    return(
        <div className="container">
            <h1 className="title">Trending Movies</h1>
            <OptionsForm onChange={handleOptionChange} option={option} />
            {isItems && <MoviesList items={items} onChange={handleOptionChange} />}
            {loading && <Loading />}
            {error && <p>Some error occured</p>}
            {isItems && <Button onClick={handleShowMore}>Show more</Button>}
        </div>
    )
}

export default HomePage;