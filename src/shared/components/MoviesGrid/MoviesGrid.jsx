import styles from './movies-grid.module.scss';

const MoviesGrid = ({children}) => {
    return (
        <ul className={styles.gird}>{children}</ul>
    )
}

export default MoviesGrid;