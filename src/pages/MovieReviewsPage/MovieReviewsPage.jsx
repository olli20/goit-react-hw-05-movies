import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {getReviews} from '../../shared/api/api';

import Container from '../../shared/components/Container';
import Card from '../../shared/components/Card';
import Loading from '../../shared/components/Loading';
import Error from '../../shared/components/Error';

import styles from './movie-reviews-page.module.scss';

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

    const {items, loading, error} = state;

    const elements = items.map((item) => {
        const {id, author, content} = item;
        return (<li className={styles.item} key={id}>
                    <Card>
                        <p className={styles.name}>Author: {author}</p>
                        <p className={styles.content}>{content}</p>  
                    </Card>
                </li>)
        }
    );

    return (
        <Container>
            {loading && <Loading />}
            {error && <Error>Some error occured</Error>}
            {items.length > 0 && <ul className={styles.list}>{elements}</ul>}
            {!loading && items.length === 0 && <p>We don't have any reviews for this movie.</p>}
        </Container>
    )
}

export default MovieReviewsPage;