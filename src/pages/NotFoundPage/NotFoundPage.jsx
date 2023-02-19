import {NavLink} from 'react-router-dom';

import Container from '../../shared/components/Container';

const NotFoundPage = () => {
    return(
        <Container>
            <h2>404</h2>
            <NavLink to={`/goit-react-hw-05-movies/`}>Home page</NavLink>
        </Container>
        
    )
}

export default NotFoundPage;