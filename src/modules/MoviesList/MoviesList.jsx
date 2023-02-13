import {Link, useLocation} from 'react-router-dom';
import {PropTypes} from 'prop-types';

import MoviesGrid from '../../shared/components/MoviesGrid';

import {countRatingPercentage} from '../../shared/utils/utils';

import styles from './movies-list.module.scss';

const MoviesList = ({items}) => {
    const location = useLocation();

    return (
        <MoviesGrid>
            {
                items.map(({id, title, poster_path, vote_average, release_date}) => {
                    return (<li className={styles.item} key={id}>
                                <div className={styles.link}>
                                    <Link className={styles.poster} state={{from: location}} to={`/goit-react-hw-05-movies/movies/${id}`}>
                                        <img className={styles.image} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="{title}" />
                                    </Link>
                                    <div className={styles.meta}>
                                        <div className={styles.rating}>
                                            <span className={styles.ratingNumber}>{countRatingPercentage(vote_average)}</span>
                                            <span className={styles.percentSign}>%</span>
                                        </div>
                                        <Link state={{from: location}} to={`/goit-react-hw-05-movies/movies/${id}`} className={styles.title}>{title}</Link>
                                        <p className={styles.release}>{release_date}</p>
                                    </div>
                                </div>
                            </li>);
                })
            }
        </MoviesGrid>
    )
}

export default MoviesList;

MoviesList.defaultProps = {
    items: []
}

MoviesList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired,
}