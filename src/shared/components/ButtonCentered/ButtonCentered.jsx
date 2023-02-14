import Button from '../Button';
import Container from '../Container';

import styles from './button-centered.module.scss';

const CenteredButton = ({onClick, children}) => {
    return (
        <Container>
            <div className={styles.container}>
                <Button onClick={onClick}>{children}</Button>
            </div>
            
        </Container>
    )
}

export default CenteredButton;