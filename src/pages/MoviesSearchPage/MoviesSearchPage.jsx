import {useState, useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';

import {searchMovies} from '../../shared/api/api';

import MoviesSearchForm from '../../modules/MoviesSearchForm/MoviesSearchForm';
import MoviesList from '../../modules/MoviesList/MoviesList';
import Loading from '../../shared/components/Loading/Loading';
import Button from '../../shared/components/Button/Button';

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
                const data = await searchMovies(search, state.page);
                setState(prevState =>({
                    ...prevState,
                    items: [...prevState.items, ...data],
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
            
        }, [search, state.page, setState])

    const onSubmit = (search) => {
        setSearchParams({search});
        setState(prevState =>({
            ...prevState,
            items: [],
            page: 1,
            error: null,
        }));
    }

    const handleShowMore = () => {
        setState(prevState =>({
            ...prevState,
            page: prevState.page + 1,
        }));
    }

    const {items, loading} = state;
    const isItems = items.length > 0;

    return(
        <div className="container">
            <h2>Movies Search Page</h2>
            <MoviesSearchForm onSubmit={onSubmit} />
            {isItems && <MoviesList items={items} />}
            {loading && <Loading />}
            {isItems && <Button onClick={handleShowMore}>Show more</Button>}
        </div>
    )   
}

export default MoviesSearchPage;