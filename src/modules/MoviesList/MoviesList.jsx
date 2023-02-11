import {Link, useLocation} from 'react-router-dom';
import {PropTypes} from 'prop-types';

const MoviesList = ({items}) => {
    const location = useLocation();
    const elements = items.map(({id, title}) => {
        return (<li key={id}>
                    <Link state={{from: location}} to={`/goit-react-hw-05-movies/movies/${id}`}>{title}</Link>
                </li>);
    });

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default MoviesList;

MoviesList.defaultProps = {
    items: []
}

MoviesList.propTypes = {
    items: PropTypes.array.isRequired
}