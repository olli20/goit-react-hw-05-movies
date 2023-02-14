// import PropTypes from 'prop-types';

import {getRatingPercentage} from '../../shared/utils/utils';

import styles from './movie-details.module.scss';

const MovieDetails = ({item}) => {
    const {title, poster_path, vote_average, overview, genres = []} = item;
    const genreList = genres.map(genre => <li key={genre.id} className={styles.genre}>{genre.name}</li>);
    const percentage = getRatingPercentage(vote_average);
    return (
        <div className={styles.wrapper}>
            <div className={styles.poster}>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} width="300" alt={title} />
            </div>
            <div>
                <h1 className="title">{title}</h1>
                <p>User Score: {percentage}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                {genres && <ul className={styles.genreList}>
                                {genreList}
                            </ul>}
            </div>
        </div>
    )
}

export default MovieDetails;

// MovieDetails.propTypes = {
//     item: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         poster_path: PropTypes.string,
//         vote_average: PropTypes.string.isRequired,
//         overview: PropTypes.string.isRequired,
//         genres: PropTypes.arrayOf(PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             id: PropTypes.number.isRequired,
//         })),
//     })
// }