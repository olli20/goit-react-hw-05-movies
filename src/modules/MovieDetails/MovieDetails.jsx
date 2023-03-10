import PropTypes from 'prop-types';
import {useState, useEffect, memo} from 'react';
import {FastAverageColor} from 'fast-average-color';

import Container from '../../shared/components/Container';
import Rating from '../../shared/components/Rating';
import styles from './movie-details.module.scss';

import defaultPoster from '../../shared/images/default-poster.png';

const MovieDetails = ({item}) => {
    const [bgColor, setBgColor] = useState("rgba(120, 145, 165, 1)");
    const [isColorLight, setIsColorLight] = useState(false);

    useEffect(() => {
        const {poster_path, backdrop_path} = item;
        const fac = new FastAverageColor();
        if (poster_path?.length > 0) {
            fac.getColorAsync(`https://image.tmdb.org/t/p/w342${poster_path}`, {algorithm: 'simple'})
            .then(color => {
                setBgColor(color.rgba);
                setIsColorLight(!color.isDark);  
            })
            .catch(e => {
                console.log(e);
            }); 
        } else if (backdrop_path?.length > 0) {
            fac.getColorAsync(`https://image.tmdb.org/t/p/w300${backdrop_path}`, {algorithm: 'simple'})
            .then(color => {
                setBgColor(color.rgba);
                setIsColorLight(!color.isDark);  
            })
            .catch(e => {
                console.log(e);
            }); 
        } else {
            return;
        }
        
    }, [item, setBgColor]) 

    const {title, poster_path, backdrop_path, tagline, vote_average, overview, genres = [], release_date} = item;

    const poster = poster_path?.length > 0 ? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultPoster;

    const genreList = genres.map(genre => <li key={genre.id} className={styles.genre}>{genre.name}</li>);
    const year = release_date.slice(0, 4);

    const gradColor1 = bgColor.slice(0, bgColor.length - 2) + " 0.9)";
    const gradColor2 = bgColor.slice(0, bgColor.length - 2) + " 0.7)";

    const movieCardClassList = isColorLight ? `${styles.movieCard} ${styles.darkThema}` : styles.movieCard;

    const movieContainerStyle = {
        backgroundColor: bgColor,
        backgroundImage: `linear-gradient(to right,
             ${gradColor1},
             ${gradColor2}),
            url(https://image.tmdb.org/t/p/w1280${backdrop_path})`,
    }
      
    return (
        <div className={styles.fullweightContainer} style={movieContainerStyle}>
            <Container>
                <div className={movieCardClassList}>
                    <div className={styles.poster}>
                        <img className={styles.image} src={poster} alt={title} />
                    </div>
                    <div className={styles.meta}>
                        <h1 className={styles.title}>
                            {title} 
                            {year && <span className={styles.year}> ({year})</span>}
                        </h1>
                        <div className={styles.ratingWrapper}><Rating vote={vote_average} /></div>
                        {tagline?.length > 0 && <p className={styles.tagline}>{tagline}</p>}
                        <h3 className={styles.subtitle}>Overview</h3>
                        <p className={styles.overview}>{overview}</p>
                        <h3 className={styles.subtitle}>Genres</h3>
                        {genres && <ul className={styles.genreList}>
                                        {genreList}
                                    </ul>}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default memo(MovieDetails);

MovieDetails.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
        vote_average: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number]).isRequired,
        overview: PropTypes.string.isRequired,
        tagline: PropTypes.string,
        backdrop_path: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })),
        release_date: PropTypes.string.isRequired,
    })
}