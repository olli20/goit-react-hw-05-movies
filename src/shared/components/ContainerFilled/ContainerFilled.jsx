import PropTypes from 'prop-types';

import styles from './container-filled.module.scss';

const ContainerFilled = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default ContainerFilled;

ContainerFilled.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node]).isRequired,
}
