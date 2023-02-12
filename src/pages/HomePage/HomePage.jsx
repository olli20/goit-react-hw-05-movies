import {useState, useEffect} from 'react';

import MoviesList from '../../modules/MoviesList/MoviesList';
import Loading from '../../shared/components/Loading/Loading';

import {getPopularMovies} from '../../shared/api/api';

import styles from './home-page.module.scss';

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
                items: [], 
                loading: true,
                error: null,
            }));
            try {
                const data = await getPopularMovies(option);
                setState(prevState => {
                    return {
                        ...prevState,
                        items: [...data]
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
    }, [setState, option]);

    const handleOptionChange = ({target}) => {
        setOption(target.value);
    }

    const {items, loading} = state;

    return(
        <div className="container">
            <h2>Trending Movies</h2>

            {/* options */}
            <form>
                <label className={styles.option}>
                    <input 
                        type="radio" 
                        name="option" 
                        value="day" 
                        onChange={handleOptionChange}
                        checked={option === "day"}
                    /> Day
                </label>
                <label className={styles.option}>
                    <input 
                        type="radio" 
                        name="option" 
                        value="week" 
                        onChange={handleOptionChange}
                        checked={option === "week"}
                    /> Week
                </label>
            </form>
            {loading && <Loading />}
            <MoviesList items={items} />
        </div>
    )
}

export default HomePage;