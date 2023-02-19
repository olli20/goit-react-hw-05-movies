import {NavLink} from 'react-router-dom';

import Container from '../../shared/components/Container';

import styles from './not-found-page.module.scss';

const NotFoundPage = () => {
    return(
        <Container>
            <div className={styles.container}>
                <h2>404</h2>
                <NavLink to={`/`}>Home page</NavLink>
            </div>
        </Container>
        
    )
}

export default NotFoundPage;