import {Link, useLocation} from 'react-router-dom';
import {PropTypes} from 'prop-types';

import MoviesGrid from '../../shared/components/MoviesGrid';
import Rating from '../../shared/components/Rating/Rating';

import {formatDate} from '../../shared/utils/utils';
import defaultPoster from '../../shared/images/default-poster.png';
import styles from './movies-list.module.scss';

const MoviesList = ({items}) => {
    const location = useLocation();
    
    return (
        <MoviesGrid>
            {
                items.map(({id, title, poster_path, vote_average, release_date = null}) => {
                    const date = formatDate(release_date);
                    const poster = poster_path?.length > 0 ? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultPoster;
                    return (<li className={styles.item} key={id}>
                                <div className={styles.link}>
                                    <Link className={styles.poster} state={{from: location}} to={`/goit-react-hw-05-movies/movies/${id}`}>
                                        <img className={styles.image} src={poster} alt="{title}" />
                                    </Link>
                                    <div className={styles.meta}>
                                        <Rating vote={vote_average} />
                                        <Link state={{from: location}} to={`/goit-react-hw-05-movies/movies/${id}`} className={styles.title}>{title}</Link>
                                        {date && <p className={styles.release}>{date}</p>}
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