import {useState, useEffect, useCallback} from 'react';
import {useSearchParams} from 'react-router-dom';

import MoviesSearchForm from '../../modules/MoviesSearchForm';
import MoviesList from '../../modules/MoviesList';
import Loading from '../../shared/components/Loading';
import Error from '../../shared/components/Error';
import Container from '../../shared/components/Container';
import ButtonCentered from '../../shared/components/ButtonCentered';

import {searchMovies} from '../../shared/api/api';
// import styles from './movies-search-page.scss';

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
                        items: [...prevState.items, ...data.results],
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

    const onSubmit = useCallback((search) => {
        setSearchParams({search});
        setState(prevState =>({
            ...prevState,
            items: [],
            page: 1,
            error: null,
        }));
    }, [setSearchParams]);

    const handleShowMore = useCallback(() => {
        setState(prevState =>({
            ...prevState,
            page: prevState.page + 1,
        }));
    }, [])

    const {items, loading, error} = state;
    const isItems = items.length > 0;

    return (
        <div>
            <MoviesSearchForm onSubmit={onSubmit} />
            {isItems && <MoviesList items={items} />}
            {loading && <Loading />}
            {error && <Container><Error>Some error occured</Error></Container>}
            {isItems && !loading && <ButtonCentered onClick={handleShowMore}>Show more</ButtonCentered>}
        </div>
    )   
}

export default MoviesSearchPage;