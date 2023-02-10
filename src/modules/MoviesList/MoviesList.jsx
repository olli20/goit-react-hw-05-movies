import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';

const MoviesList = ({items}) => {
    const elements = items.map(({id, title}) => {
        return (<li key={id}>
                    <Link to={`/goit-react-hw-05-movies/movies/${id}`}>{title}</Link>
                </li>);
    });

    return (
        <ol>
            {elements}
        </ol>
    )
}

export default MoviesList;

MoviesList.defaultProps = {
    items: []
}

MoviesList.propTypes = {
    items: PropTypes.array.isRequired
}