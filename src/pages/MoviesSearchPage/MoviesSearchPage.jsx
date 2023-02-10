import {useState, useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';


import {searchMovies} from '../../shared/api/api';

import MoviesSearchForm from '../../modules/MoviesSearchForm/MoviesSearchForm';
import MoviesList from '../../modules/MoviesList/MoviesList';

const MoviesSearchPage = () => {
    const [state, setState] = useState({
        items: [],
        page: 1,
        loading: false,
        error: null,
    });

    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search");

    useEffect(() => {
        const fetchMovies = async() => {
            try {
                setState(prevState =>({
                    ...prevState,
                    loading: true,
                }));
                const data = await searchMovies(search);
                setState(prevState =>({
                    ...prevState,
                    items: data,
                }));
            } catch (error) {
                setState(prevState =>({
                    ...prevState,
                    error,
                }));
            } finally {
                setState(prevState =>({
                    ...prevState,
                    loading: false,
                }));
            }
        }
        if(search) {
            fetchMovies();
        }
            
        }, [search])

    const onSubmit = (search) => {
        setSearchParams({search});
        // setState(prevState => {
        //     return {
        //         ...prevState,
        //         search,
        //     }
        // });
    }

    const {items} = state;

    return(
        <div className="container">
            <h2>Movies Search Page</h2>
            <MoviesSearchForm onSubmit={onSubmit} />
            <MoviesList items={items} />
        </div>
    )   
}

export default MoviesSearchPage;