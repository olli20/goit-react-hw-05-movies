import Container from '../../components/Container';

import styles from './movies-grid.module.scss';

const MoviesGrid = ({children}) => {
    return (
        <Container>
            <div className={styles.gird}>{children}</div>
        </Container>
        
    )
}

export default MoviesGrid;