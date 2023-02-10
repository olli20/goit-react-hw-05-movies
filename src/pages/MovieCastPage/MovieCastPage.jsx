import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {getCast} from '../../shared/api/api';

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

    const {items} = state;

    const elements = items.map(({id, name, character, profile_path}) => {
        return (
            <li key={id}>
                <p>{name}</p>
                <div><img src={`https://image.tmdb.org/t/p/w500${profile_path}`} width="200" alt={name} /></div>
                <p>Character: {character}</p>
            </li>
        )
    })

    return(
        <div>
            <h3>Movie Cast</h3>
            <ul>
                {elements}
            </ul>
        </div>
    )
}

export default MovieCastPage;