import styles from './movie-details.module.scss';

const MovieDetails = ({item}) => {
    const {title, poster_path, vote_average, overview, genres = []} = item;
    // const genreList = genres.map(genre => genre.name).join(", ");
    const genreList = genres.map(genre => <li key={genre.id} className={styles.genre}>{genre.name}</li>);

    return (
        <div className={styles.wrapper}>
            <div className={styles.poster}>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} width="200" alt={title} />
            </div>
            <div>
                <h2>{title}</h2>
                <p>User Score: {Math.round(vote_average * 10)}%</p>
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