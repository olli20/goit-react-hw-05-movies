import PropTypes from 'prop-types';

import styles from './cast-list.module.scss';

import defaultImage from '../../shared/images/default-avatar.png';

const CastList = ({items}) => {
    const elements = items.map(({id, name, character, profile_path}) => {
        const profileImage = profile_path?.length > 0 ? `https://image.tmdb.org/t/p/w500${profile_path}` : defaultImage;
        return (
            <li key={id} className={styles.item}>
                <img src={profileImage} width="150" alt={name} />
                <p>{name}</p>
                <p>Character: {character}</p>
            </li>
        )
    })
    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
}

export default CastList;

CastList.defaultProps = {
    items: [],
}

CastList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        character: PropTypes.string.isRequired,
        profile_path: PropTypes.string,
    })).isRequired,
}