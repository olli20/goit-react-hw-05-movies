import PropTypes from 'prop-types';

import styles from './error.module.scss';

const Error = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.message}>{children}</p>
        </div>
    )
}

export default Error;

Error.propTypes = {
    children: PropTypes.string.isRequired,
}