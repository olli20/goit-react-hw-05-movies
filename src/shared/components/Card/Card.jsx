import PropTypes from 'prop-types';

import styles from './card.module.scss';

const Card = ({children}) => {
    return (
        <div className={styles.card}>
            {children}
        </div>
    )
}

export default Card;

Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element]).isRequired,
}

