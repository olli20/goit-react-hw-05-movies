import PropTypes from 'prop-types';

import Grid from '../../shared/components/Grid';

import styles from './cast-list.module.scss';
import defaultImage from '../../shared/images/default-avatar.png';

const CastList = ({items}) => {
    const elements = items.map(({id, name, character, profile_path}) => {
        const profileImage = profile_path?.length > 0 ? `https://image.tmdb.org/t/p/w500${profile_path}` : defaultImage;
        return (
            <div className={styles.item} key={id} >
                <div className={styles.wrapper}>
                    <div className={styles.poster}>
                        <img className={styles.image} src={profileImage} alt={name} />
                    </div>
                    <div className={styles.meta}>
                        <p className={styles.name}>{name}</p>
                        <p className={styles.character}>{character}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <Grid type="actors">
            {elements}
        </Grid>
    )
}

export default CastList;

CastList.defaultProps = {
    items: [],
}

CastList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        character: PropTypes.string.isRequired,
        profile_path: PropTypes.string,
    })).isRequired,
}