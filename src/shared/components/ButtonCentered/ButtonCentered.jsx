import PropTypes from 'prop-types';

import Button from '../Button';
import Container from '../Container';

import styles from './button-centered.module.scss';

const CenteredButton = ({onClick = null, children}) => {
    return (
        <Container>
            <div className={styles.container}>
                <Button onClick={onClick}>{children}</Button>
            </div>
        </Container>
    )
}

export default CenteredButton;

CenteredButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element]).isRequired,
}