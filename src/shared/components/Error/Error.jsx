// import Card from '../Card';
import Container from '../Container';

import styles from './error.module.scss';

const Error = ({children}) => {
    return (
        <Container>
            <div className={styles.wrapper}>
                <p className={styles.message}>{children}</p>
            </div>
        </Container>
    )
}

export default Error;