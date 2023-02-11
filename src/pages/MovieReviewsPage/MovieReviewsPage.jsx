import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {getReviews} from '../../shared/api/api';

const MovieReviewsPage = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    const {movieId} = useParams();

    useEffect(() => {
        const fetchReviews = async() => {
            setState(prevState => ({
                ...prevState, 
                loading: true,
                error: null,
            }));
            try {
                const data = await getReviews(movieId);
                setState(prevState => {
                    return {
                        ...prevState,
                        items: [...prevState.items, ...data]
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
        fetchReviews();
    }, [movieId, setState]) 

    const {items} = state;

    const elements = items.map((item) => {
        return (<li key={item.id}>
                    <p>Author: {item.author}</p>
                    <p>{item.content}</p>  
                </li>)
        }
    );

    return (
        <div>
            <h3>Reviews</h3>
            <ol>{elements}</ol>
        </div>
    )
}

export default MovieReviewsPage;