// import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import { FastAverageColor } from 'fast-average-color';

import Container from '../../shared/components/Container';
import {getRatingPercentage} from '../../shared/utils/utils';
import styles from './movie-details.module.scss';

const MovieDetails = ({item}) => {
    const [bgColor, setBgColor] = useState("rgba(120, 145, 165, 1)");
    const [isColorLight, setIsColorLight] = useState(false);

    useEffect(() => {
        const fac = new FastAverageColor();
        fac.getColorAsync(`https://image.tmdb.org/t/p/w342${item.poster_path}`, {algorithm: 'simple'})
        .then(color => {
            setBgColor(color.rgba);
            setIsColorLight(!color.isDark);
            
        })
        .catch(e => {
            console.log(e);
        }); 
    }, [item, setBgColor]) 

    const {title, poster_path, backdrop_path, tagline, vote_average, overview, genres = [], release_date} = item;

    const genreList = genres.map(genre => <li key={genre.id} className={styles.genre}>{genre.name}</li>);
    const percentage = getRatingPercentage(vote_average);
    const year = release_date.slice(0, 4);
    const gradColor1 = bgColor.slice(0, bgColor.length - 2) + " 0.9)";
    const gradColor2 = bgColor.slice(0, bgColor.length - 2) + " 0.7)";

    const containerStyle = {
        backgroundColor: bgColor,
        backgroundImage: `linear-gradient(to right,
             ${gradColor1},
             ${gradColor2}),
            url(https://image.tmdb.org/t/p/w1280${backdrop_path})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
    }
      
    return (
        <div className={styles.fullweightContainer} style={containerStyle}>
            <Container>
                <div className={isColorLight ? `${styles.movieCard} ${styles.darkThema}` : styles.movieCard}>
                    <div className={styles.poster}>
                        <img className={styles.image} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                    </div>
                    <div className={styles.meta}>
                        <h1 className={styles.title}>{title} <span className={styles.year}>({year})</span></h1>
                        <p>User Score: {percentage}%</p>
                        {tagline?.length > 0 && <p className={styles.tagline}>{tagline}</p>}
                        <h3 className={styles.subtitle}>Overview</h3>
                        <p>{overview}</p>
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